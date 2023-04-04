//Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const listaNomes = ['Vitoria', 'Ana', 'Viviane', 'Maria', 'Vanessa'];

for (let i = 0; i < listaNomes.length; i++) {
   
    const nomesComV = listaNomes[i];
    if(nomesComV.startsWith('V')){
        console.log(nomesComV);
    }   
}