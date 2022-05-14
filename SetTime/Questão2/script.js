let amojs = "Amo JS"// variavel que estará em 2 funções fica fora da função

function texto() {// função que vai acontecer as coisas
    console.log(amojs)
}
 
const tempo = setInterval(function() {
    texto()
}, 5000);//função de intervalo

setTimeout(() => {
    clearInterval(tempo)
}, 25000);


setTimeout(() =>{
    setInterval(() => {
    texto();
    
}, 1000);
},25000)

