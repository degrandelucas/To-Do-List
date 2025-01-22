let listaItens = [];

function exibirTextoNaTela(tag, texto){
    let campoTexto = document.getElementById(tag);
    campoTexto.innerHTML = texto;
}

function exibirTextoTelaInicial() {
    exibirTextoNaTela('tituloPagina', 'To-Do-List');
    exibirTextoNaTela('descricao', 'A aplicação permite adicionar, marcar como concluída e remover tarefas de forma prática');
}

exibirTextoTelaInicial();

function inserirItem() {
    let campoItem = document.getElementById('campoItem').value;
    if (campoItem.trim() !== ''){
        listaItens.push(campoItem);
        document.getElementById('campoItem').value = '';
        console.log(listaItens); //teste
        atualizarListaTela();
    }
}

function limparLista(){
    listaItens = [];
    atualizarListaTela();
}

function criarElementoLista(){
    let criarPosicaoItemLista = document.createElement('li');
    criarPosicaoItemLista.className = 'lista-item';
    return criarPosicaoItemLista;
}

function mostrarTextoItem(item){
    let textoItem = document.createElement('span');
    textoItem.className = 'texto-item';
    textoItem.innerHTML = item; 
    return textoItem; 
}

function checkboxItem(textoItem) {
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox-item";
  checkbox.addEventListener("click", (marcarTextoItem) => {
    checkbox.checked
      ? (textoItem.style.textDecoration = "line-through")
      : (textoItem.style.textDecoration = "none");
  });
  return checkbox;
}

function botaoExcluir(index){
    let botaoExcluir = document.createElement('button');
    botaoExcluir.className = 'botao-excluir';
    botaoExcluir.innerHTML = '🗑️';
    botaoExcluir.addEventListener('click', removerItemBotaoExcluir => {
        listaItens.splice(index, 1); // Remove o item atual do array
        atualizarListaTela(); // Atualiza a exibição da lista
    });
    return botaoExcluir;
}

function atualizarListaTela(){
    let listaTela = document.getElementById('listaTela');
    listaTela.innerHTML = ''; //Limpa os itens da lista para evitar duplicação

    listaItens.forEach((item, index) => {
        let criarPosicaoItemLista = criarElementoLista();
        let textoItem = mostrarTextoItem(item);
        let checkbox = checkboxItem(textoItem);
        let botaoExcluirItem = botaoExcluir(index); // Passa o índice para o botão
        
        // Adiciona os elementos (checkbox, textoItem, botaoEliminar) ao <li>
        criarPosicaoItemLista.appendChild(checkbox);
        criarPosicaoItemLista.appendChild(textoItem);
        criarPosicaoItemLista.appendChild(botaoExcluirItem);

        // Adiciona o <li> à lista ul
        listaTela.appendChild(criarPosicaoItemLista);
})
}