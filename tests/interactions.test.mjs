// Controller integration checks with an in-memory document, not a browser/layout test.
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import * as core from '../core.mjs';

function setup(seed=null,failStorage=false){
  const listeners={},nodes=Object.fromEntries(['app','modal-root','toast','print-area'].map(id=>[id,{innerHTML:'',textContent:'',inert:false,classList:{add(){},remove(){}},querySelector(){return null;}}]));
  const memory=new Map(seed?[[core.STORAGE_KEY,JSON.stringify(seed)]]:[]),timers=new Map();let timerId=0;
  const document={activeElement:null,visibilityState:'visible',getElementById:id=>nodes[id]||null,querySelector:()=>null,querySelectorAll:()=>[],addEventListener:(name,fn)=>listeners[name]=fn};
  const window={addEventListener(){},scrollTo(){},print(){}};
  const context=vm.createContext({...core,esc:core.escapeHTML,document,window,structuredClone,console,Blob,URL,queueMicrotask:fn=>fn(),setTimeout:fn=>{timers.set(++timerId,fn);return timerId;},clearTimeout:id=>timers.delete(id),localStorage:{getItem:k=>memory.get(k)||null,setItem:(k,v)=>{if(failStorage)throw new Error('quota');memory.set(k,v);}},FormData:class{constructor(form){this.values=form.values;}get(k){return this.values[k]??null;}}});
  const source=readFileSync(new URL('../app.mjs',import.meta.url),'utf8').replace(/^import [^\n]+\n/,'');
  vm.runInContext(source+'\n globalThis.__test={getState:()=>state,getView:()=>view,getStep:()=>step,saveState};',context);
  const click=async(action,data={})=>{const el={dataset:{action,...data},disabled:false};await listeners.click({target:{closest:()=>el}});};
  const input=(id,value,dataset={})=>listeners.input({target:{id,value,dataset}});
  const change=target=>listeners.change({target});
  const submit=(id,values)=>listeners.submit({target:{id,values},preventDefault(){}});
  return {nodes,memory,context,listeners,click,input,change,submit,state:()=>context.__test.getState()};
}
test('the actual controller renders six grades and switches to grade 6 missions',async()=>{
  const h=setup();assert.match(h.nodes.app.innerHTML,/Small words/);assert.equal((h.nodes.app.innerHTML.match(/data-action="grade"/g)||[]).length,6);assert.equal((h.nodes.app.innerHTML.match(/class="mission-card /g)||[]).length,5);
  await h.click('grade',{grade:'6'});assert.equal(h.state().profiles[0].grade,6);assert.match(h.nodes.app.innerHTML,/One place, two viewpoints/);assert.match(h.nodes.app.innerHTML,/<strong>150<\/strong> word target/);assert.equal(JSON.parse(h.memory.get(core.STORAGE_KEY)).profiles[0].grade,6);
});
test('writing, reviewing and finishing persists a story and unlocks the next mission',async()=>{
  const h=setup();await h.click('open-mission',{id:'g1l1'});assert.match(h.nodes.app.innerHTML,/Let your ideas take root/);
  for(let i=0;i<3;i++)h.input(`plan-${i}`,['cat','soft','runs'][i],{plan:String(i)});
  await h.click('step',{step:'write'});h.input('story-title','My little cat');h.input('story-text','My little cat is very soft and likes to run.');
  await h.click('step',{step:'polish'});
  for(let i=0;i<3;i++)await h.change({dataset:{check:String(i)},checked:true});
  await h.click('finish');const p=h.state().profiles[0];assert.equal(p.completed.g1l1.stars,3);assert.match(h.nodes['modal-root'].innerHTML,/Look what you created/);assert.equal(core.isUnlocked(p,core.missionById('g1l2')),true);
  await h.click('celebration-home');await h.click('portfolio');assert.match(h.nodes.app.innerHTML,/My little cat/);
  await h.click('open-mission',{id:'g1l1'});h.input('story-text','A newer version that has not been finished just yet.');assert.equal(p.drafts.g1l1.checks.every(x=>!x),true);assert.equal(p.completed.g1l1.text,'My little cat is very soft and likes to run.');
});
test('profiles retain separate drafts and learning settings',async()=>{
  const h=setup();await h.click('open-mission',{id:'g1l1'});h.input('story-text','A saved idea.');const first=h.state().activeProfile;
  h.submit('add-profile-form',{'new-writer-name':'Second writer'});assert.equal(h.state().profiles.length,2);assert.notEqual(h.state().activeProfile,first);assert.equal(h.state().profiles[1].drafts.g1l1,undefined);
  await h.click('settings');h.submit('targets-form',{'target-1':'5','target-2':'10','target-3':'15','target-4':'20','target-5':'25'});assert.equal(h.state().profiles[1].settings.targets.g1l1,5);assert.equal(h.state().profiles[0].settings.targets.g1l1,undefined);
  await h.click('switch-profile',{id:first});assert.equal(h.state().profiles[0].drafts.g1l1.text,'A saved idea.');assert.equal(h.state().activeProfile,first);
});
test('backup restoration waits for confirmation and sanitises displayed writer names',async()=>{
  const h=setup(),backup=core.newState();backup.profiles[0].name='<img src=x onerror=alert(1)>';
  const before=h.state().activeProfile;
  await h.change({id:'restore-file',files:[{size:500,text:async()=>JSON.stringify(backup)}],value:'backup.json',dataset:{}});
  assert.equal(h.state().activeProfile,before);assert.match(h.nodes['modal-root'].innerHTML,/&lt;img/);assert.doesNotMatch(h.nodes['modal-root'].innerHTML,/<img/);
  await h.click('confirm-restore');assert.equal(h.state().activeProfile,backup.activeProfile);assert.match(h.nodes.app.innerHTML,/&lt;img/);assert.doesNotMatch(h.nodes.app.innerHTML,/<img/);
});
test('storage failure preserves in-memory writing and reports the problem',async()=>{
  const h=setup(null,true);await h.click('open-mission',{id:'g1l1'});h.input('story-text','My story is still here.');h.context.__test.saveState();await h.click('home');assert.match(h.nodes.app.innerHTML,/cannot save your writing/);assert.equal(h.state().profiles[0].drafts.g1l1.text,'My story is still here.');
});
