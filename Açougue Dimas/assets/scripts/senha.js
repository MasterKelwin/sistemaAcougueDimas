const input = document.querySelector("#senha");
const lista = document.querySelector("#lista");
const senhaDiv = document.querySelector(".inicia-aplicacao");

const removeInput = () => {
    senha.remove();
}

const removeLista = () => {
    lista.remove();
}

const exibeSenha = () => {
    const containerSenha = document.createElement("div");
    containerSenha.classList.add("senhaAtual");

    const senhaReal = document.createElement("p");
    senhaReal.innerText = input.value;

    containerSenha.appendChild(senhaReal);
    senhaDiv.appendChild(containerSenha);

    removeInput();
    removeLista();
}

document.addEventListener('keypress', function (e) {
    if (e.which == 13) {
        exibeSenha();
    }else {
        return;
    }
});
