let $ = document.querySelector.bind(document);
const input = $("#senha");
const divInicializacao = $(".container-inicializacao");
const containerExecutandoApp = $(".sinalizador");
let inicializador = false;
let tempo = 12000;
let imagemAtual = 0;
let imagens = document.querySelectorAll(".container-imagens img");
let max = imagens.length;
let senha = $(".senha__paragrafo");

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

function Voz() {
    const synth = window.speechSynthesis;
    let falar = new SpeechSynthesisUtterance(`senha ${senha.innerText}`);
    synth.speak(falar);
}

const mapaTeclado = {
    Enter: 'senha'
};

function mapearTeclado(evento) {
    const tecla = evento.key;
    const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) !== -1;
    
    if (teclaPermitida()) {
        switch(inicializador) {
            case false: 
                atualizaDOM();
                Voz();
                inicializador = true;
                break;
            case true:
                implementaSenha();
                Voz();
                break;
        }
    }
}

document.addEventListener('keydown', mapearTeclado);