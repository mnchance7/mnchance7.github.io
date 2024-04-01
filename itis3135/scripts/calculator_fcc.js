const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = calculator.querySelector('.calculator__display');

keys.addEventListener('click', e => {
    if (!e.target.matches('button')) return;

    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
        if (displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate') {
            display.textContent = keyContent;
        } else {
            display.textContent = displayedNum + keyContent;
        }
        calculator.dataset.previousKeyType = 'number';
    }

    if (action === 'decimal') {
        if (!displayedNum.includes('.')) {
            display.textContent = displayedNum + '.';
        } else if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
            display.textContent = '0.';
        }
        calculator.dataset.previousKeyType = 'decimal';
    }

    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
        key.classList.add('is-depressed');
        // Store the operator and the first number in custom attributes
        calculator.dataset.operator = action;
        calculator.dataset.firstValue = displayedNum;
        calculator.dataset.previousKeyType = 'operator';
    }

    if (action === 'clear') {
        display.textContent = '0';
        // Clear all the internal states
        delete calculator.dataset.firstValue;
        delete calculator.dataset.operator;
        delete calculator.dataset.previousKeyType;
    }

    if (action === 'equals') {
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const secondValue = displayedNum;

        display.textContent = calculate(firstValue, operator, secondValue);
        calculator.dataset.previousKeyType = 'calculate';
    }

    // Make sure to remove the depressed class from all keys
    Array.from(keys.children).forEach(k => k.classList.remove('is-depressed'));
});

// Calculation logic
function calculate(firstValue, operator, secondValue) {
    firstValue = parseFloat(firstValue);
    secondValue = parseFloat(secondValue);

    if (operator === 'add') return firstValue + secondValue;
    if (operator === 'subtract') return firstValue - secondValue;
    if (operator === 'multiply') return firstValue * secondValue;
    if (operator === 'divide') return firstValue / secondValue;
}


