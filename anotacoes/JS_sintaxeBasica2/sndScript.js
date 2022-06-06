/*Vetores/arrays
- o n° 0 é o primeiro índice.

*/
//how to declare
        
        let array = 
        ['string', 1, true, false, /*[array1], [array2], [array3], [array4]*/];
        console.log(array[0]); //deixei uma parte do array comentada, pois os arrays de 1 até 4 não foram definidos

// PARTE 2 - manipulando arrays

// forEach (é uma função)

    array.forEach(function(item, index){console.log(item, index)});
    // o parâmetro item identifica os itens colocados dentro do array
    // o parâmetro index identifica a posição desses mesmos items

//push
    array.push('push add novo item no array');
    console.log(array);

//pop
    array.pop(); //remove último item do array
    console.log(array);

//shift
    array.shift(); // remove item do ínicio do array
    console.log(array);

// unshift
    array.unshift('unshift add novo item no array');
    console.log(array);

//indexOf
    console.log(array.indexOf(true));

//splice
    array.splice(0,2);
    console.log(array);

//slice
    let novoArray = array.slice(0,1);
    console.log(array);


/* Obejtos
- assim como o array, um objeto pode guardar um objeto interno

*/
// criando um objeto
    let myObject = {
        string:"string",
        number: 1,
        boolean: true,
        array: ["array"],
        objetoInterno: {objetoInterno: "objeto interno"}
    }
    console.log(myObject);
    //para acessar apenas uma dessas propriedades específicas, use:
    console.log(myObject.string); //acrescente "." com nome do propriedade desejada

//desestrutrando um objeto
    var number1 = myObject.number;
    console.log(number1);

    //outra forma de fazer isso
    var {string, boolean, objetoInterno } = myObject;
    console.log(string, boolean, objetoInterno);