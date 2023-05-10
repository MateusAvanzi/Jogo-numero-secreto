function VerficaSeoChutetemValorValido() {
    //transforma o numero em inteiro (veio em string)
    const numero = +chute

      /*if (Number.isNaN(numero)) {
        console.log('invalido ')
    }*/


    if (chuteinvalido()(numero)) {
     elementochute.innerHTML += '<div>Valor invalido </div>'
     return
    } 
    
    if (numeroformaioroumenor(numero)) {
        elementochute.innerHTML += `<div>valor invalido! Fale um numero entre ${menorValor} 
        e ${maiorValor} </div>`
        return

    }

    if (numero === numeroSecreto) {
        //vai aparecer em uma nova tela
        documention.body.innerHTML = `<h2>Voce acertou!! </h2>
        <h3> O numero secreto era ${numeroSecreto} </h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente </button>`
    } 
    //se for um numero dentro do limite mas voce errou - passar dicas
    else if (numero > numeroSecreto) {
        elementochute.innerHTML += `<div>O numero secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementochute.innerHTML += `<div>O numero secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`

    }
}

//function que verifica se o numero é invalido
function chuteinvalido() {
    return Number.isNaN
}

function numeroformaioroumenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener("click", e => {
    //acesssar botao
    //se tiver um click no botao id jogar novamente da um reload na tela
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})

/*O que o método window.location.reload faz?
Recarrega a página atual e reinicia o jogo.
 Em JavaScript, "window" representa a janela aberta no navegador. Já "location", nessa linguagem, contém informações sobre a URL atual. Por último, "reload()" é usado para recarregar a página. */