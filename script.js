let display = document.getElementById("display");
let audio = new Audio("click.wav");

function adicionar(valor) {
    display.value += valor;
    audio.play();
}

function limpar() {
    display.value = "";
    audio.play();
}

function calcular() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Erro";
    }
    audio.play();
}

function apagarUltimo() {
    display.value = display.value.slice(0, -1);
    audio.play();
}
