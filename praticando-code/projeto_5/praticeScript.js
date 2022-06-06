function comparaNum(num1, num2) {
    /*considerando que algém tente entrar com um valor ou nenhum, 
    vamos montar esse if simples abaixo:
    */
    if (!num1 || !num2) {
        return 'defina dois números';
    }
    //var num1 = Number();
    //var num2 = Number();
    const fstPhrase = createFstPhrase(num1, num2);
    const sndPhrase = createSndPhrase (num1, num2);

    return `${fstPhrase} ${sndPhrase}`;
}

function createFstPhrase(num1, num2) {
    let saoIguais = '';
    if(num1 !== num2){
        saoIguais = 'não são iguais';
    }
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
}

function createSndPhrase (num1, num2){
    const soma = num1 + num2;
    
    let resultado10 = 'Menor';
    let resultado20 = 'Menor';
    
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        resultado10 = 'Maior';
    }

    if(compara20){
        resultado20 = 'Maior';
    }

    return `
    Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`;
}

console.log(comparaNum(2,40));