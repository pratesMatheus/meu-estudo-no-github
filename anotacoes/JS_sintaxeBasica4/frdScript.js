/* Funções PARTE 1
*/
//Função declarativa (função mais comum)
    //sem parâmetro
    function myFunction(params) {
        console.log('this message came from a funcion')
    }
    myFunction();

    // com parâmetro
    function fncMensagem (txt1, txt2){
        console.log (txt1, txt2)
    }
    fncMensagem('hello', 'world');

/*Funções PARTE 2
*/
//Expressão de função
    //com nomeação da função 
    var funcao = function funcao(){
        console.log('mensagem de função de expressão com nomeação da função');
    }
    console.log(funcao);
    //sem nomeação da função
    var funcao1 = function(){
        console.log('mensagem de função de expressão sem nomeação da função')
    }
    console.log(funcao1);
//arrow function
    var funcao2 = () =>{
        console.log('mensagem de uma arrow function');
    }
    console.log(funcao2);