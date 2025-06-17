alert ("Software de Faturamento - Metas 2025");

//Código de Geração de Variável Randômico: Ele vai gerar um
// número de 1 até 10 de maneira aleatória em cada vez que o software for executado.
let faturamentoAtual = parseInt(Math.random()*10 +1 );

// Em inspecionar, vai ser mostrado o valor randômico escolhido.
console.log = faturamentoAtual;

// Essa variável vai ser abastecida com a quantidade de vezes que o usuário tentou acertar o chute da resposta.
let tentativas = 1;

// Essa variável vai recebcer o valor variável do usuário que vai 
// tentar advinhar o número correspondente do faturamento mensal
let respostaUsuário

alert ("Vamos começar agora!");

while(respostaUsuário != faturamentoAtual){
        //Entrada do usuário
        respostaUsuário = prompt("Qual é o faturamento do Mês Atual?");
    //Condicional da Entrada.
    if(respostaUsuário == faturamentoAtual){
        break;
    } else{
        if(respostaUsuário > faturamentoAtual){
            alert(`O faturamento atual é menor que ${respostaUsuário}, tente novamente!`);
        } else  
            alert(`O faturamento atual é maior que ${respostaUsuário}, tente novamente!`);
    } tentativas++
}

let Acerto = tentativas > 1? "tentativas" : "tentativa";

alert (`Parabéns, você acertou! O número da meta é ${faturamentoAtual} e você acertou em ${tentativas} ${Acerto}`);