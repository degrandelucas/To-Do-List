function exibirTextoNaTela(tag, texto){
    let campoTexto = document.getElementById(tag);
    campoTexto.innerHTML = texto;
}

function exibirTextoTelaInicial() {
    exibirTextoNaTela('tituloPagina', 'To-Do-List');
    exibirTextoNaTela('descricao', 'A aplicação permite adicionar, marcar como concluída e remover tarefas de forma prática');
}

exibirTextoTelaInicial();

let listaItens = [];

function inserirItem() {
    let campoItem = document.getElementById('campoItem').value;
    listaItens.push(campoItem);
}

function exibirItens(){
    for (let i = 0; i < listaItens.length; i++) {
        let item = document.createElement('li');
        item.innerHTML = listaItens[i];
        lista.appendChild(item);
    }
}