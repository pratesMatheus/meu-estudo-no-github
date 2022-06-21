/*creating a function to receive an array and a number;
this mini project is for learning more about the try/catch
and play with my new knowledge;
*/
function validateArray(arr, num) {
    try {
        //let's validate if our array and our number exist as parameters
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

        //validating if our array is object type
        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");
        
        //validating if our array is number type
        if(typeof arr !== 'number') throw new TypeError("Array precisa ser do tipo number");
        
        //validating if our array is diferent of the sent number
        if(arr.length !== num) throw new RangeError("Tamanho errado!");
        
        //no errors
        return arr + ", Its okay and its ok (no erros here)" //it'll return array if it is valid
    } catch (e) {
        if(e instanceof ReferenceError){
            console.log("Este é um ReferenceError!");
            console.log(e.message);
        } else if(e instanceof TypeError){
            console.log("Este é um TypeError!");
            console.log(e.message);
        } else if(e instanceof RangeError){
            console.log("Este é um RangeError!");
            console.log(e.message);
        } else {
            console.log("Ocorreu um tipo de erro não esperado: " + e);
        }

    }
}

console.log(validateArray()); // Enive os parâmetros (undefined)
console.log(validateArray(8,8)); /*Este é um TypeError  Array precisa ser do tipo object*/
console.log(validateArray([], 'a')); /*Este é um TypeError  Array precisa ser do tipo number*/
console.log(validateArray([], 5)); /*Este é um RangeError!  Tamanho errado!*/
console.log(validateArray([1, 2, 3, 4, 5], 5)); // [1, 2, 3, 4, 5] it's okay and it's ok (no error here)
