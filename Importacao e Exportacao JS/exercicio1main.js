
const funcoes = require('./exercicio1');

const tabuadaNumero = funcoes.gets();
let i = 1;

for (let i = 1; i <= 10; i++) {
    funcoes.print(`${tabuadaNumero} X ${i} = ${tabuadaNumero * i}`); 
}
