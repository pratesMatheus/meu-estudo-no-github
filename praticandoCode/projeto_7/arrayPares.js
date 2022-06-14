/*trocar todos os elementos pares e diferentes de zero de um array 
pelo número 0; e se o array for vazio, retorna -1*/

function substituiPares(myArray){
    if(!myArray) return -1;
    if(!myArray.length) return -1;

    for(let i = 0; i <myArray.length; i++){
        if(myArray[i] === 0){
            console.log("Você já é zero!");
        } else if (myArray[i] %2 === 0){
            console.log(`substitindo ${myArray[i]} por 0...`)
            myArray[i] = 0;
        }
    }
    return myArray;
}

let someArray = [1,3,5,4,6,77,88,80,33,44,23,20,90];
console.log(substituiPares(someArray));

//mas, se tentar fazer o mesmo, com o array vazio ou null, ou false, ou undefined...:
console.log(substituiPares([])); //retorna -1;