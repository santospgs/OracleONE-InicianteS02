let startGameContainer = document.querySelector('#start-game');
let startGameBtn = document.querySelector('#start-game-btn');
let newWordBtn = document.querySelector('#new-word-btn');

startGameBtn.addEventListener('click', () => {
    generateWord();
    hideContainer('#start-game','#current-game');
})

newWordBtn.addEventListener('click', () => {
    hideContainer('#start-game', '#include-new-word');
})
