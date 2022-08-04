const btnVoltar = document.getElementById("btn-voltar");
const btnAvancar = document.getElementById("btn-avancar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function adicionarCartaoSelecionado(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove('selecionado');
}

btnAvancar.addEventListener("click", function () {

    if(cartaoAtual === cartoes.length - 1) return;
    
    esconderCartaoSelecionado();

    cartaoAtual++;
   adicionarCartaoSelecionado(cartaoAtual);

});

btnVoltar.addEventListener("click", function () {   

    if(cartaoAtual === 0) return

    esconderCartaoSelecionado();

    cartaoAtual--;
    adicionarCartaoSelecionado(cartaoAtual);

});
   

