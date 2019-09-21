let lista = document.querySelectorAll('h1');
let caixa = document.querySelector('#caixa');
let botao = document.querySelector('button');

function verificarValor(letra){
    let exist = false;

    for  (let h1 of lista){
        if(letra == h1.innerHTML){
            h1.style.color = 'white';
            exist = true;
        }
    }
    
    if (!exist){
        alert("erro");
    }
} 

function pegarLetra(){
    let letra = caixa.value;
    verificarValor(letra);
    caixa.value = "";
}

let enterclick = (event) =>{
    if(event.key === 'Enter'){
        pegarLetra();
    }
}


botao.onclick = pegarLetra;
onkeydown = enterclick;
