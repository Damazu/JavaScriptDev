var start =  document.querySelectorAll('button')[0];
var stope = document.querySelectorAll('button')[1];



start.onclick = function(){
    crescente = setInterval(function () {
        var numero = document.getElementById("valor").innerHTML;
        var soma = parseInt(numero) + 1;
        document.getElementById('valor').innerHTML = soma

    }, 1000);

}
stope.onclick = function(){
    clearInterval(crescente);
}
