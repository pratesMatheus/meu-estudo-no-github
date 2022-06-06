/*PARTE 1 - Estruturas condicionais

*/

//estrutura "if"

    var player1 = 0;
    var player2 = 0;
    var placar;
    /*
    if(player1 != -1){
        if(player1 > 0) {
            console.log('player1 marcou um ponto');
        } else if (player2 > 0) {
            console.log('player2 marcou ponto');
        } else {
            console.log('ninguém marcou ponto');
        }
    }*/

    //outra forma de fazer a verificação com if é o uso do if ternário
    player1 != -1 && player2 != -1 ? console.log('os jogadores são válidos'): console.log('jogadores iválidos');
    //agora, vamos aprimorar a estrtura if anterior
        if(player1 > 0 && player2 == 0) {
            console.log('player1 marcou um ponto');
            placar = player1 > player2;
        } else if (player2 > 0 && player1 == 0) {
            console.log('player2 marcou ponto');
            placar = player2 > player1;
        } else {
            console.log('ninguém marcou ponto');
        }
//switch case
        switch (placar){
            case placar = player1 > player2:
                console.log('player1 ganhou');
                break;
            case placar = player2 > player2:
                console.log('player2 ganhou');
                break;
            default:
                console.log('ninguém ganhou');
        }

/*PARTE 2 - Estrutura de decisão

*/

//for (executa instrução até que seja falsa)
    //vamos começar declarando variáveis
    let array1 = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
    let object1 = {
        propriedade1: 'valor1',
        propriedade2: 'valor2',
        propriedade3: 'valor3'
    }
    for(let indice = 0; indice < array1.length; indice++){
        console.log(indice);
    }
// for/in (executa instrução a partir de uma propriedade)
    //com array
    for (let i in array1){
        console.log(i);
    }
    //com objeto
    for (i in object1){
        console.log(i);
    }
// for/of (funciona como repetição a partir de um valor)
    //com array
    for (i of array1){
        console.log(i);
    }
    //com objeto (nesse caso, para pegar um objeto, 
    //deve acrescentar a propriedade do objeto.
    //Isso não é aconselhável, pois cada leta será exibida em um linha)
    for (i of object1.propriedade1) {
        console.log(i);
    }
//while
    var a = 0;
    while (a < 10){
        a++
        console.log(a);
    }
//do/while
    var b = 0;
    do {
        b++;
        console.log(b);
    } while(b < 10); 