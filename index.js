const robot = require('robotjs');


// The middle of the number 1 in numpad
const NUMAPAD_CALIBRATION_XY = { x: 696, y: 350 }
const ENTER_BUTTON = { x: 768, y: 500 }
const DISTANCE_BEETWEEN_NUMBERS = 72; // Assume horizontal and vertical distances are the same
const PIN_MAX = 999999;
const START_AT = 38280;
const END_AT = 50000;


const numpadPositions = generateNumpadPositions();


// _clickDigit(0)
start()
console.log(robot.getMousePos())


function start() {
    for (let i = START_AT; i <= END_AT; i++) {
        clickEnter();
        sleep(600);
        click(i);
        sleep(600);
    }
}

function clickEnter() {
    const { x, y } = ENTER_BUTTON;
    robot.moveMouse(x, y);
    robot.mouseClick();
}

function click(number) {
<<<<<<< HEAD
    if (number <= PIN_MAX) {
        const clickSequence = generateClickSequence(number)
        console.log('Inputting PIN ', clickSequence)
        for (let i = 0; i < clickSequence.length; i++) {
            const c = clickSequence.charAt(i);
            _clickDigit(c)
=======
        if (number <= PIN_MAX) {
            const clickSequence = generateClickSequence(number)
            console.log('Inputting PIN ', clickSequence)
            for (let i = 0; i < clickSequence.length; i++){
                const c = clickSequence.charAt(i);
                _clickDigit(c)
            }
>>>>>>> 4195dc9d2126d39c7e2bb4801831007fb5258f72
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

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}


function generateNumpadPositions() {
    const numpad = {
        1: {
            x: NUMAPAD_CALIBRATION_XY.x,
            y: NUMAPAD_CALIBRATION_XY.y
        }
    };
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
    }
    numpad[9] = {
        x: NUMAPAD_CALIBRATION_XY.x + (DISTANCE_BEETWEEN_NUMBERS * 2),
        y: NUMAPAD_CALIBRATION_XY.y + (DISTANCE_BEETWEEN_NUMBERS * 2)
    }
    numpad[0] = {
        x: numpad[8].x,
        y: numpad[8].y + DISTANCE_BEETWEEN_NUMBERS
    }
    return numpad;
}

