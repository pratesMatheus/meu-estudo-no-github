/*VARIÁVEIS E TIPOS*/

/* PARTE 1 - VAR E LET

diferença entre var e let;

- é muito comum usar camelCase no JS;

- hoisting (é atribuir um valor a uma variável antes mesmo de declarar ela, 
            e funciona apenas com o var); 
*/
    numberOne = 1;

    console.log(numberOne + 2);

    var numberOne; /*no node.js o resultado será 3, 
                    mesmo que a variável não seja declarada de novo*/

    /*porém, se fizer isso com o let no lugar do var (let numberOne;), 
    isso não funcionar, pois estamos de uma variável global que teve
    valor atribuído antes de ser declarada, chama-se isso de hoisting 
    (e só funciona com o var)


    - mas, se fosse declarado dessa forma (abaixo), funcionaria:
        let numberOne;
        numberOne = 1;
        console.log(numberOne + 2);*/

    var fstName = 'João';
    var lastName = 'Souza';

    if(fstName === 'João'){
        var fstName = 'Pedro'; //teve valor reatribuído, o var é de escopo global, ou seja, todo o código
        let lastName = 'Silva'; // let é de escopo local, ou seja, apenas funciona dentro de um bloco
    }

    console.log(fstName, lastName); /*vai exibir Pedro Souza e não Pedro Silva, pois o let é de apenas escopo local/ de bloco*/

/*PARTE 2 - CONSTANTES

- const são declaradas em SNAKE_UPPER_CASE, ex.: const MY_NAME = "Matheus Prates";  
- uma const deve ser inicializada logo no início;
- por ser uma constante,não pode ter valor reatribuído ou redeclarado, o valor de uma const é fixo;
- não faz hoisting, assim como o let;

*/
    const FST_NAME = "Matheus";
    console.log(FST_NAME);

/*PARTE 3 - ESTRUTURA DE DADOS

- no JS, a tipagem é dinâmica e fraca
    (não precisa especificar o tipo de dado ao declarar, 
    além disso, é possível sempre modificar essas mesmas variáveis);
- divididos em dois grandes grupos:
        - primitivos (numbes, strings, boolean, null e undefined), 
        eles não têm métodos dentro deles e escritos em letras minúsculas;
        - compostos (objects e arrays);
*/
/*PARTE 3.1 - STRINGS

- caracteres. São declaradas entre aspas ou crases 
    (nesse último, usamos as interpolação/templates Strings)
- pode ser declarado em: var, let ou const;
- também fazer concatenação e saber o tamanho da String;
- pode retornar o índice de uma String;
- podemos separar o valore de uma String letra por letra com ".split();" e retrona em formato de lista;
- etc;


ex.:
*/
    let myFstname = 'Matheus';
    let myMiddleName = 'Prates';
    let myLastName = 'Oliveira';

    //template string também é uma forma de concatenação
    let myFullname = 
        `Meu nome completo é: ${myFstname} ${myMiddleName} ${myLastName}`;

    console.log(myFstname.length); //para saber o tamanho da String

    let toConcat = myFstname.concat( myMiddleName); /*criei uma variável 
    para concatenar outras variáveis*/
    console.log(toConcat);

    let myExample = new String("Hello World");
    console.log(myExample); //vai retornar um objeto

    console.log(myFstname[1]); //vai retornar a letra "a" de matheus por ser o índice 1;

    console.log(myFullname.split(""));
    console.log(myFullname.split(" "));

    myFullname.includes("completo"); //true
    myFullname.startsWith("nome"); //false, e podemos ainda usar o .endsWith();

    let myFullnameModified = myFullname.replace("é", "não é");
    console.log(myFullnameModified);

/*PARTE 3.2 - NUMBERS

- inteiros, decimais
- podemos usar numbers para operações aritméticas
- podemos usar o objeto "Math."
- podemos tornar numbers em Strings com ".toString();"

*/

    let num = 100; // é um number

    num + 3; //vai retornar 103

    Math.PI; //vai retornar o valor de PI

    let fiveByThree = 5 / 3; //vai retornar: 1.66666666666667, mas...
    Math.floor(fiveByThree); //... é possível arrendondar para baixo, ou ...
    Math.ceil(fiveByThree); // arrendondar para cima;

    num.toString(); //converte p/ String

/* PARTE 3.3 - BOOLEAN

- curiosidade: pode transformar em uma string com .toString()
*/
//vamos a algumas comparações
let myValidation = 3 === 0; // vai retornar false
let myValidation2 = 3 === 3; //true
let myValidation3 = 3 > 4; //false
let myValidation4 = 5 >= 4; //true

myValidation2.toString();

!myValidation4; //vai retornar a inversão do valor, nesse caso será false

/*PARTE 3.4 - ARRAYS (ou vetores)

- lista de elementos iteráveis (é possível fazer operações com os elementos desse array); 
- e seu índice inicia em zero;
- declarado por colchetes;

*/

    let myArray = [];

    // com método .push() é possível add um item ao array:
    myArray.push(5); //nesse caso, retornar 1, por ser o único elemento do array;
    console.log(myArray); // vai indicar o item dentro do array, nesse caso: 5;

    myArray.push(8); //agora, vai retorna 2 items (5 e 8);
    console.log(myArray);

    //método .pop() vai deletar o último item desse array;
    myArray.pop();
    console.log(myArray);


    myArray.push(6, 3, 2);
    //método .shift() vai deletar o primeiro item desse array;
    myArray.shift();
    // método .unshift() vai add o item no início desse array;
    myArray.unshift(1)

    //testando a parte iterável com loop for
    for (let i; i < myArray.length; i++){
        console.log(myArray[i]); // vai retornar cada um dos elementos desse array;
    }

/* PARTE 3.5 - OBJETOS

*/

let myObject = {};

/*com typeOf myObject, vai retornar que esse tipo de dado 
é composto/não primitivio, nesse caso: um objeto*/

myObject.name = "Matheus"; /* vai criar a chave "name" com valor "Matheus"*/
myObject.age = 18; /*myObject.age = 20; vai criar a chave age com valor 20*/

/*com método Object.values() é possível retornar o valores internos*/
Object.values(myObject);
/*com método Object.keys() é possível retornar as chaves internas*/
Object.keys(myObject);

let person = {
    name: "Matheus", age: 18, adress: "221b Baker Street"
};

person.adress; /*vai retornar "221b Baker Street"

ou, pode usar a opção abaixo:
*/
person["adress"]; /*nesse segundo exemplo, também é possível criar uma nova chave, veja o exemplo abaixo:
*/
person["numberOfSimblings"] = 3;

/* PARTE 3.6 - conceitos importantes
    - empty: é um valor vazio (ex.: let number = 0; let name = ""; let myArray = [];);
    - null: se refere a algo declarado, porém que não foi inicializado;
    - undefined: é quando, além de não ser inicializado, não foi declarado;
*/

//se digitar no console, por exemplo, abacate:
console.log(abacate); // retorna undefined

//mas se declarar dessa forma:
let abacate = ""; //retorna empty

//porém, se declarar dessa forma:
let abacate2; //retorna null (não chega a ser true ou false, apenas nulo mesmo)