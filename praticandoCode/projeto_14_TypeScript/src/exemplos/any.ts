//any é um tipo que pode receber qualquer valor
let valorAny: any;

valorAny = 'olá ';
valorAny = 3;
valorAny = -1;
valorAny = true;

let valorString: string = 'teste';
valorString = valorAny;
let valorString2: string = 'textão';
//valorString = 0

function somarStrings(string1: string, string2: string){
    console.log(string1 + string2);
}

somarStrings(valorString, valorString2);
somarStrings('Hello, ', 'World');

//o tipo "any" representa o lado negro do TS, é até considerado uma má prática
