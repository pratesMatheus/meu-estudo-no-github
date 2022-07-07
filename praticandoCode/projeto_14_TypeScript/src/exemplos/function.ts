function somarValoresNumericos0(numero1: number, numero2: number): number{
    return numero1 + numero2
    //return numero1 + numero2.toString();
}

console.log(somarValoresNumericos0(1, 300));


//void é usado quando a função não retorna nada
function printaValoresNumericos(numero1: number, numero2: number): void {
    console.log(numero1 + numero2);
}

function somarValoresNumericos1(numero1: number, numero2: number, callback: (numero: number)=> number): number{
    let resultado = numero1 + numero2
    return callback(resultado);
}

function aoQuadrado(numero: number): number{
    return numero * numero;
}

function dividirPorEleMesmo(numero: number): number {
    return numero/numero;
}

console.log(somarValoresNumericos1(1,3,aoQuadrado));
console.log(somarValoresNumericos1(1,3,dividirPorEleMesmo));
