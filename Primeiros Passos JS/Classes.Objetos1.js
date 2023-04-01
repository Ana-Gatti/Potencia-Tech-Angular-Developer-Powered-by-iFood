/**
 * Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
 */

class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    } 
    
    CalcularGastoDoPercurso(quantidadeKm, precoCombustivel){
        return (quantidadeKm * this.gastoMedioPorKm) * precoCombustivel;
    };
}

const palio = new Carro('Fiat', 'Preto', 0.1);
valorGasto = palio.CalcularGastoDoPercurso(70, 5.49);
console.log('o valor gasto no percurso com palio é de: R$ ' + valorGasto.toFixed(2));

const uno = new Carro('Fiat', 'Preto', 0.084);
valorGasto = uno.CalcularGastoDoPercurso(70, 5.49);
console.log('o valor gasto no percurso com uno é de: R$ ' + valorGasto.toFixed(2));



