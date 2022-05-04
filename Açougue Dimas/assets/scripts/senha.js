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
    const containerSenha = document.createElement("div");
    containerSenha.classList.add("senhaAtual", "container-inicializacao");

    const titulo = document.createElement("h1");
    titulo.innerText = "Senha";
    titulo.classList.add("paragrafo-titulo");

    const senhaReal = document.createElement("p");
    senhaReal.classList.add("paragrafo-senha");
    senhaReal.innerText = input.value;

    containerSenha.appendChild(titulo);
    containerSenha.appendChild(senhaReal);
    senhaDiv.appendChild(containerSenha);

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
