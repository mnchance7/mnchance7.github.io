let currentInput = "";

function showNum(number) {
    currentInput += number;
    document.getElementById('display').innerText = currentInput;
}

function calculate() {
    try {
        let result = eval(currentInput);
        document.getElementById('display').innerText = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById('display').innerText = "Error";
        currentInput = "";
    }
}
function addOperation(operation) {
    currentInput += operation;
    document.getElementById('display').innerText = currentInput;
}