const showButton = document.getElementById('showButton');
const conteudo = document.getElementById('conteudo');

let imageIndex = 1;

showButton.addEventListener('click', function(){
    conteudo.classList.toggle('hidden');
    
    if (imageIndex === 1) {
        showButton.src = 'assets/images/icon-plus.svg';
        showButton.alt = 'Image 2';
        imageIndex = 2;
    } else {
        showButton.src = 'assets/images/icon-minus.svg';
        showButton.alt = 'Image 1';
        imageIndex = 1;
    }
});