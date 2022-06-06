/*
                            ANOTAÇÕES
Parte 1
variáveis são valores que variam que se alteram, que podem receber novos valores
    NOTA: no JS, uma variável é declarada como "var"
Constantes são diferentes das variáveis, são valores fixos e que não se alteram
    NOTA: no JS, uma constante é declarada como "const"
*/

/*
Parte 2
Através dos "()" de uma função, declaramos os parâmetros de uma função
p/ manipular valores, por exemplo;
o "return" usamos quando precisamos manipular o resultado de uma função 
em outra função, por exemplo;
P/ executar uma função, ele deve ser declarada

P/ ver o resultado de uma função, podemos usar o console.log 
que irá nos mostrar o valor (nesse caso, da função, (pelo terminal ou navegador));

vamos ao exemplo, prático:

        function soma(a,b) {
            //console.log(a+b);
            return a + b;
        }
        // declarando a função
        soma(3,5);
        //3 se refere ao parâmetro a, 5 se refere ao parâmetro b
        //nesse caso, o return vai exibir 8;

*/

/*
Parte 3
consoles podem ser usados no browser ou terminal.
para se comunicar c/ o terminal, usamos: "console.log("hello world");"
c/ a mensagem escrita, abrimos o terminal 
e vamos até o diretório onde está o arquivo, nesse caso: teste.js
e digitamos no terminal: "node teste.js" (que vai exibir "hello world");

vamos praticar um pouco...

        //a ideia dessa função é retornar n° pares
        //além disso, vai listar também os  n° ímpares por meio do "else"
        function returnEvenValues(array){
            let evenNums = [];
            for(let i=0; i< array.lenght; i++){
                if(array[i] % 2 === 0) {
                    evenNums.push(array[i])
                } else{
                    console.log(`${array[i]} não é par!`)
                }
            }
            console.log("Os números pares são: ", evenNums);
        }

        let array = [1,2,4,5,7,8];

        returnEvenValues(array);
*/
