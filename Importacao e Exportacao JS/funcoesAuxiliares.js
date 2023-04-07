/**
 * Arquivo criado para exemplificar o conceito de segmentação de códigos, 
 * com o objetivo de tornar mais fácil a compreensão, manutenção e reutilização.
 */

//criando o mocado da função gets
function gets(){
    return 10;
}

//criando o mocado da função print
function print(texto){
    console.log(texto);
}

//permitindo a exportação dos objetos criados
module.exports = { gets, print }