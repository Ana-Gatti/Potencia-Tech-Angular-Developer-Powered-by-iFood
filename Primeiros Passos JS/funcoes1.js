/**
 * Faça um programa com funções para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:

 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/


function litrosConsumidos(distanciaEmKm, kmPorLitros){
  return distanciaEmKm / kmPorLitros;
}

function valorGasto(litrosConsumidos, precoCombustivel){
  return litrosConsumidos * precoCombustivel;
}

function main(){
  const precoCombustivel = 5.79

  const litros = litrosConsumidos(100,12);
  const valor = valorGasto(litros, precoCombustivel);

  console.log(valor.toFixed(2));
}

main();
