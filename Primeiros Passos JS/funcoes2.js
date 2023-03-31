/**
 * Faça um programa com funções para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:

 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
 */

function litrosConsumidos(distanciaEmKm, kmPorLitros){
    return distanciaEmKm / kmPorLitros;
  }

function valorGastoTipoCombustivel(litros, precoGasolina, precoEtanol, tipoCombustivel){
    if(tipoCombustivel ==='Etanol'){
        return litros * precoEtanol;
    }else{
        return litros * precoGasolina;
    }
}

function main(){
    const tipoCombustivel = 'Etanol';
    const precoEtanol = 4.67;
    const precoGasolina = 5.79;
    const litros = litrosConsumidos(100,12);
    const valor = valorGastoTipoCombustivel(litros, precoGasolina, precoEtanol, tipoCombustivel);

    console.log(valor.toFixed(2));

}

main();