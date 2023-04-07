
const funcoes = require('./exercicio3');

const listaNumeros = [];
let numerosPares = [];


for (let i = 0; i < 6; i++) {
    const numeros = funcoes.gets();
    listaNumeros.push(numeros);
    
}

console.log(listaNumeros);

for (let i = 0; i < listaNumeros.length; i++) {
    const numeros = listaNumeros[i];
    
    if(numeros %2 === 0){
        numerosPares.push(numeros);    
    } 
}
funcoes.print(`Os números pares da lista são: ${numerosPares}`);
