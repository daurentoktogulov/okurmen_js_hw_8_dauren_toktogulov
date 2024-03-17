const randomBodyPart = ['чачын', 'козун', 'бетин'];
const randomAbjectives = ['сулуу', 'ширин', 'ак'];
const randomWords = ['ай', 'кун', 'алма', 'карагат', 'бейиш'];



function getRandomWord(array) {
    const word = array [Math.floor(Math.random() * array.length)]

    return word;
}

const text = `Сенин ${getRandomWord
    (randomBodyPart)} ${getRandomWord
    (randomAbjectives)} ${getRandomWord(
        randomWords
        )} сыяктуу !!!` 

        console.log(text);