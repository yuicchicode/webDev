//Grid Colors Animation

/*const divs = document.querySelectorAll('.divcolor'); // Seleciona as divs (ajuste o seletor conforme necessário)
const colors = ['#00c2c','#001d37','#003645','#005858','#00755c','#039a5d','#15bd5e','#00d459','66f290'];

// Garante que o número de cores seja igual ao número de divs
if (colors.length < divs.length) {
    // Adiciona cores aleatórias ao array de cores, se necessário
    while (colors.length < divs.length) {
        colors.push(getRandomColor());
    }
}

// Embaralha os índices apenas uma vez
const shuffledIndices = shuffleArray(Array.from({ length: divs.length }, (_, i) => i));

btn.onclick = changeColor;


// Chama a função changeColor a cada 5 segundos
setInterval(changeColor, 2000);


function changeColor() {
    shuffleArray(shuffledIndices);
    shuffledIndices.forEach((indice, i) => {
        divs[i].style.backgroundColor = colors[indice];
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomColor() {
    // Gera uma cor aleatória no formato hexadecimal
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}*/