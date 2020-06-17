let line1 = document.getElementById('line1');
let line2 = document.getElementById('line2');
let rerollBtn = document.getElementById('reroll');

rerollBtn.addEventListener('click', (e) => {
    createRiddle();
});

function createRiddle() {

    let grammar = tracery.createGrammar({
        'island': ['Cannon Cove', "Mermaid's Hideaway", 'Lost Boot Fort', 'Discovery Ridge'],
        'treasure': ['#treasureAdj# gold', '#treasureAdj# treasure', "king's ransom", '#treasureAdj# loot', '#treasureAdj# jewels', '#treasureAdj# riches'],
        'treasureAdj': ['vast', 'glittering', 'lost', 'wonderous', 'secret', 'cursed'],
        'exclamation': ['hark', 'avast', 'ahoy', 'yar', 'yo ho ho'],
        'intro': ['#exclamation.capitalize#! On #island#', 'The shores of #island#', 'On #island#'],
        'line1': ['#intro#, sailors say, #treasure# is hidden away,', '#intro#, I hear tell, a #treasure# hidden well,', '#intro#, the story goes, a #treasure# hid from foes,'],

        'location': ["hang man's tree", 'dark cave', 'lonely gravesite', 'palm tree grove'],
        'number': ['3', '4', '5', '6', '7', '8', '9', '10'],
        'direction': ['north', 'west', 'south', 'east'],
        'action': ['#number# paces #direction#', 'dig here', 'search carefully'],
        'adj': ['wealthy', 'rich', 'accursed'],
        'subject': ['sea dog', 'pirate', 'scoundrel', 'scallywag'],
        'fortune': ['fortune', 'wealth'],
        'line2': ['At the #location# ye shall see, #action# and #adj.a# #subject# shall ye be!', 'Seek the #location# should ye discover, #action# and #treasureAdj.a# #fortune# ye shall uncover!']
    });

    grammar.addModifiers(baseEngModifiers);
    line1.innerText = grammar.flatten('#line1#');
    line2.innerText = grammar.flatten('#line2#');
}

createRiddle();