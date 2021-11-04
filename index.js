const robot = require('robotjs');


// The middle of the number 1 in numpad
const NUMAPAD_CALIBRATION_XY = {x:25, y:180}
const DISTANCE_BEETWEEN_NUMBERS = 60; // Assume horizontal and vertical distances are the same



const numpadPositions = generateNumpadPositions();

console.log(numpadPositions)

click(numpadPositions[1])
testNumpadClicks(numpadPositions)


function testNumpadClicks(numpadPositions) {
    for (let i = 0; i < 10; i++) {
        click(numpadPositions[i]);
        console.log('Clicked ', i)
    }
}


function click(coordinates) {
    console.log(coordinates)
    robot.moveMouse(coordinates.x, coordinates.y)
    robot.mouseClick()
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

