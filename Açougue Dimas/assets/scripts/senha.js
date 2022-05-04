const input = document.querySelector("#senha");
const lista = document.querySelector("#lista");
const senhaDiv = document.querySelector(".inicia-aplicacao");
const DivInicializacao = document.querySelector(".container-inicializacao");

const removeDivInput = () => {
    DivInicializacao.remove();
}

const removeLista = () => {
    lista.remove();
}

const exibeSenha = () => {
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

    senhaDiv.appendChild(containerExecutandoApp)
    containerExecutandoApp.appendChild(containerImagens);
    containerExecutandoApp.appendChild(containerSenha);
    containerImagens.appendChild(imagem);
    containerSenha.appendChild(titulo);
    containerSenha.appendChild(senhaReal);

    

    removeDivInput();
    removeLista();
}

document.addEventListener('keypress', function (e) {
    if (e.which == 13) {
        exibeSenha();
    }else {
        return;
    }
});
