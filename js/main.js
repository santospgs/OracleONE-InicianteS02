let clearData = () => {
    showWord.innerHTML = '';
    secretWord = '';
    imgNumber = 0
    imgGallows.src = `assets/forca${imgNumber}.png`;
    wrongLettersList = [];
    updateWrongLetters(wrongLettersList, wrongLettersElement);
}

let hideContainer = (divToHide, divToShow) => {
    document.querySelector(divToHide).classList.add('hide-container')
    document.querySelector(divToShow).classList.remove('hide-container')
}





