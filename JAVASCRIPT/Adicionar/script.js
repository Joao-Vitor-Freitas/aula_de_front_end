// Pega todo HTML e coloca na variavel
const btnAddCard = document.getElementById("addCard");
// troca o Texto da tag do elemento btnAddCard
btnAddCard.innerText = "Comprar";

// variavel que contem o elemento que sera adicionada
let card = '<div class="produto"></div>';
let totalProdutos = 0;
let produtos = '';

// função do clique  - elemento.addEventListener(evento, função);
btnAddCard.addEventListener("click", ()=>{
    // contador de cliques
    totalProdutos = totalProdutos + 1 ;
        //   inicio do contador ; condição ; contador = contador + 1
    for (let contador = 0; contador <= totalProdutos; contador++) {
        produtos = produtos + card;
        
    }

    // identificou o elemento do html , informa o texto que ira no atrib.
    // document.getElementById("carrinho").innerText = "clicou";
    // carrinho.innerText = "Clicou";
    // carrinho.style = "font-weight: bold";
    // carrinho.tabIndex = 9;
    let carrinho = document.getElementById("carrinho");
    // carrinho.innerHTML = "";
    //carrinho.innerHTML = card; // add o conteudo
    carrinho.innerHTML = produtos;

})

console.log(btnAddCard);