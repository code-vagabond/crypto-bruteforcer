const robot = require('robotjs');


// The middle of the number 1 in numpad
const NUMAPAD_CALIBRATION_XY = {x: 696, y:348}
const DISTANCE_BEETWEEN_NUMBERS = 100; // Assume horizontal and vertical distances are the same
const PIN_MAX = 999999;
const START_AT = 0;
const END_AT = 9;


const numpadPositions = generateNumpadPositions();


// click(131999);
// click(12)
// click(1000)
start()


function start() {
    for (let i = START_AT; i <END_AT; i++) {
        click(i);
    }
}


function click(number) {
        if (number <= PIN_MAX) {
            const clickSequence = generateClickSequence(number)
            console.log('Inputting PIN ', clickSequence)
            for (let i = 0; i < clickSequence.length; i++){
                const c = clickSequence.charAt(i);
                _clickDigit(number)
            }
        }
}

function _clickDigit(number) {
    const coordinates = numpadPositions[number];
    robot.moveMouse(coordinates.x, coordinates.y)
    robot.mouseClick()
}

function generateClickSequence(number) {
    let numberStr = number.toString();
    const missingZerosCount = PIN_MAX.toString().length - numberStr.length;
    for (let i = 0; i < missingZerosCount; i++) {
        numberStr = "0" + numberStr; 
    }
    return numberStr;
}


function generateNumpadPositions() {
    const numpad = {1: {
        x: NUMAPAD_CALIBRATION_XY.x,
        y: NUMAPAD_CALIBRATION_XY.y
    }};
    numpad[2] = {
        x: NUMAPAD_CALIBRATION_XY.x + DISTANCE_BEETWEEN_NUMBERS,
        y: NUMAPAD_CALIBRATION_XY.y
    }
    numpad[3] = {
        x: NUMAPAD_CALIBRATION_XY.x + (DISTANCE_BEETWEEN_NUMBERS * 2),
        y: NUMAPAD_CALIBRATION_XY.y
    }
    numpad[4] = {
        x: NUMAPAD_CALIBRATION_XY.x,
        y: NUMAPAD_CALIBRATION_XY.y + DISTANCE_BEETWEEN_NUMBERS
    }
    numpad[5] = {
        x: NUMAPAD_CALIBRATION_XY.x + DISTANCE_BEETWEEN_NUMBERS,
        y: NUMAPAD_CALIBRATION_XY.y + DISTANCE_BEETWEEN_NUMBERS
    }
    numpad[6] = {
        x: NUMAPAD_CALIBRATION_XY.x + (DISTANCE_BEETWEEN_NUMBERS * 2),
        y: NUMAPAD_CALIBRATION_XY.y + DISTANCE_BEETWEEN_NUMBERS
    }
    numpad[7] = {
        x: NUMAPAD_CALIBRATION_XY.x,
        y: NUMAPAD_CALIBRATION_XY.y + (DISTANCE_BEETWEEN_NUMBERS * 2)
    }
    numpad[8] = {
        x: NUMAPAD_CALIBRATION_XY.x + DISTANCE_BEETWEEN_NUMBERS,
        y: NUMAPAD_CALIBRATION_XY.y + (DISTANCE_BEETWEEN_NUMBERS * 2)
    },
    numpad[9] = {
        x: NUMAPAD_CALIBRATION_XY.x + (DISTANCE_BEETWEEN_NUMBERS * 2),
        y: NUMAPAD_CALIBRATION_XY.y + (DISTANCE_BEETWEEN_NUMBERS * 2)
    },
    numpad[0] = {
        x: numpad[8].x,
        y: numpad[8].y + DISTANCE_BEETWEEN_NUMBERS
    }
    return numpad;
}

