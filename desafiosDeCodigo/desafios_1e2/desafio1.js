//PARTE 1

/*Desafio 1/4 - As duas torres

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let input = gets().split(" "); 
let n, x, y; 

n =  parseInt(input[0]); 
x =  parseInt(input[1]); 
y =  parseInt(input[2]); 

//TODO: Complete os espaços em branco com uma possível solução para o desafio

let resultado = n / (x + y); //Resposta: CORRETA
print(resultado.toFixed(2));

*/

/* Desafio 2/4 - Média 1

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

var a = parseFloat(gets());
var b = parseFloat(gets());

//TODO: Complete os espaços em branco com uma possível solução para o desafio

var media = (( a * 3.5) + ( b * 7.5))/ 11;
print("MEDIA = " +            .toFixed(5));

//Resposta: 

*/

/* Desafio 3/4 - Área do círculo

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

const TT = 3.14159;
var raio = parseFloat(gets());

//TODO: Complete os espaços em branco com uma possível solução para o desafio

var area = TT * Math.pow( raio,2);
print("A=" + area.toFixed(4));

//Resposta: CORRETA

*/

/* Desafio 4/4 - Saída 1
print('---------------------------------------');
print('|                                     |');
print('|                                     |');
print('|                                     |');
print('|                                     |');
print('|                                     |');
print('---------------------------------------');

//Resposta: CORRETA
*/



//PARTE 2
/*Desafio 1/4 - Esfera

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

const PI = 3.14159;

let R = parseFloat(gets());

//TODO: Complete os espaços em branco com uma possível solução para o desafio
//Para precisão numérica utiliza-se o .toFixed(n)

let vol = (4/3) * PI * Math.pow(R,3);
print("VOLUME = " + vol.toFixed(3));

//Resposta: CORRETA
*/

/*Desafio 2/4 - Lanche

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let lines = gets().split("\n");
let line = lines.shift().split(" ");
let X = parseInt(line[0]);
let Y = parseInt(line[1]);

//TODO: Complete os espaços em branco com uma possível solução para o desafio
//OBS:  No javascript a casa decimal é definida por ponto. Exemplo: 1.50

var price = 0;

    if (X ==  1) {
      price = y * 4.00;
    }
    else if (X == 2) {
      price = y * 4.50;
    }
    else if (X == 3) {
      price = y * 5.00;
    }
    else if (X == 4) {
      price = y * 2.00;
    }
    else if (X == 5) {
      price = y * 1.50;
    }
    print("Total: R$" + price.toFixed(2));


//Resposta: CORRETA

*/

/*Desafio 3/4 - Sequência Lógica

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let lines = gets().split("\n");
let n = parseInt(lines.shift());

//TODO: Complete os espaços em branco com uma possível solução para o desafio

for (let i = 1; i <= n; i++) {
  print(`${i} ${i ** 2} ${i ** 3}`);
  print(`${i} ${i ** 2 + 1} ${i ** 3 + 1}`);
}

//Resposta: CORRETA
*/

/*Desafio 4/4 - Tuitando

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let T = gets();

//TODO: Complete os espaços em branco com uma possível solução para o desafio

print((T.length <= 140) ? 'TWEET' : 'MUTE');

//Resposta: CORRETA
*/