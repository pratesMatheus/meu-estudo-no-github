/*
        ANOTAÇÕES
teste usado no console do browser:
    document.getElementsByTagName('h1');
    //declarando uma variável a ser manipulada pelo DOM c/ browser
    var heading1 = document.getElementsByTagName('h1')[0];

    c/ isso, mudamos a cor da variável acima ("heading1"), usando o exemplo abaixo 
    que vai manipular o "h1" do índice "0" dessa mesma variável
    heading1.style.color = 'red';
*/

var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
