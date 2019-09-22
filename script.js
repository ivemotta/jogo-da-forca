let lista = document.querySelectorAll('h1');
let caixa = document.querySelector('#caixa');
let botao = document.querySelector('button');
let chute = document.querySelectorAll('h3');

function verificarValor(letra){
    let exist = false;

    for  (let h1 of lista){
        if(letra == h1.innerHTML){
            h1.style.color = 'white';
            exist = true;
        }
        
    }

    if (!exist){
        alert("Letra errada!")
        
    }

    for (let h3 of chute){
        if(letra == h3.innerHTML){
            h3.style.color = 'red';
        }

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
