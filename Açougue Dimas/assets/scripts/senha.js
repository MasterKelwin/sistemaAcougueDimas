let $ = document.querySelector.bind(document);
const input = $("#senha");
const lista = $("#lista");
const senhaDiv = $(".inicia-aplicacao");
const divInicializacao = $(".container-inicializacao");

const iniciaAplicacao = () => {
    geraHTML();
    removeDivInput();
};

const removeDivInput = () => {
    divInicializacao.remove();
};

const geraHTML = () => {
    const containerExecutandoApp = document.createElement("div");
    containerExecutandoApp.classList.add("container-executando-app");

    const containerSenha = document.createElement("div");
    containerSenha.classList.add("container-senha");

    const containerImagens = document.createElement("div");
    containerImagens.classList.add("container-imagens");

    const titulo = document.createElement("h1");
    titulo.innerText = "SENHA";
    titulo.classList.add("senha__titulo");

    const senhaReal = document.createElement("p");
    senhaReal.classList.add("senha__paragrafo");
    senhaReal.innerText = input.value;

    const imagem = document.createElement("img");
    imagem.setAttribute("onload", "slide1();");
    imagem.classList.add("imagem");
    imagem.src = "assets/imgs/01.png";

    senhaDiv.appendChild(containerExecutandoApp);
    containerExecutandoApp.appendChild(containerImagens);
    containerExecutandoApp.appendChild(containerSenha);
    containerImagens.appendChild(imagem);
    containerSenha.appendChild(titulo);
    containerSenha.appendChild(senhaReal);
}

function slide1() {
    $('.imagem').src = "assets/imgs/01.png";
    setTimeout("slide2()", 12000)
}

function slide2() {
    $('.imagem').src = "assets/imgs/02.png";
    setTimeout("slide3()", 12000)
}

function slide3() {
    $('.imagem').src = "assets/imgs/03.png";
    setTimeout("slide4()", 12000)
}

function slide4() {
    $('.imagem').src = "assets/imgs/04.png";
    setTimeout("slide5()", 12000)
}

function slide5() {
    $('.imagem').src = "assets/imgs/05.png";
    setTimeout("slide6()", 12000)
}

function slide6() {
    $('.imagem').src = "assets/imgs/06.png";
    setTimeout("slide7()", 12000)
}

function slide7() {
    $('.imagem').src = "assets/imgs/07.png";
    setTimeout("slide8()", 12000)
}

function slide8() {
    $('.imagem').src = "assets/imgs/08.png";
    setTimeout("slide9()", 12000)
}

function slide9() {
    $('.imagem').src = "assets/imgs/09.png";
    setTimeout("slide10()", 12000)
}

function slide10() {
    $('.imagem').src = "assets/imgs/10.png";
    setTimeout("slide1()", 12000)
}

const implementaSenha = () => {
    let senhaExibida = $(".senha__paragrafo");
    let senhaAtualizada = senhaExibida.textContent;

    if (senhaAtualizada < 100) {
        senhaAtualizada++;
        senhaExibida.innerHTML = senhaAtualizada;

    } else {
        alert("Favor repor as senhas!");
        return;
    }
}

document.addEventListener('keypress', function (e) {
    if (e.which == 13) { //enter
        iniciaAplicacao();
    } else {
        return;
    }
});

document.addEventListener('keypress', function (e) {
    if (e.which == 32) { //space
        implementaSenha();
    } else {
        return;
    }
});
