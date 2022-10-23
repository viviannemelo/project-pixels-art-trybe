/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
const corPreta = document.getElementById('first');
window.onload = () => {
  corPreta.classList.add('selected');
};

const corSelecionada = document.querySelectorAll('.color');
function removerSelecaoDeCor() {
  for (i = 0; i < corSelecionada.length; i += 1) {
    console.log(corSelecionada[i]);
    corSelecionada[i].classList.remove('selected');
  }
}
function selecionarCor() {
  for (i = 0; i < corSelecionada.length; i += 1) {
    console.log(corSelecionada[i]);
    corSelecionada[i].addEventListener('click', (event) => {
      removerSelecaoDeCor();
      event.target.classList.add('selected');
    });
  }
}
selecionarCor();

function selecionarPixel() {
  const pixelSelecionado = document.getElementById('pixel-board');
  pixelSelecionado.addEventListener('click', (event) => {
    const getSelected = document.querySelector('.selected');
    const novaCor = window.getComputedStyle(getSelected).backgroundColor;
    event.target.style.backgroundColor = novaCor;
  });
}
selecionarPixel();

function limparPixels() {
  const buttom = document.getElementById('clear-board');
  buttom.addEventListener('click', () => {
    const pixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}
limparPixels();
