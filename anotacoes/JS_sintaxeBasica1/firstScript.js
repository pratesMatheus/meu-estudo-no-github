//this command create an alert box in the browser
window.alert('Hello world');


/*Let's learn .JS primitives types*/

/* PARTE 2
boolean*/
    var ValueOf = false;
    //NOTE: we may use "typeof" to know whats type of variable
    console.log(typeof(ValueOf));

/*Number*/
    var randomNumber = 2;
    console.log(typeof(randomNumber));

/* Strings */
    var userName = 'Matheus Prates';
    console.log(typeof(userName));

/*functions*/
    var myFunction = function(){}
    console.log(typeof(myFunction));

//how to declare a var
    var myFstVariable = 'Matheus';
    myVariable = 'a new value';
    console.log(myVariable);

//how to declare a let
    let mySndVariable = 'hello';
    mySndVariable = 'World';
    console.log(mySndVariable);

//how to declare a const
    const myConst = 'Orange blood';
    //myConst = 'a const cant receive a new value'; //it's really bad
    console.log(myConst);

/* escopo global and local*/
    /*global scope is when a variable it's out of any command block,
    can be used in all code*/
    var globalScope = 'global';
    console.log(globalScope);

    function localScope(){
        let internLocalScope = 'local';
        /*but it's diferent w/ local scope, 
        thats just avaliable/visible within a command block*/
    }
    // console.log(internLocalScope);

/*PARTE 3*/
    // atribuição
    var myAssignment = 'Matheus';

    // comparação retrona boolean
    var similar = '0' == 0;
    console.log(similar); //nesse caso, true

    //comparação idêntica compara valor e tipo e retorna boolean
    var exactlyIdentical = '0' === 0;
    console.log(exactlyIdentical); //nesse caso, false

/* PARTE 4*/
    //aritméticos
    var soma = 1 + 1;
    console.log(soma);

    var subtracao = 5 - 3;
    console.log(subtracao);

    var multiplicacao = 2 * 3;
    console.log(multiplicacao);

    var divisao = 6 / 2;
    console.log(divisao);

    var restoDivisao = 5 % 2;
    console.log(restoDivisao);

    var potenciacao = 2 ** 4;
    console.log(potenciacao);

    //Relacionais (retorna boolean)
    var maiorQ = 8 > 3;
    console.log(maiorQ);
    
    var menorQ = 3 < 2;
    console.log(menorQ);
    
    var maiorOuIgual = 5 >= 5;
    console.log(maiorOuIgual)
    
    var menorOuIgual = 6 <= 4;
    console.log(menorOuIgual);

    //lógicos (retorna boolean)
    var and = true && false;
    console.log(and);

    var or = true || false;
    console.log(or);

    var not = !true;
    console.log(not);