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
  pixelSelecionado.addEventListener('click', function (event) {
    const getSelected = document.querySelector('.selected');
        let novaCor = window.getComputedStyle(getSelected).backgroundColor;
        event.target.style.backgroundColor = novaCor;
    });
}
selecionarPixel();

function limparPixels() {
  let buttom = document.getElementById("clear-board");
  buttom.addEventListener("click", function () {
    let pixels = document.getElementsByClassName("pixel");
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = "white";
    }
  });
}
limparPixels();
