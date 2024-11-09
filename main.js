//Declaration of the Needed Variables//
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentNumber = '';
let previousNumber = '';
let operation = null;

buttons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.textContent;
                switch (value) {
                    case 'Clear':
                        clearDisplay();
                        break;
                    case 'DEL':
                        backspace();
                        break;
                    case '=':
                        calculate();
                        break;
                    case '+':
                    case '-':
                    case 'x':
                    case '/':
                        setOperation(value);
                        break;
                    default:
                        appendNumber(value);
                }
            });
        });

        function appendNumber(number) {
            currentNumber += number;
            display.value = currentNumber;
        }
function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    display.value = '';
}

function backspace() {
    currentNumber = currentNumber.slice(0, -1);
    display.value = currentNumber;
}

function setOperation(op) {
    previousNumber = currentNumber;
    currentNumber = '';
    operation = op;
}

function calculate() {
    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);

    switch (operation) {
        case '+':
            display.value = num1 + num2;
            break;
        case '-':
            display.value = num1 - num2;
            break;
        case 'x':
            display.value = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                display.value = 'Error';
            } else {
                display.value = num1 / num2;
            }
            break;
    }

    previousNumber = '';
    currentNumber = '';
    operation = null;
}