let giveUpBtn = document.querySelector('#give-up-btn')
let cancelNewWordBtn = document.querySelector('#new-word-cancel-btn') 

giveUpBtn.addEventListener('click', () => {
    clearData();
    startGameContainer.classList.remove('hide-container');
    currentGameContainer.classList.add('hide-container');
})

cancelNewWordBtn.addEventListener('click', () => {
    newWordInput.value = '';
    startGameContainer.classList.remove('hide-container');
    includeWordContainer.classList.add('hide-container');
})