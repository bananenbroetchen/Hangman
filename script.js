console.log("Wilkommen zu Hangman!")

// var today = new Date()
// var time = today.getMilliseconds()

// console.log(time)

let pressedKeys
let correctLettersCounter = 0;
let wrongLettersCounter = 0;
let correctLetters = []
let wrongLetters = []
let currentWord
let currentLetter
let wordsArrayLength = wordsArray.length

console.log(wordsArrayLength)

let chosenWordPos = Math.round(Math.random()*wordsArrayLength)
let chosenWord = wordsArray[chosenWordPos]
console.log(chosenWordPos + " " + chosenWord)

// today = new Date()
// time = today.getMilliseconds()

// console.log(time)

checkIfRight(currentLetter) {
    for (let i = 0; i < wrongLetters.length; i++) {
        if (wrongLetters[i] == currentLetter) {
            return true
        }
        console.log("ok")
    }
}

alert("Was schätzt du?") = currentLetter

checkIfRight(currentLetter)