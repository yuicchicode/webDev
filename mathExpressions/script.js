function calculate() {
    var value = parseFloat(document.getElementById('value').value);
    var percentage = parseFloat(document.getElementById('percentage').value);

    if (!isNaN(value) && !isNaN(percentage)) {
        var result = value * (percentage / 100);
        document.getElementById('result').innerHTML = `Resultado: ${result.toFixed(2)}`;
    } else {
        document.getElementById('result').innerHTML = 'Insira valores válidos.';
    }
}