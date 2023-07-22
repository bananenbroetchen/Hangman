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

console.log(wordsArrayLength)

let chosenWordPos = Math.round(Math.random()*wordsArrayLength)
let chosenWord = wordsArray[chosenWordPos]
let chosenWordLength = chosenWord.length
console.log(chosenWordPos + " " + chosenWord + " und " + chosenWordLength + " lang")

// today = new Date()
// time = today.getMilliseconds()

// console.log(time)

function checkIfRight(currentLetter) {
    for (let i = 0; i < chosenWordLength; i++) {
        if (chosenWord[i] == currentLetter) {
            console.log("richtig!")
        }
        console.log("ok")
    }
}

// currentLetter = prompt ("Was schätzt du?")


function keyTyped() {
    if(key === 'q') {
        checkIfRight('q')
    } else if(key === 'w') {
        checkIfRight('w')
    } else if(key === 'e') {
        checkIfRight('e')
    } else if(key === 'r') {
        checkIfRight('r')
    } else if(key === 't') {
        checkIfRight('t')
    } else if(key === 'z') {
        checkIfRight('z')
    } else if(key === 'u') {
        checkIfRight('u')
    } else if(key === 'i') {
        checkIfRight('i')
    } else if(key === 'o') {
        checkIfRight('o')
    } else if(key === 'p') {
        checkIfRight('p')
    } else if(key === 'ü') {
        checkIfRight('ü')
    } else if(key === 'a') {
        checkIfRight('a')
    } else if(key === 's') {
        checkIfRight('s')
    } else if(key === 'd') {
        checkIfRight('d')
    } else if(key === 'f') {
        checkIfRight('f')
    } else if(key === 'g') {
        checkIfRight('g')
    } else if(key === 'h') {
        checkIfRight('h')
    } else if(key === 'j') {
        checkIfRight('j')
    } else if(key === 'k') {
        checkIfRight('k')
    } else if(key === 'l') {
        checkIfRight('l')
    } else if(key === 'ö') {
        checkIfRight('ö')
    } else if(key === 'ä') {
        checkIfRight('ä')
    } else if(key === 'y') {
        checkIfRight('y')
    } else if(key === 'x') {
        checkIfRight('x')
    } else if(key === 'c') {
        checkIfRight('c')
    } else if(key === 'v') {
        checkIfRight('v')
    } else if(key === 'b') {
        checkIfRight('b')
    } else if(key === 'n') {
        checkIfRight('n')
    } else if(key === 'm') {
        checkIfRight('m')
    }
}

function drawInterface() {
    clear()
    background("grey")
    textSize(18)
    text('Hangman', 10, 25)
    
}

function setup() {
    createCanvas(500, 200)
    drawInterface()
}

function draw() {

}

// temp