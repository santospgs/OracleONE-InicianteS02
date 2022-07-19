let includeWordContainer = document.querySelector('#include-new-word');
let newWordMsg = document.querySelector('#include-word-msg')
let newWordInput = document.querySelector('#new-word-input')
let includeNewWordBtn = document.querySelector('#include-new-word-btn')

includeNewWordBtn.addEventListener('click',() => { 
    let newWord = newWordInput.value

    if(newWord == ''){
        newWordMsg.textContent = 'Digite uma palavra'
    } else if (newWord.length > 8){
        newWordMsg.textContent = 'Limite de letras: 8 letras'
    } else {
        console.log('cheguei aqui')
        wordsList.push(newWord)
        newWordMsg.textContent = 'Cadastrado com sucesso'
        setTimeout(() => {
            hideContainer('#include-new-word', '#current-game');
            generateWord();
            newWordMsg.textContent = ''
            newWordInput.value = ''
        },1000)
    }
})



