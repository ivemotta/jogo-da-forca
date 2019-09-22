let lista = document.querySelectorAll('h1');
let caixa = document.querySelector('#caixa');
let botao = document.querySelector('button');
let chute = document.querySelectorAll('h3');
let imagem = document.getElementById("trocarImagem")

function tomara(){
        if (imagem.src.match("forca0")){
            imagem.src="images/forca1.jpg"
        }
        else if (imagem.src.match("forca1")){
            imagem.src="images/forca2.jpg"
        }
        else if (imagem.src.match("forca2")){
            imagem.src="images/forca3.jpg"
        }
        else if (imagem.src.match("forca3")){
            imagem.src="images/forca4.jpg"
        }
        else if (imagem.src.match("forca4")){
            imagem.src="images/forca5.jpg"
        }
        else if (imagem.src.match("forca5")){
            imagem.src="images/forca6.jpg"
        }
}


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
        tomara()
        
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
