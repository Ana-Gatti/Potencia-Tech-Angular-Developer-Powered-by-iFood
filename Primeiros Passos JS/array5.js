/**Dado uma lista com as médias tiradas pelos alunos, imprima todas as médias 
 * que ficaram de recuperação (média < 5).
Ex de lista = [2, 7, 3, 8, 10, 4]*/

const listaMedias = [2, 7, 3, 8, 10, 4];

for (let i = 0; i < listaMedias.length; i++) {

    const mediaRecuperacao = listaMedias[i];
    if(mediaRecuperacao < 5){
        console.log(mediaRecuperacao);
    }
}
