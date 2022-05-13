let $ = document.querySelector.bind(document);
const input = $("#senha");
const lista = $("#lista");
const senhaDiv = $(".inicia-aplicacao");
const divInicializacao = $(".container-inicializacao");

const removeDivInput = () => {
    divInicializacao.remove();
};

const iniciaAplicacao = () => {
    geraHTML();
    removeDivInput();

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
    imagem.classList.add("imagem");
    imagem.src = "assets/imgs/01.png";

    senhaDiv.appendChild(containerExecutandoApp);
    containerExecutandoApp.appendChild(containerImagens);
    containerExecutandoApp.appendChild(containerSenha);
    containerImagens.appendChild(imagem);
    containerSenha.appendChild(titulo);
    containerSenha.appendChild(senhaReal);
}

function implementaSenha() {   
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


