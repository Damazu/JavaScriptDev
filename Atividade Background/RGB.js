window.addEventListener("load",range)
function range(){
    var body = document.querySelector("body");

    let resultado = document.getElementById("num_red");
    let valor = document.getElementById("red").value;
    resultado.innerHTML = valor

    let resultado1 = document.getElementById("num_blue");
    let valor2 = document.getElementById("blue").value;
    resultado1.innerHTML = valor2

    let resultado3 = document.getElementById("num_green");
    let valor3 = document.getElementById("green").value;
    resultado3.innerHTML = valor3
    alterar(valor,valor2,valor3)
    
    function alterar(red,blue,green)
    {
        body.style.backgroundColor = `rgb(${red},${green},${blue})`
    
    }
    
   }
   
document.addEventListener("change", range);
document.addEventListener("change", range);
document.addEventListener("change", range);

