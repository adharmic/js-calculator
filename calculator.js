
function add(augend, addend) {
    return augend + addend;
}

function subtract(minuend, subtrahend) {
    return minuend - subtrahend;
}

function multiply(multiplier, multiplicand) {
    return multiplier * multiplicand;
}

function divide(dividend, divisor) {
    return divided / divisor;
}

function operate(operator, firstValue, secondValue) {
    switch (operator) {
        case '+':
            return add(firstValue, secondValue);
            break;
        case '-':
            return subtract(firstValue, secondValue);
            break;
        case '*':
            return multiply(firstValue, secondValue);
            break;
        case '/':
            return divide(firstValue, secondValue);
            break;
        default:
            break;
    }
}

function updateDisplay() {
    DISPLAY.textContent = displayValue;
}

let firstValue, operator;
let displayValue = "0";
let equPressed = false;

const DIGIT_BUTTONS = document.querySelectorAll('.digits button');
const DISPLAY = document.querySelector('.display');
const OPERATOR_BUTTONS = document.querySelectorAll('.operators');

// Operator buttons
for (let button of OPERATOR_BUTTONS) {
    button.addEventListener("click", e => {
        equPressed = false;
        if (!firstValue) {
            firstValue = Number(DISPLAY.textContent);
            displayValue = "";
            return;
        }
        if (displayValue !== "") {
            displayValue = firstValue = operate(operator, firstValue, Number(DISPLAY.textContent));
            updateDisplay();
            displayValue = "";
            return;
        }
    });
}

const ADD = document.querySelector('#add');
const SUB = document.querySelector('#subtract');
const MUL = document.querySelector('#multiply');
const DIV = document.querySelector('#divide');
const EQU = document.querySelector('#equals');

const CLEAR = document.querySelector('#clear');

ADD.addEventListener("click", e => {
    operator = "+";
});

SUB.addEventListener("click", e => {
    operator = "-";
});

MUL.addEventListener("click", e => {
    operator = "*";
});

DIV.addEventListener("click", e => {
    operator = "/";
});

EQU.addEventListener("click", e => {
    if (displayValue !== "" && operator) {
        displayValue = operate(operator, firstValue, Number(displayValue));
        updateDisplay();
        displayValue = "";
        firstValue = null;
        operator = null;
        equPressed = true;
    }
});

CLEAR.addEventListener("click", e => {
    firstValue = null;
    displayValue = "0";
    operator = null;
    equPressed = false;
    updateDisplay();
})

// Add handling for digit button clicks
for (let button of DIGIT_BUTTONS) {
    button.addEventListener("click", e => {
        if (equPressed) {
            displayValue = "";
            equPressed = false;
        }
        if (e.textContent !== "0") {
            if (DISPLAY.textContent === "0") {
                displayValue = "";
            }
            displayValue += e.target.textContent;
            updateDisplay();   
        }
    });
}