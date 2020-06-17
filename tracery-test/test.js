let riddle = document.getElementById('riddle');
let rerollBtn = document.getElementById('reroll');

let inputForm = document.querySelector('form');
let submitBtn = document.querySelector('.submit');
let nameInput = document.querySelector('.name');

let userName;

let story = document.getElementById('story');

rerollBtn.addEventListener('click', (e) => {
    createRiddle(userName);
    tellStory(userName);
});

rerollBtn.style.display = 'none';

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    userName = nameInput.value;

    createRiddle(userName);
    tellStory(userName);
});

function createRiddle(name) {
    if (!name) { name = 'dog' }

    let grammar = tracery.createGrammar({
        'island': ['Cannon Cove', "Mermaid's Hideaway", 'Lost Boot Fort', 'Discovery Ridge'],
        'treasure': ['#adj# gold', 'hidden jewels', "king's ransom", 'lost loot'],
        'location': ["hang man's tree", 'underwater tunnels', 'lonely gravesite', 'palm tree grove'],
        'subject': ['sea dog', 'pirate', 'scoundrel', 'scallywag'],
        'adj': ['wealthy', 'rich', 'accursed', 'happy', 'glittering'],
        'name': [name],
        'exclamation': ['hark', 'avast', 'ahoy', 'listen here, #name.capitalize#', 'yar', 'yo ho ho'],
        'riddle': ['#exclamation.capitalize#! On #island#, I hear tell, of #treasure# hidden well. At the #location# shall ye see, #adj.a# #subject# shall ye be!']
    });

    grammar.addModifiers(baseEngModifiers);
    riddle.innerText = grammar.flatten('#riddle#');

    if (rerollBtn.style.display === 'none') { rerollBtn.style.display = 'block' }
}

function tellStory(name) {
    if (!name) { name = 'a scurvy pirate' }

    let storyGrammar = tracery.createGrammar({
        'name': [name],
        'adj': ['fearsome', 'ragged', 'janky', 'proud', 'broken', 'wealthy', 'accursed'],
        'descriptor': ['dreadful', 'wailing', 'agonizing', 'horrid', 'last', 'fearsome', 'happy', 'angry'],
        'animal': ['whale', 'siren', 'crow', 'shark', 'squid', 'seabird', 'carrion', 'barnacle', 'clam'],
        'noun': ['#animal#', 'word', 'wail', 'call', 'castle'],
        'shipname': ['#descriptor.capitalize# #noun.capitalize#'],
        'origin': ['#name.capitalize# sailed the seven seas on #adj.a# ship called "The #shipname#"...']
    });

    storyGrammar.addModifiers(baseEngModifiers);
    story.innerText = storyGrammar.flatten('#origin#');
}