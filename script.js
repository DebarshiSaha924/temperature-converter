const degreesInput = document.getElementById('degrees');
const typeSelect = document.getElementById('type');
const convertButton = document.getElementById('convert');
const resultValueSpan = document.getElementById('result-value');

convertButton.addEventListener('click', () => {
    const degrees = parseFloat(degreesInput.value);
    const type = typeSelect.value;
    let result;

    if (type === 'fahrenheit') {
        result = degrees * 9 / 5 + 32
    } else {
        result = (degrees - 32) * 5 / 9;
    }

    resultValueSpan.textContent = result.toFixed(4) + '° ' + type.toUpperCase();
});
