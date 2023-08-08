const grid = document.querySelector('.grid');

/* Characters on cards */
const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy'
];

let firstCard = '';
let secondCard = '';

/* const compareCards = (firstCard, secondCard) => {
    if (firstCard === secondCard) {

    }
} */

/* Show cards on game */
const revealCard = (event) => {

    if (event.target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {
        event.target.parentNode.classList.add('reveal-card');
        firstCard = event.target.parentNode;

    }else if (secondCard === '') {
        event.target.parentNode.classList.add('reveal-card');
        secondCard = event.target.parentNode;

        checkCards();
    }
    
}

/* Creates an HTML element */
const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element
}

/* Creates a card for the game */
const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('/img/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);

    card.setAttribute('data-character', character);

    return card;
}

const checkEndGame = () => {
    const disabledCard = document.querySelectorAll('.disabled-card');

    if(disabledCard.length === 20){
        alert('Congrats, you win!');
    }
}

const checkCards = () =>{
    const firstCharacter= firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if(firstCharacter === secondCharacter){
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();

    }else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');
    
            firstCard = '';
            secondCard = '';
        }, 500);
    }

}

/* Loads all cards on the game */
const loadGame = () => {

    const duplicateCharacters = [...characters, ...characters];

    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((character) => {
        grid.appendChild(createCard(character));
    });

}

loadGame();