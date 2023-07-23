console.log("Wilkommen zu Hangman!")

// var today = new Date()
// var time = today.getMilliseconds()

// console.log(time)

let pressedKeys
let correctLettersCounter = 0;
let wrongLettersCounter = 0;
let correctLetters = []
let wrongLetters = []
let currentLetter
let wordsArrayLength = wordsArray.length
let shownWord = []
let temp = false

console.log(wordsArrayLength)

let chosenWordPos = Math.round(Math.random()*wordsArrayLength)
let chosenWord = wordsArray[chosenWordPos].toUpperCase()
let chosenWordLength = chosenWord.length
console.log(chosenWordPos + " " + chosenWord + " und " + chosenWordLength + " lang")

// today = new Date()
// time = today.getMilliseconds()

// console.log(time)

function checkIfRight(currentLetter) {
    //Check if it was already pressed right
    for (let i = 0; i < correctLetters.length; i2++) {
        if(currentLetter = correctLetters[i]) {
            return true
        }
    }
    //Check if it was already pressed wrong

    //Check the Button if right
    for (let i = 0; i < chosenWordLength; i++) {
        if (chosenWord[i] == currentLetter) {
            console.log("richtig!")
            correctLetters.push(currentLetter)
        }
        console.log("ok")
    }
}

function refreshShownWord () {
    shownWord = []
    for (let i = 0; i < chosenWordLength; i++) {
        for (let i2 = 0; i2 < correctLetters.length; i2++) {
            if(chosenWord[i] = correctLetters[i2]) {
                temp = true
            }
        }
        if (temp === true) {
            shownWord.push(chosenWord[i]);
        } else{
            shownWord.push('_');
        }
        temp = false;
    }
    // Refresh Counters:
    correctLettersCounter = correctLetters.length
    wrongLettersCounter = wrongLetters.length
}

// currentLetter = prompt ("Was schätzt du?")


function keyTyped() {
    // in kleinbuchstaben:
    const lowercaseKey = key.toUpperCase();
    
    if (/[A-ZÖÄÜ]/.test(lowercaseKey)) {
        checkIfRight(lowercaseKey);
    }
}


function drawInterface() {
    clear()
    refreshShownWord()
    background("grey")
    textSize(18)
    text('Hangman', 10, 25)
    text(correctLettersCounter + ' Richtig: ' + correctLetters, 10, 45)
    text(wrongLettersCounter + ' Falsch: ' + wrongLetters, 10, 65)
    text(shownWord, 10, 85)
    
}

function setup() {
    createCanvas(500, 200)
    drawInterface()
    frameRate(10)
}

function draw() {
    drawInterface()
}

// temp