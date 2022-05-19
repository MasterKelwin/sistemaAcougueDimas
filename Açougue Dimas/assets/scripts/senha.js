let $ = document.querySelector.bind(document);
const input = $("#senha");
const divInicializacao = $(".container-inicializacao");
const containerExecutandoApp = $(".sinalizador");
let inicializador = false;
 
const atualizaDOM = () => {
    divInicializacao.classList.add("inativo");

    containerExecutandoApp.classList.remove("inativo");
    containerExecutandoApp.classList.add("container-executando-app");
    
    divInicializacao.classList.remove("container-inicializacao");

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

document.addEventListener('keypress', function (e) {
    if (e.which == 13 && inicializador == false) { //enter
        atualizaDOM();
        inicializador = true;
    } else {
        implementaSenha();        
    }
});

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