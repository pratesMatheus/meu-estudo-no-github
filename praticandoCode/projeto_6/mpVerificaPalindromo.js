//solução 1
function verificaPalindromo (string){
    //verificando a existência da string
    if (!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
    /*
    - o .split() vai separar os caracteres, e, por consequência, 
    a string em questão, vai retornar um array; 
    - o .reverse() vai inverter a posição de cada caractere da string;
    - o .join() vai unir esses caracteres invertidos no .reverse();
    - depois, vamos verificar se a string revertida é igual a string recebida;
    */
}
/*
    console.log(verificaPalindromo("ovo")); //retorna true;
    console.log(verificaPalindromo("gato")); //retorna false;

    let myVar1 = null; //pode inicializar com outros valores também, mas não vai funcionar
    console.log(verificaPalindromo(myVar1)); //retorna "string inexistente"
    */

//solução 2
function verificaPalindromo2(string){
    if (!string) return "string inexistente";

    for (let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length -1 -i]){
            return false;
        }
    }

    return true;
}

    console.log(verificaPalindromo2("abba"));