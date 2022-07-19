let wordsList = ['Aviao','Gato','Bolo','Bicicleta','Caneca','Carro','Celular','Girafa','Lua','Noite','Caneta'];

let currentGameContainer = document.querySelector('#current-game');
let wrongLettersElement = document.querySelector('#wrong-letters');
let gallowsImg = document.querySelector('#gallows-img');
let showWord = document.querySelector('#show-word');
let newGameBtn = document.querySelector('#new-game-btn');
let loadGif = document.querySelector('#load-gif');
let errorLimit = 4;
let imgNumber = 0;
let imgGallows = document.querySelector('#gallows-img')

let wrongLettersList, secretWord;

loadGif.style.display = 'none';

let updateWrongLetters = (list,element) => {
    if (list.length >= errorLimit){
        setTimeout(() => {
            element.textContent = 'Game Over!'

            for(let i in secretWord){
                document.querySelectorAll('.letter-space')[i].classList.remove('letter-hide');
                document.querySelectorAll('.letter-space')[i].classList.add('letter-show');
                document.querySelectorAll('.letter-space')[i].style.color = 'red'
            }                       
        }, 200);
    } else if (list.length < errorLimit) {
        element.textContent = list.join(' ');
    }
}

let checkWord = () => {
    let wordLength = secretWord.length;
    let lettersDiscovered = document.querySelectorAll('.letter-show').length;

    if (lettersDiscovered == wordLength){
        wrongLettersElement.textContent = 'Parabéns!'
        return true
    }
}

newGameBtn.addEventListener('click', () => {
    wrongLettersElement.style.display = 'none';
    gallowsImg.style.display = 'none';
    showWord.style.display = 'none';
    loadGif.style.display = 'flex';

    setTimeout(() => {
        wrongLettersElement.style.display = 'initial';
        gallowsImg.style.display = 'initial';
        showWord.style.display = 'flex';
        loadGif.style.display = 'none';
        generateWord();
    },800);
});

let generateWord = () => {
    // clear all data
    clearData();
    
    // generate a new random word
    secretWord = wordsList[Math.floor(Math.random() * wordsList.length)].toUpperCase();

    // create de blanks spaces in the screen
    for (let i = 0; i < secretWord.length; i++){
        let letterSpace = document.createElement('li');
        letterSpace.classList.add('letter-space');
        letterSpace.classList.add('letter-hide');
        letterSpace.textContent = secretWord[i].toUpperCase();
        showWord.appendChild(letterSpace);
    }
}

document.addEventListener('keypress', (event) => {

    let letterPressed = event.key.toUpperCase();

    if(!currentGameContainer.classList.contains('hide-container')  && isNaN(letterPressed) && !checkWord()){
        for (let i in secretWord){
            if (!secretWord.includes(letterPressed) && !wrongLettersList.includes(letterPressed)){
                wrongLettersList.push(letterPressed);
                updateWrongLetters(wrongLettersList, wrongLettersElement);
                imgNumber++
                imgGallows.src = `assets/forca${imgNumber}.png`;                
            } else if (letterPressed == secretWord[i]) {
                document.querySelectorAll('.letter-space')[i].classList.remove('letter-hide');
                document.querySelectorAll('.letter-space')[i].classList.add('letter-show');
            }        
        }
    }
    
    // check if the player win 
    checkWord();
});