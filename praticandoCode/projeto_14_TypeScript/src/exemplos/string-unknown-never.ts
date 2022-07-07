let anyEstaDeVolta: any;


anyEstaDeVolta = -1; 
anyEstaDeVolta = 3; 
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let stringTest: string = 'verificar';
stringTest = anyEstaDeVolta;

let unknownValor: unknown;

unknownValor  = 3;
unknownValor = 'ops';
unknownValor = true;

let stringTest2: string = 'Agora vai';

//stringTest2 = unknownValor;

//unknown é diferente do any, é até considerado uma boa prática. 
//Pode-se pegar um objeto desconhecido, e em quanto trabalha com esse objeto, 
//se torna necessário usar verificações para alocar seu valor corretamente nas variáveis
//

if(typeof unknownValor === 'string'){
    stringTest2 = unknownValor;
}


//o tipo never se refere a um código que nunca foi finalizado, é raro de ser usado
function jogaErro(erro: string, codigo: number): never {
    throw{error: erro, code: codigo};
}

jogaErro('deu erro: ', 500);