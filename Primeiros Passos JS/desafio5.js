/**
 * Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
 * e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual a 
 * condição de pagamento escolhida e efetuar o cálculo adequado.
 * 
    Código Condição de pagamento:

    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
 */

const precoEtiqueta = 50;
const formaPagamento = 4;

/**
 * forma de pagamento 1 = Débito
 * forma de pagamento 2 = Dinheiro, pix
 * forma de pagamento 3 = Mais de duas vezes
 */

if(formaPagamento == 1){
    console.log(precoEtiqueta - (precoEtiqueta *  0.10));
}else if(formaPagamento == 2){
    console.log(precoEtiqueta - (precoEtiqueta *  0.15));
}else if(formaPagamento == 3){
    console.log(precoEtiqueta + (precoEtiqueta *  0.10));
}else{
    console.log(precoEtiqueta);
}

