import test from 'node:test';
import assert from 'node:assert/strict';
import * as c from '../core.mjs';

function finish(profile,id='g1l1',allStars=true){
  const mission=c.missionById(id);
  profile.drafts[id]={...c.emptyDraft(),title:'My adventure',text:Array(c.getTarget(profile,mission)).fill('story').join(' '),plan:allStars?['beginning','middle','ending']:['','',''],checks:[allStars,allStars,allStars]};
  assert.equal(c.completeMission(profile,mission).ok,true);
}

test('every mission has a solvable sentence challenge, including repeated word tiles',()=>{
  for(const mission of c.MISSIONS){
    const puzzle=c.warmupFor(mission);
    assert.ok(puzzle.words.length>=5);
    assert.deepEqual(puzzle.tiles.map(t=>t.index).sort((a,b)=>a-b),puzzle.words.map((_,i)=>i));
    assert.equal(c.warmupMatches(mission,puzzle.words),true);
    assert.equal(c.warmupMatches(mission,puzzle.words.slice(1)),false);
    assert.equal(c.warmupMatches(mission,puzzle.tiles.map(t=>t.word)),false);
  }
  assert.equal(c.warmupFor({id:'unknown'}),null);
  assert.deepEqual(c.warmupFor({id:'g1l1',grade:99,level:99}),c.warmupFor(c.missionById('g1l1')));
});

test('a word challenge rewards only its first successful solution and never unlocks writing levels',()=>{
  const p=c.newProfile(),mission=c.missionById('g1l1'),puzzle=c.warmupFor(mission);
  assert.equal(c.claimWarmup(p,mission,[]).ok,false);
  assert.equal(c.gameStats(p).gems,0);
  assert.deepEqual(c.claimWarmup(p,mission,puzzle.words),{ok:true,firstTime:true,gems:5});
  assert.equal(c.gameStats(p).gems,5);assert.equal(c.gameStats(p).xp,15);
  assert.equal(c.isUnlocked(p,c.missionById('g1l2')),false);
  assert.deepEqual(c.claimWarmup(p,mission,puzzle.words),{ok:true,firstTime:false,gems:0});
  assert.equal(c.gameStats(p).gems,5);assert.equal(c.gameStats(p).xp,15);
});

test('locked challenges stay locked even if a caller supplies another level number',()=>{
  const p=c.newProfile(),mission=c.missionById('g1l5'),answer=c.warmupFor(mission).words;
  assert.equal(c.claimWarmup(p,{...mission,level:1},answer).ok,false);
  p.settings.unlockAll=true;
  assert.equal(c.claimWarmup(p,mission,answer).ok,true);
});

test('story rewards credit best stars, and companion unlocks spend gems once for one writer',()=>{
  const p=c.newProfile(),other=c.newProfile();
  assert.equal(c.chooseCompanion(p,'owl').reason,'gems');
  assert.equal(c.chooseCompanion(p,'not-a-companion').reason,'unknown');
  finish(p);assert.equal(c.gameStats(p).gems,30);
  assert.equal(c.chooseCompanion(p,'owl').ok,true);assert.equal(c.gameStats(p).gems,0);
  assert.equal(p.game.companion,'owl');assert.deepEqual(other.game.owned,['sprout']);
  c.chooseCompanion(p,'sprout');c.chooseCompanion(p,'owl');
  assert.equal(c.gameStats(p).gems,0);assert.equal(p.game.owned.filter(id=>id==='owl').length,1);
  finish(p);assert.equal(c.gameStats(p).gems,0);
  const backup=c.newState();backup.profiles=[p];backup.activeProfile=p.id;
  const restored=c.normaliseState(JSON.parse(JSON.stringify(backup))).profiles[0];
  assert.equal(restored.game.companion,'owl');assert.equal(c.gameStats(restored).gems,0);
});

test('older backups keep their writing, word targets and stars while receiving game rewards',()=>{
  const old=c.newState(),p=old.profiles[0];p.settings.targets.g1l1=8;finish(p);
  const story=p.completed.g1l1.text;delete p.game;
  const migrated=c.normaliseState(JSON.parse(JSON.stringify(old))).profiles[0];
  assert.equal(migrated.completed.g1l1.text,story);assert.equal(migrated.settings.targets.g1l1,8);
  assert.equal(c.stats(migrated).stars,3);assert.equal(c.gameStats(migrated).gems,30);
  assert.equal(migrated.game.companion,'sprout');
  assert.equal(c.chooseCompanion(migrated,'owl').ok,true);
});

test('game backups bound inventories, reject unknown rewards and preserve earned companion purchases',()=>{
  const raw=c.newState(),p=raw.profiles[0];
  p.game={warmups:{g1l1:true,invented:true,g2l1:'true'},owned:['dragon','owl','sprout','invented','sprout'],companion:'dragon'};
  const restored=c.normaliseState(raw).profiles[0];
  assert.deepEqual(restored.game.warmups,{g1l1:true});assert.deepEqual(restored.game.owned,['sprout']);
  assert.equal(restored.game.companion,'sprout');assert.equal(c.gameStats(restored).gems,5);
});
