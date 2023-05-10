const elementochute = document.getElementById('chute')
window.SpeechRecognition = window.SpeechRecognition ||
webkitSpeechRecognition;

 const recognition = new SpeechRecognition();

 recognition.lang == 'pt-Br'
 recognition.start()

 /*Vamos criar um evento, que assim que falamos, vamos exibir a nossa mensagem no console. Para isso, 
 vamos utilizar o recognition.addEventListener(‘result’, onSpeak), ou seja, quando o nosso reconhecimento 
 de voz começar, eu quero pegar tudo que está em result, e vou criar uma função call-back, para que
  ela seja executada, então, vou chamar de onSpeak.*/

 recognition.addEventListener('result', onSpeak)

 // adicionamos um evento e acessamos a propriedade “results”, depois as duas arrays de índice “0” e por fim 
 //o “transcript” que é onde fica o conteúdo falado.
 function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibichutenatela(chute)
    VerficaSeoChutetemValorValido(chute)
   

    //console.log(e.results[0][0].transcript)

 }

 function exibichutenatela(chute) {
    elementochute.innerHTML = `<div>Voce disse:</div>
    <span class="box">${chute}</span> `

 } 

 //continuar reconhecndo a voz até acertar
 recognition.addEventListener('end', () => recognition.start())