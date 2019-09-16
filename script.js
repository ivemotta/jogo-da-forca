let lista = document.querySelectorAll('h1');
let caixa = document.querySelector('#caixa');
let botao = document.querySelector('#botao');

function verificarValor(letra){
    for  (let h1 of lista){
        if(letra == h1.innerHTML){
            h1.style.color = 'white'
        }else{
            
        }
    }
    
}

function pegarLetra(){
    let letra = caixa.value;
    verificarValor(letra);
    caixa.value = "";
}




botao.onclick = pegarLetra;
