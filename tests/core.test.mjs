import test from 'node:test';
import assert from 'node:assert/strict';
import * as c from '../core.mjs';

const fill=(p,id,words=10)=>{p.drafts[id]={...c.emptyDraft(),text:Array(words).fill('word').join(' ')};return p.drafts[id];};

test('all six grades have five complete missions and increasing word targets',()=>{
  assert.equal(c.MISSIONS.length,30);assert.equal(new Set(c.MISSIONS.map(m=>m.id)).size,30);
  for(let grade=1;grade<=6;grade++){
    const ms=c.MISSIONS.filter(m=>m.grade===grade);assert.deepEqual(ms.map(m=>m.level),[1,2,3,4,5]);
    for(const m of ms){assert.equal(m.plan.length,3);assert.ok(m.prompt.length>30);assert.ok(m.bank.length>=5);assert.ok(m.tips.length>=3);}
    assert.ok(c.TARGETS[grade].every((n,i,a)=>i===0||n>a[i-1]));
  }
});
test('word counting handles children’s writing, punctuation, Unicode and empty pages',()=>{
  assert.equal(c.countWords(''),0);assert.equal(c.countWords('  \n 😊 ! — '),0);
  assert.equal(c.countWords('I like my little brown dog.'),6);
  assert.equal(c.countWords("Don't forget Sammy’s well-loved cat."),5);
  assert.equal(c.countWords('café mañana 123\nnew line'),5);
  assert.equal(c.countWords('hello—world'),2);
  assert.equal(c.countSentences('I ran. She laughed! Why?'),3);
  assert.equal(c.countSentences('One thought without an ending'),1);
  assert.equal(c.countSentences('...'),0);
  assert.equal(c.countParagraphs('First\nline.\n\nSecond.\n\n '),2);
});
test('first levels are open, finishing requires the body target, and unlocking stays within the grade',()=>{
  const p=c.newProfile();
  for(let g=1;g<=6;g++){assert.equal(c.isUnlocked(p,c.missionById(`g${g}l1`)),true);assert.equal(c.isUnlocked(p,c.missionById(`g${g}l2`)),false);}
  const d=fill(p,'g1l1',9);d.title='This title has many extra words that do not count';d.plan=['lots of planning words','another complete idea','the ending'];
  assert.equal(c.completeMission(p,c.missionById('g1l1')).ok,false);
  assert.equal(Object.keys(p.completed).length,0);
  d.text+=' final';const done=c.completeMission(p,c.missionById('g1l1'));assert.equal(done.ok,true);assert.equal(done.stars,2);
  assert.equal(c.isUnlocked(p,c.missionById('g1l2')),true);assert.equal(c.isUnlocked(p,c.missionById('g2l2')),false);assert.equal(c.isUnlocked(p,c.missionById('g1l3')),false);
});
test('locked missions cannot be completed even with enough words',()=>{
  const p=c.newProfile();fill(p,'g1l5',40);assert.equal(c.completeMission(p,c.missionById('g1l5')).reason,'locked');
  p.settings.unlockAll=true;assert.equal(c.completeMission(p,c.missionById('g1l5')).ok,true);
});
test('planning and self-review earn extra stars without duplicate rewards on replay',()=>{
  const p=c.newProfile(),m=c.missionById('g1l1'),d=fill(p,m.id,10);
  assert.equal(c.earnedStars(d,10),1);d.plan=['animal','small','runs'];assert.equal(c.earnedStars(d,10),2);d.checks=[true,true,true];assert.equal(c.earnedStars(d,10),3);
  c.completeMission(p,m,'2026-10-15T00:00:00Z');const s=c.stats(p);assert.equal(s.completed,1);assert.equal(s.stars,3);
  d.text+=' more';d.checks=[false,false,false];c.completeMission(p,m,'2026-10-16T00:00:00Z');
  assert.equal(c.stats(p).stars,3);assert.equal(c.stats(p).completed,1);assert.equal(p.completed[m.id].completedAt,'2026-10-15T00:00:00Z');assert.equal(c.countWords(p.completed[m.id].text),11);
  d.text='changed draft';assert.notEqual(p.completed[m.id].text,d.text,'finished writing is an independent snapshot');
});
test('custom word targets and each writer’s data stay independent',()=>{
  const p=c.newProfile('One'),q=c.newProfile('Two'),m=c.missionById('g6l1');p.settings.targets[m.id]=5;fill(p,m.id,5);
  assert.equal(c.completeMission(p,m).ok,true);assert.equal(c.getTarget(q,m),150);assert.equal(c.stats(q).completed,0);assert.equal(c.stats(q).words,0);
  assert.equal(c.getTarget(p,m),5);assert.equal(c.getTarget(p,c.missionById('g1l1')),10);
});
test('a backup round-trip preserves profiles, drafts, finished stories and targets',()=>{
  const state=c.newState(),p=state.profiles[0];p.settings.targets.g1l1=7;const d=fill(p,'g1l1',7);d.title='A bird';d.plan=['bird','blue','flies'];d.checks=[true,true,true];c.completeMission(p,c.missionById('g1l1'));
  state.profiles.push(c.newProfile('Another writer'));const restored=c.normaliseState(JSON.parse(JSON.stringify(state)));
  assert.equal(restored.profiles.length,2);assert.equal(restored.activeProfile,p.id);assert.equal(restored.profiles[0].completed.g1l1.stars,3);assert.equal(restored.profiles[0].drafts.g1l1.title,'A bird');assert.equal(restored.profiles[0].settings.targets.g1l1,7);
});
test('untrusted backup content is bounded, only known mission keys are loaded, and IDs are unique',()=>{
  const raw={version:1,activeProfile:'missing',profiles:Array.from({length:10},()=>({id:'duplicate',name:'x'.repeat(200),grade:99,settings:{fontSize:500,targets:{g1l1:-5,g2l1:20}},drafts:{g1l1:{text:'x'.repeat(60000),plan:['a'],checks:['yes',true]},invented:{text:'hidden'}},completed:{g1l2:{stars:900}}}))};
  const restored=c.normaliseState(raw),p=restored.profiles[0];assert.equal(restored.profiles.length,8);assert.equal(new Set(restored.profiles.map(p=>p.id)).size,8);assert.equal(p.name.length,30);assert.equal(p.grade,1);assert.equal(p.drafts.g1l1.text.length,50000);assert.deepEqual(p.drafts.g1l1.checks,[false,true,false]);assert.equal(p.drafts.invented,undefined);assert.equal(p.completed.g1l2,undefined);assert.equal(p.settings.fontSize,22);assert.equal(c.getTarget(p,c.missionById('g1l1')),10);
  for(const invalid of [null,{}, {version:2,profiles:[{}]}, {version:1,profiles:[]}])assert.throws(()=>c.normaliseState(invalid));
  assert.equal(c.escapeHTML('<script>"&\'</script>'),'&lt;script&gt;&quot;&amp;&#39;&lt;/script&gt;');
});
test('all missions can be completed in order, and the full-forest badge is earned',()=>{
  const p=c.newProfile();for(const m of c.MISSIONS){const d=fill(p,m.id,c.getTarget(p,m));d.plan=['start','middle','end'];d.checks=[true,true,true];assert.equal(c.completeMission(p,m).ok,true);}
  assert.equal(c.stats(p).completed,30);assert.equal(c.stats(p).stars,90);assert.ok(c.BADGES.every(b=>b.test(p)));
});
