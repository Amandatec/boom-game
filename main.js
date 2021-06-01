// [FEITO] capturar o elemento html em que vamos inserir os baloes
// [FEITO] adicionar o balão no container
// [FEITO] determinar um intervalo de tempo para adicionar os baloes sequencialmente
//FEITO inserido a função para estourar baloes
const containerBaloes = document.querySelector(".containerBaloes");

console.log("container =>,containerBaloes" );

function adicionarBalao (){
    const elementoImg = document.createElement("img");

    elementoImg.setAttribute("src", "./assets/img/baloon.png");
    elementoImg.setAttribute("class", "balao")//coloquei uma class no IMG dentro do js

    const valorLeft = Math.round(Math.random () *90);
    const valorTop = Math.round(Math.random () *90);

    elementoImg.style.left = valorLeft + "vw";
    elementoImg.style.top = valorTop + "vh";

    console.log("left=>", valorLeft);
    console.log("Top=>", valorTop);

    containerBaloes.appendChild(elementoImg);

    //console.log("Elemento Img =>", elementoImg);
    elementoImg.addEventListener ("click", function() {
        elementoImg.remove();
     
    })
}


setInterval(adicionarBalao, 1000);