const countWords = document.querySelector('.generate-word-count')
const wordCount = document.querySelector('.word-count')
const characterCount = document.querySelector('.character-count')
const textField = document.querySelector('.text-field')

const wordCounter = (str) => {
    return str.split(' ')
    .filter(function(n) { return n != '' })
    .length;
}

const characterCounter = (str) => {
    // when we change the spacing on parameter for str.split it willl show character count instead of word count
    return str.split('')
    // when we set n != ' ', it makes it so that we don't get space counted as a character
    .filter(function(n) { return n  != ' ' })
    .length;
}

countWords.addEventListener('click', () => {
    wordCount.innerText = "Words: " + wordCounter(textField.value)
    characterCount.innerText = "Characters: " + characterCounter(textField.value)
})

