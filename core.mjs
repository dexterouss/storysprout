export const STORAGE_KEY = 'storysprout.v1';
export const TARGETS = {1:[10,15,20,25,30],2:[25,35,45,55,70],3:[50,70,90,110,130],4:[80,110,140,170,200],5:[120,150,180,220,260],6:[150,180,220,270,320]};
export const GRADE_INFO = {
  1:{name:'Little seedlings',subtitle:'Turn your ideas into clear sentences.',colour:'peach',focus:'Naming, describing & simple sentences'},
  2:{name:'Brave buds',subtitle:'Join your sentences and tell a little more.',colour:'lavender',focus:'Details, order & connected sentences'},
  3:{name:'Growing storytellers',subtitle:'Build paragraphs with a beginning, middle and end.',colour:'mint',focus:'Paragraphs, sequence & description'},
  4:{name:'Adventure authors',subtitle:'Bring your reader into the world you create.',colour:'sky',focus:'Story structure, reasons & lively details'},
  5:{name:'Word explorers',subtitle:'Make every paragraph work for your reader.',colour:'yellow',focus:'Voice, evidence & organised ideas'},
  6:{name:'Story trailblazers',subtitle:'Shape thoughtful writing with your own voice.',colour:'rose',focus:'Purpose, audience & purposeful revision'}
};

const make = (grade,level,title,type,icon,prompt,plan,bank,starter,tips) => ({id:`g${grade}l${level}`,grade,level,title,type,icon,prompt,plan,bank,starter,tips});
export const MISSIONS = [
  make(1,1,'My favourite animal','Describe','paw','Write about an animal you like. What is it? What does it look like? What does it do?',['Name your animal.','Think of a colour or size.','What does your animal do?'],['soft','small','brown','runs','jumps','happy'],'My favourite animal is ',['Say your idea out loud before you write it.','Try a describing word, like soft or tiny.','Start a sentence with a capital letter.']),
  make(1,2,'A tasty treat','Describe','apple','Tell us about a food you enjoy. Say how it looks and how it tastes.',['What food will you choose?','What colour or shape is it?','How does it taste?'],['sweet','crunchy','warm','round','juicy','tasty'],'I like to eat ',['Can you name a colour?','Tell your reader how the food tastes.','Read your sentence aloud. Does it make sense?']),
  make(1,3,'Someone special','Describe','heart','Write about someone who is kind to you. Tell us one thing you do together.',['Who is the person?','What are they like?','What do you do together?'],['kind','helps','smiles','plays','caring','together'],'Someone special to me is ',['Use the person’s name or say who they are.','Think of one kind thing they do.','Use a full stop at the end of a sentence.']),
  make(1,4,'A day at the park','Recount','sun','Imagine or remember a visit to a park. What did you see? What did you do?',['Who went with you?','What did you see or do?','How did you feel?'],['sunny','trees','played','saw','friends','fun'],'At the park, I ',['Use I saw or I played to begin an idea.','Tell us one thing that happened.','Leave a space between your words.']),
  make(1,5,'The little lost kite','Story','kite','A little kite gets stuck in a tree. Write a short story about who helps and what happens.',['Who finds the kite?','How can someone help safely?','How does the story end?'],['kite','tree','wind','help','safe','glad'],'One day, a little kite ',['Give your story a person or an animal.','Ask an adult for help in your story.','Finish by telling us how your character feels.']),
  make(2,1,'My happy place','Describe','home','Describe a place where you feel happy. Tell us what you can see and what you like to do there.',['Where is your happy place?','What can you see or hear?','Why do you like it?'],['peaceful','bright','beside','hear','enjoy','because'],'My happy place is ',['Add two details about your place.','Use because to explain why you like it.','Try not to begin every sentence with the same word.']),
  make(2,2,'The rainy-day adventure','Recount','cloud','Write about a real or imagined rainy day. Tell the events in the order they happened.',['What happened first?','What did you do next?','How did your day end?'],['first','rain','puddles','then','inside','finally'],'One rainy day, ',['Use first, then and finally to show order.','How did the rain sound?','End with how you felt about the day.']),
  make(2,3,'My amazing invention','Describe','bulb','Invent something that would help you at home or school. Describe what it looks like and what it does.',['What is your invention called?','What does it look like?','How does it help?'],['machine','useful','button','colourful','helps','clever'],'My invention is called ',['It can be silly or sensible!','Explain what happens when someone uses it.','Add a detail about its size or colour.']),
  make(2,4,'The best game to play','Opinion','ball','Which game should your friends try? Tell them what the game is and give two reasons to play it.',['Which game do you choose?','What is your first reason?','What is your second reason?'],['game','friends','because','also','exciting','share'],'I think everyone should try ',['A reason tells us why you think something.','Use also to add your second reason.','Finish by inviting your friend to play.']),
  make(2,5,'A surprise in my bag','Story','bag','You open your schoolbag and find something surprising. Write a story about what happens next.',['What do you find?','What do you do about it?','What happens in the end?'],['suddenly','surprise','peeked','whispered','carefully','at last'],'When I opened my bag, ',['Choose one fun surprise.','Tell events in a clear order.','Give the story an ending that fits the surprise.']),
  make(3,1,'A place worth visiting','Describe','map','Describe a place in your community that you would like a visitor to see. Help the visitor imagine being there.',['Introduce your place.','List what you see, hear or smell.','Why is the place special?'],['nearby','colourful','bustling','gentle','welcoming','notice'],'There is a special place ',['Group details about the same idea together.','Try a sound or a smell as well as things you see.','End with why this place matters to you.']),
  make(3,2,'The day I learned something','Recount','book','Tell about a time you learned something new. Explain what was difficult, what you tried and how you felt afterwards.',['What were you learning?','What happened as you tried?','What did you learn or feel?'],['at first','practised','tricky','patiently','eventually','proud'],'I remember the day I learned ',['Write events in time order.','Show a difficult moment and how you handled it.','Use a new paragraph when you move to a new part.']),
  make(3,3,'How to care for a plant','Explain','sprout','Explain how to care for a plant. Give clear steps for someone who is growing one for the first time.',['What does the plant need?','What steps should the reader follow?','How can they tell it is growing?'],['soil','water','light','gently','next','healthy'],'Growing a plant begins with ',['Put the steps in a helpful order.','Explain that different plants may need different care.','Use action words such as place, check and water.']),
  make(3,4,'A better school day','Opinion','school','Suggest one change that could make your school day better. Give reasons and explain how it could help pupils.',['What change do you suggest?','Give two reasons or examples.','How would you end your suggestion?'],['suggest','because','for example','also','helpful','therefore'],'One way to improve our school day is ',['Choose one change so your writing stays focused.','Explain how the change would help.','Use an example to support one reason.']),
  make(3,5,'The mysterious footsteps','Story','footprint','You notice unusual footsteps near your home. Write a story about where they lead and what you discover.',['Who finds the footsteps, and where?','What happens along the way?','What is the discovery?'],['curious','trail','rustled','carefully','discovered','relieved'],'The footsteps appeared ',['Build a clear beginning, middle and end.','Use a detail to make the reader curious.','Let your ending explain the footsteps.']),
  make(4,1,'The market comes alive','Describe','basket','Describe a busy market as if your reader is walking beside you. Choose details that capture its sights, sounds and movement.',['Where does your description begin?','Which details create the atmosphere?','What final impression will you leave?'],['stalls','aroma','vendors','woven','chattered','vibrant'],'As I stepped into the market, ',['Organise details in the order you notice them.','Choose precise describing words.','Include more than one sense without listing everything.']),
  make(4,2,'A challenge I faced','Recount','mountain','Write about a real or imagined challenge. Describe what happened, how you responded and what the experience taught you.',['Set the scene and name the challenge.','Explain the important events.','Reflect on what you learned.'],['hesitated','determined','meanwhile','encouraged','overcame','realised'],'At first, I was not sure I could ',['Focus on the moments that matter.','Show a feeling through an action.','Finish with a lesson connected to your experience.']),
  make(4,3,'A guide to a favourite hobby','Explain','compass','Write a beginner’s guide to a hobby you enjoy. Explain what is needed and how someone can get started safely.',['Introduce the hobby and equipment.','Put the main steps in order.','Add a useful tip for beginners.'],['equipment','prepare','carefully','before','practise','remember'],'If you would like to try ',['Imagine the reader has never tried it before.','Explain a word a beginner may not know.','Group the preparation and the steps into clear paragraphs.']),
  make(4,4,'A greener playground','Opinion','leaf','Should your school add more plants and shade to its playground? Explain your view with reasons, examples and a clear ending.',['State your opinion.','Plan two reasons with examples.','Restate your view in a fresh way.'],['believe','shade','benefit','for instance','however','overall'],'I believe our playground ',['Link each example to the reason it supports.','Think about space and caring for the plants.','Use your ending to bring your reasons together.']),
  make(4,5,'The bridge to somewhere new','Story','bridge','On an ordinary walk, you discover a bridge you have never seen before. Write a story about crossing it and solving a problem on the other side.',['Introduce the character and bridge.','Plan a problem and attempts to solve it.','Choose a satisfying resolution.'],['beyond','creaked','unfamiliar','courage','suddenly','returned'],'I had walked this path many times, but ',['Let your character make a choice.','Use a little dialogue if it helps the story.','Show how the problem is solved.']),
  make(5,1,'A place with a story','Describe','map','Describe a meaningful place at two different times of day. Use carefully chosen details to show how its mood changes.',['Choose the place and first mood.','Plan details for the second time of day.','Decide how the two parts connect.'],['at dawn','shimmered','rhythmic','gradually','shadow','tranquil'],'Before the day had fully begun, ',['Use the same place so the change is easy to notice.','Choose details that create a mood.','Vary sentence length to match the atmosphere.']),
  make(5,2,'When teamwork mattered','Recount','people','Recount a real or imagined experience in which teamwork made a difference. Show the problem, different contributions and what changed.',['Introduce the task and difficulty.','Choose important contributions and events.','Reflect on why cooperation mattered.'],['cooperate','responsibility','although','contributed','resolved','reflection'],'We thought the task would be simple until ',['Give specific examples of how people helped.','Explain a disagreement or obstacle if there was one.','Connect your reflection to what actually happened.']),
  make(5,3,'A guide for a new pupil','Explain','school','Write a welcoming guide for a pupil joining your school. Organise useful information and explain what will help them settle in.',['Choose information a new pupil needs.','Group advice into useful sections.','Plan a welcoming ending.'],['welcome','routine','support','for example','remember','confident'],'Starting at a new school can ',['Use a friendly tone for your audience.','Explain school routines clearly.','Use paragraphs to separate different kinds of advice.']),
  make(5,4,'More time to read?','Persuade','book','Write to your headteacher to persuade them to include more reading time during the school day. Support your reasons with examples and consider one practical concern.',['State your request and audience.','Develop reasons and relevant examples.','Address a concern and finish with a request.'],['propose','opportunity','in addition','concern','consider','recommend'],'Dear Headteacher,\n\nI am writing to suggest ',['Keep your tone respectful and convincing.','An imagined example is fine; do not invent statistics.','Offer a practical response to a concern such as limited time.']),
  make(5,5,'The message in the bottle','Story','bottle','A message in a bottle arrives with a clue meant for you. Write a story in which your choices lead to an unexpected discovery.',['Set the scene and reveal the message.','Plan clues, choices and a turning point.','Resolve the mystery and show a change.'],['weathered','unfolded','clue','suspicion','unexpected','discovery'],'The bottle caught my eye because ',['Plant a clue that matters later.','Show your character’s thoughts as well as actions.','Make the discovery connect to the original message.']),
  make(6,1,'One place, two viewpoints','Describe','eye','Describe the same place from two different characters’ viewpoints. Let your choice of details reveal how each character feels about it.',['Choose the place and two characters.','Contrast what each notices and feels.','Plan clear transitions between viewpoints.'],['familiar','loomed','in contrast','reassuring','uneasy','perspective'],'To one visitor, the place seemed ',['Keep the physical place recognisable in both descriptions.','Reveal feelings through selected details and word choices.','Signal the change of viewpoint clearly.']),
  make(6,2,'A moment that changed my mind','Recount','bulb','Recount a real or imagined event that changed an opinion you held. Explain your earlier view, the turning point and your new understanding.',['Explain the original view and situation.','Develop the event that challenged it.','Reflect on the change and its meaning.'],['assumed','initially','nevertheless','recognised','reconsidered','perspective'],'Until that day, I had always thought ',['Give the reader enough context to understand your old view.','Slow down at the turning point.','Show what changed without claiming every question is settled.']),
  make(6,3,'A small action, a bigger change','Explain','leaf','Explain how a practical community action, such as reducing litter, could make a difference. Describe how to organise it and consider a possible difficulty.',['Define the action and its purpose.','Explain the steps and likely effects.','Address a difficulty and conclude.'],['initiative','organise','as a result','participate','obstacle','sustainable'],'A community can make a difference by ',['Distinguish what you know from what you predict.','Use cause-and-effect links to explain why steps matter.','Keep suggestions realistic and safe for pupils.']),
  make(6,4,'Should pupils help shape rules?','Persuade','chat','Write a persuasive composition about whether pupils should help shape school rules. Develop your position, consider a different view and propose a sensible approach.',['State a clear position.','Develop reasons, examples and an opposing view.','Offer a practical proposal and conclusion.'],['participation','responsibility','on the other hand','evidence','therefore','proposal'],'School rules affect every pupil, so ',['Explain why each example supports your claim.','Represent another viewpoint fairly.','Revise your ending so it follows from your argument.']),
  make(6,5,'The choice that changed everything','Story','compass','Write a story in which a character faces a difficult choice. Build tension, show the consequences and end in a way that reveals what the character has learned.',['Establish the character, setting and stakes.','Plan the choice, tension and consequences.','Resolve the conflict and reveal change.'],['dilemma','hesitated','consequence','reluctantly','resolve','realisation'],'There were two paths ahead, and ',['Make both options matter to your character.','Use action and dialogue to reveal emotion.','Revise one scene so the reader feels the tension.'])
];

export const missionById = id => MISSIONS.find(m => m.id === id);
export const countWords = text => (String(text || '').match(/[\p{L}\p{N}]+(?:['’\-][\p{L}\p{N}]+)*/gu) || []).length;
export const countSentences = text => (String(text || '').match(/[^.!?\s][^.!?]*(?:[.!?]+|$)/g) || []).length;
export const countParagraphs = text => String(text || '').split(/\n\s*\n/).filter(p=>p.trim()).length;
export const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const uid = () => `w${Date.now().toString(36)}${Math.random().toString(36).slice(2,8)}`;
export function newProfile(name='Little writer') {
  return {id:uid(),name:name.trim().slice(0,30)||'Little writer',grade:1,drafts:{},completed:{},settings:{targets:{},unlockAll:false,fontSize:22},game:newGame()};
}
export function newState() { const p=newProfile();return {version:1,activeProfile:p.id,profiles:[p],sound:false}; }
export function emptyDraft() { return {title:'',text:'',plan:['','',''],checks:[false,false,false],updatedAt:null}; }
export function getDraft(profile,id) { return profile.drafts[id] || emptyDraft(); }
export function getTarget(profile,mission) { return profile.settings.targets[mission.id] || TARGETS[mission.grade][mission.level-1]; }
export function isUnlocked(profile,mission) { return profile.settings.unlockAll || mission.level===1 || Boolean(profile.completed[`g${mission.grade}l${mission.level-1}`]); }
export function earnedStars(draft,target) { return countWords(draft.text)<target ? 0 : 1 + Number(draft.plan.every(x=>x.trim())) + Number(draft.checks.every(Boolean)); }
export function completeMission(profile,mission,now=new Date().toISOString()) {
  const draft=getDraft(profile,mission.id), target=getTarget(profile,mission),stars=earnedStars(draft,target);
  if(!isUnlocked(profile,mission)) return {ok:false,reason:'locked'};
  if(!stars) return {ok:false,reason:'target',remaining:Math.max(0,target-countWords(draft.text))};
  const previous=profile.completed[mission.id];
  const result={...structuredClone(draft),stars:Math.max(previous?.stars||0,stars),target,completedAt:previous?.completedAt||now,updatedAt:now};
  profile.completed[mission.id]=result;
  return {ok:true,stars,record:result,firstTime:!previous};
}
export function stats(profile) {
  const finished=Object.values(profile.completed);
  return {completed:finished.length,stars:finished.reduce((a,c)=>a+c.stars,0),words:MISSIONS.reduce((sum,m)=>sum+countWords((profile.drafts[m.id]||profile.completed[m.id]||{}).text),0),xp:finished.reduce((a,c)=>a+c.stars*25,0)};
}
export const BADGES = [
  {id:'first',name:'First sprout',icon:'sprout',description:'Finish your first mission.',test:p=>stats(p).completed>=1},
  {id:'words',name:'Word grower',icon:'pencil',description:'Write 100 words across your missions.',test:p=>stats(p).words>=100},
  {id:'planner',name:'Idea explorer',icon:'bulb',description:'Finish a mission with all three planning notes.',test:p=>Object.values(p.completed).some(d=>d.plan.every(s=>s.trim()))},
  {id:'five',name:'Page turner',icon:'book',description:'Finish five different missions.',test:p=>stats(p).completed>=5},
  {id:'explorer',name:'Trail explorer',icon:'compass',description:'Finish a mission in three different grades.',test:p=>new Set(Object.keys(p.completed).map(id=>missionById(id)?.grade)).size>=3},
  {id:'stars',name:'Star collector',icon:'star',description:'Earn 30 stars.',test:p=>stats(p).stars>=30},
  {id:'forest',name:'Story forest',icon:'tree',description:'Finish all 30 missions.',test:p=>stats(p).completed===30}
];
export function nextMission(profile,grade=profile.grade) {
  return MISSIONS.filter(m=>m.grade===grade).find(m=>!profile.completed[m.id]&&isUnlocked(profile,m))||MISSIONS.find(m=>m.grade===grade);
}

const cleanText = (x,max) => typeof x==='string' ? x.slice(0,max) : '';
function cleanDraft(d) {
  if(!d||typeof d!=='object') return emptyDraft();
  return {title:cleanText(d.title,100),text:cleanText(d.text,50000),plan:[0,1,2].map(i=>cleanText(d.plan?.[i],2000)),checks:[0,1,2].map(i=>d.checks?.[i]===true),updatedAt:cleanText(d.updatedAt,40)||null};
}
export function normaliseState(raw) {
  if(!raw||raw.version!==1||!Array.isArray(raw.profiles)||!raw.profiles.length) throw new Error('This is not a StorySprout backup.');
  const seen=new Set();
  const profiles=raw.profiles.slice(0,8).map(p=>{
    if(!p||typeof p!=='object') throw new Error('A writer in this backup could not be read.');
    const n=newProfile(cleanText(p.name,30));
    n.id=typeof p.id==='string'&&/^[a-zA-Z0-9_-]{1,80}$/.test(p.id)&&!seen.has(p.id)?p.id:uid();seen.add(n.id);
    n.grade=Number.isInteger(p.grade)&&p.grade>=1&&p.grade<=6?p.grade:1;
    n.settings.unlockAll=p.settings?.unlockAll===true;
    n.settings.fontSize=[18,22,26].includes(p.settings?.fontSize)?p.settings.fontSize:22;
    for(const m of MISSIONS){
      if(Object.hasOwn(p.drafts||{},m.id)) n.drafts[m.id]=cleanDraft(p.drafts[m.id]);
      const c=p.completed?.[m.id];
      if(c&&Number.isInteger(c.stars)&&c.stars>=1&&c.stars<=3) n.completed[m.id]={...cleanDraft(c),stars:c.stars,target:Number.isInteger(c.target)&&c.target>=5&&c.target<=1000?c.target:TARGETS[m.grade][m.level-1],completedAt:cleanText(c.completedAt,40),updatedAt:cleanText(c.updatedAt,40)};
      const t=p.settings?.targets?.[m.id];
      if(Number.isInteger(t)&&t>=5&&t<=1000)n.settings.targets[m.id]=t;
    }
    n.game=normaliseGame(n,p.game);
    return n;
  });
  return {version:1,profiles,activeProfile:profiles.some(p=>p.id===raw.activeProfile)?raw.activeProfile:profiles[0].id,sound:raw.sound===true};
}

export const WORLDS = {
  1:{name:'Sunshine Meadow',short:'Meadow',icon:'sun',colour:'#f3a431',pale:'#fff3d0',sky:'#fff7df',story:'Help Sprout bring the story garden to life.',skill:'Little sentences. Big discoveries.'},
  2:{name:'Whispering Woods',short:'Woods',icon:'tree',colour:'#229d80',pale:'#d9f4dd',sky:'#eaf9ef',story:'Follow the woodland trail and uncover five hidden stories.',skill:'Connect your ideas and add details.'},
  3:{name:'Coral Cove',short:'Cove',icon:'bottle',colour:'#159db0',pale:'#d6f6f4',sky:'#e9faff',story:'Sail between story islands and fill your explorer’s journal.',skill:'Build paragraphs and explain your ideas.'},
  4:{name:'Cloud Castle',short:'Castle',icon:'flag',colour:'#5078e4',pale:'#e1eaff',sky:'#eef2ff',story:'Climb to the castle with descriptions, opinions and adventure.',skill:'Create atmosphere and support a point.'},
  5:{name:'Crystal Caverns',short:'Caverns',icon:'spark',colour:'#9657d1',pale:'#efdefb',sky:'#f8efff',story:'Find the story crystals hidden inside each writing quest.',skill:'Develop your voice and persuade a reader.'},
  6:{name:'Starlight Summit',short:'Summit',icon:'compass',colour:'#d35491',pale:'#fbddec',sky:'#fff0f7',story:'Reach the summit with powerful ideas and stories worth sharing.',skill:'Explore viewpoints, tension and consequences.'}
};
export const COMPANIONS = [
  {id:'sprout',name:'Sprout',kind:'The idea explorer',cost:0,colour:'#76cb86',accent:'#2e8d67'},
  {id:'owl',name:'Orbit',kind:'The wise night owl',cost:30,colour:'#b6a0f7',accent:'#7359bb'},
  {id:'fox',name:'Ember',kind:'The curious story fox',cost:70,colour:'#ffb36d',accent:'#df6b43'},
  {id:'dragon',name:'Nova',kind:'The imagination dragon',cost:150,colour:'#7ddbe1',accent:'#369caf'}
];
const WARMUP_SENTENCES = {
  1:['My little cat can jump.','The sweet apple is red.','My kind friend helps me.','We played in the park.','The kite flew over a tree.'],
  2:['My favourite place is beside the river.','First we watched the rain from inside.','My clever invention helps us carry books.','I enjoy this game because we play together.','Suddenly a tiny frog jumped from my bag.'],
  3:['Visitors can hear cheerful music in our community.','At first I found the new skill difficult.','Next place the plant where it gets enough light.','Our school needs more shade because the playground gets hot.','The mysterious footsteps led us towards an old wooden gate.'],
  4:['Colourful stalls filled the market as vendors called to passing shoppers.','Although the task was difficult, I decided to try again.','Before you begin the hobby, prepare your equipment and find a safe space.','More trees would provide shade and create habitats for birds.','Beyond the creaking bridge, a narrow path disappeared into the forest.'],
  5:['At dawn the quiet river shimmered beneath a pale golden sky.','Although we disagreed at first, each person contributed to the solution.','A new pupil may feel more confident when someone explains the school routine.','Additional reading time could help pupils discover books they enjoy.','Inside the weathered bottle, a folded message revealed the first clue.'],
  6:['To one visitor the building seemed welcoming, while another found it unsettling.','Only after hearing her explanation did I begin to reconsider my earlier opinion.','If neighbours work together, a small initiative can create a lasting community benefit.','Although pupils should help shape school rules, their proposals must consider everyone.','Faced with two difficult choices, she realised that doing nothing also had consequences.']
};
export function newGame(){return {warmups:{},owned:['sprout'],companion:'sprout'};}
export function warmupFor(mission){
  mission=missionById(mission?.id);
  if(!mission)return null;
  const words=WARMUP_SENTENCES[mission.grade][mission.level-1].split(' ');
  // Keep stable tile identities, even when the model sentence repeats a word.
  let seed=mission.grade*37+mission.level*101;
  const tiles=words.map((word,index)=>({word,index}));
  for(let i=tiles.length-1;i>0;i--){seed=(seed*1664525+1013904223)>>>0;const j=seed%(i+1);[tiles[i],tiles[j]]=[tiles[j],tiles[i]];}
  if(tiles.every((tile,i)=>tile.index===i))tiles.reverse();
  return {sentence:words.join(' '),words,tiles,first:words[0]};
}
export function warmupMatches(mission,answer){
  const puzzle=warmupFor(mission);
  return !!puzzle&&Array.isArray(answer)&&answer.length===puzzle.words.length&&answer.every((word,i)=>word===puzzle.words[i]);
}
export function gameStats(profile){
  const s=stats(profile),g=profile.game||newGame();
  const warmups=MISSIONS.filter(m=>g.warmups?.[m.id]===true).length;
  const owned=COMPANIONS.filter(c=>(g.owned||[]).includes(c.id));
  const earned=s.stars*10+warmups*5,spent=owned.reduce((sum,c)=>sum+c.cost,0),xp=s.xp+warmups*15;
  const rank=Math.floor(xp/150)+1;
  return {...s,warmups,gems:Math.max(0,earned-spent),earned,xp,rank,rankProgress:xp%150,rankName:rank<3?'Story scout':rank<6?'Word ranger':rank<10?'Quest captain':'Story legend'};
}
export function claimWarmup(profile,mission,answer){
  mission=missionById(mission?.id);
  if(!mission||!isUnlocked(profile,mission))return {ok:false,reason:'locked'};
  if(!warmupMatches(mission,answer))return {ok:false,reason:'order'};
  profile.game ||= newGame();
  const firstTime=profile.game.warmups[mission.id]!==true;
  profile.game.warmups[mission.id]=true;
  return {ok:true,firstTime,gems:firstTime?5:0};
}
export function chooseCompanion(profile,id){
  const companion=COMPANIONS.find(c=>c.id===id);
  if(!companion)return {ok:false,reason:'unknown'};
  profile.game ||= newGame();
  if(!profile.game.owned.includes(id)){
    if(gameStats(profile).gems<companion.cost)return {ok:false,reason:'gems'};
    profile.game.owned.push(id);
  }
  profile.game.companion=id;
  return {ok:true};
}
function normaliseGame(profile,raw){
  const game=newGame();
  for(const mission of MISSIONS)if(raw?.warmups?.[mission.id]===true)game.warmups[mission.id]=true;
  const budget=stats(profile).stars*10+Object.keys(game.warmups).length*5;
  let spent=0;
  for(const id of Array.isArray(raw?.owned)?raw.owned.slice(0,20):[]){
    const c=COMPANIONS.find(c=>c.id===id);
    if(c&&!game.owned.includes(id)&&spent+c.cost<=budget){game.owned.push(id);spent+=c.cost;}
  }
  game.companion=game.owned.includes(raw?.companion)?raw.companion:'sprout';
  return game;
}
