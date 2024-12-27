const HOME_PHRASES = [
    'The worst of times are when lawyers must force their biggest smiles.',
    'A great spy always keeps their cool.',
    'Just happy to be here.',
    'Trust, but verify. Every Single Time.'
]

function randomPhrase() {
    const phraseElement = document.getElementById("randomPhrase");
    randomNumber = Math.floor(Math.random() * HOME_PHRASES.length);
    phraseElement.innerHTML = HOME_PHRASES[randomNumber];
}