const menorValor = 1;
const maiorValor = 100;
//criou uma variavel que recebe uma função
const numeroSecreto = gerarNumeroAleatorio()



function gerarNumeroAleatorio() {
    //Math.Random() -> A função Math. random() é usado para retornar um número pseudoaleatório de ponto flutuante entre 0 e 1. 
    //retorna um numero inteiro
    return parseInt(Math.random() * maiorValor + 1) //+ 1 porque o math.random não inclui o ultimo numero

}

//exibir
console.log('Numero Secreto: ', numeroSecreto)


//manipulando maior e menor valor

const ElementoMenorValor = document.getElementById('menor-valor')
ElementoMenorValor.innerHTML = menorValor;

const ElementoMaiorValor = document.getElementById('maior-valor')
ElementoMaiorValor.innerHTML = maiorValor;