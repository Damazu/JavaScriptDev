const arraycores = ["blue", "yellow", "green", "red"]

let fundo = window.document.body

intervalo0 = setInterval(setcolor0, 4000);
intervalo1 = setInterval(setcolor1, 5000);
intervalo2 = setInterval(setcolor2, 6000);
intervalo3 = setInterval(setcolor3, 7000);

function setcolor0(){
    fundo.style.background = arraycores[0];

}  
function setcolor1(){
    fundo.style.background = arraycores[1];

}    
    
function setcolor2(){
    fundo.style.background = arraycores[2];

}  
function setcolor3(){
    fundo.style.background = arraycores[3];

}  
