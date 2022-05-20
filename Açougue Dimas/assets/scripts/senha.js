let $ = document.querySelector.bind(document);
const input = $("#senha");
const divInicializacao = $(".container-inicializacao");
const containerExecutandoApp = $(".sinalizador");
let inicializador = false;
let tempo = 12000;
let imagemAtual = 0;
let imagens = document.querySelectorAll(".container-imagens img");
let max = imagens.length;

const atualizaDOM = () => {
    divInicializacao.classList.add("inativo");

    containerExecutandoApp.classList.remove("inativo");
    containerExecutandoApp.classList.add("container-executando-app");

    const senhaExibida = $(".senha__paragrafo");
    senhaExibida.innerText = input.value;
}

const implementaSenha = () => {
    const senhaExibida = $(".senha__paragrafo");
    let senhaAtualizada = senhaExibida.textContent;

    if (senhaAtualizada < 1000) {
        senhaAtualizada++;
        senhaExibida.innerHTML = senhaAtualizada;
    } else {
        alert("Favor repor as senhas!");
    }
}

function proximaImagem() {
    imagens[imagemAtual].classList.remove("ativa");

    imagemAtual++;

    if (imagemAtual >= max) {
        imagemAtual = 0
    }

    imagens[imagemAtual].classList.add("ativa");
}

function iniciaRotacao() {
    setInterval(() => { proximaImagem() }, tempo);
}

document.addEventListener('keypress', function (e) {
    if (e.which == 13 && inicializador == false) { //enter
        atualizaDOM();
        inicializador = true;
    } else {
        implementaSenha();
    }
});