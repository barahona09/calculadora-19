function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Usar `eval` para la evaluación de la expresión. Se debe usar con precaución.
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
