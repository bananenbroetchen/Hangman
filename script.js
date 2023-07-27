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
let temp2 = false


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
    for (let i = 0; i < correctLetters.length; i++) {
        if(currentLetter === correctLetters[i]) {
            return true
        }
    }
    //Check if it was already pressed wrong
    for (let i = 0; i < wrongLetters.length; i++) {
        if(currentLetter === wrongLetters[i]) {
            return true
        }
    }
    //Check the Button if not already pressed
    let temp2 = false
    for (let i = 0; i < chosenWordLength; i++) {
        if (chosenWord[i] == currentLetter) {
            console.log("richtig!")
            correctLetters.push(currentLetter)
            temp2 = true
        }
        console.log("ok")
    }
    if (temp2 === false) {
        wrongLetters.push(currentLetter)
    }
}

function refreshShownWord () {
    shownWord = []
    for (let i = 0; i < chosenWordLength; i++) {
        for (let i2 = 0; i2 < correctLetters.length; i2++) {
            if(chosenWord[i] === correctLetters[i2]) {
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
    background("darkgrey")
    textSize(18)
    textFont('Ubuntu')
    fill('lightgrey')
    text('Hangman', 10, 25)
    fill('lightgreen')
    text(correctLettersCounter + ' Richtig: ' + correctLetters, 10, 45)
    fill(220, 30, 30)
    text(wrongLettersCounter + ' Falsch: ' + wrongLetters, 10, 65)
    fill('white')
    text(shownWord, 10, 85)
}

function drawKeyboard() {
    const keyboardLayout = [
        ["q", "w", "e", "r", "t", "z", "u", "i", "o", "p", "ü", " ",],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ö", "ä", " "],
        [" ", "y", "x", "c", "v", "b", "n", "m", " ", " ", " "],
    ];

    const keyWidth = 20;
    const keyHeight = 20;
    const startX = 0;
    const startY = 120;

    for (let row = 0; row < keyboardLayout.length; row++) {
        for (let col = 0; col < keyboardLayout[row].length; col++) {
            const keyLabel = keyboardLayout[row][col];
            const x = startX + col * keyWidth;
            const y = startY + row * keyHeight;
            let temp3 = false;
            // Check if it was pressed right
            for (let i = 0; i < correctLetters.length; i++) {
                if (keyLabel == correctLetters[i]) {
                    temp3 = true;
                    break; // No need to check further if the letter is found
                }
            }
            // Check if it was pressed wrong
            if (!temp3) {
                for (let i = 0; i < wrongLetters.length; i++) {
                    if (keyLabel == wrongLetters[i]) {
                        temp3 = true;
                        break; // No need to check further if the letter is found
                    }
                }
            }

            // Set the color based on the check result
            if (temp3) {
                fill(50);
            } else {
                fill(255);
            }

            stroke(0);
            rect(x, y, keyWidth, keyHeight);

            fill(0);
            textSize(16);
            textAlign(CENTER, CENTER);
            text(keyLabel, x + keyWidth / 2, y + keyHeight / 2);
        }
    }
}


function setup() {
    createCanvas(500, 500)
    drawInterface()
    frameRate(2)
}

function draw() {
    clear();
    push(); // Speichere das aktuelle Koordinatensystem
    drawInterface();
    translate(10, 0); // Verschiebe das Koordinatensystem um 10 Pixel nach rechts

    drawKeyboard();



    pop(); // Setze das Koordinatensystem zurück
}
