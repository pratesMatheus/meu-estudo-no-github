//console.log('TypeScript');

/*function soma(a: number, b: number){
return a + b;
}*/
//soma ('a', 'b'); //vai indicar erro, pois 'a' e 'b' são do tipo string, e não number como os parâmetros na função soma acima


/*além de poder tipar as variáveis e parâmetros, temos acesso a: types e interfaces
    
    interface IAnimal{
        nome: string;
        tipo: 'terrestre' | 'aquatico';
        domestico: boolean; 
    }
    interface ICanino extends IAnimal {
        porte: 'pequeno' | 'medio' | 'grande'
    }

    interface IFelino extends IAnimal{
        visaoNoturna: boolean;
    }

    type IDomestico = IFelino |  ICanino ;
    
    const animal: IDomestico = {
        domestico: true,
        nome: 'cachorro',
        porte: 'medio',
        tipo: 'terrestre',
        // visaoNoturna: false, //vai dar erro
    }
*/
/*Tratando a tag input do HTML com .ts*/
/*
    const input = document.getElementById('input') as HTMLInputElement; //(as HTMLInputElement) deve ser usado ao final pois se colocado antes vai apresentar um erro, pois o elemento input ainda não sido definido
    input.addEventListener('input', (event)=> {
        //console.log('Digitei') //vai mostrar quantas vezes algo foi digitado no input
        const i = event.currentTarget as HTMLInputElement;
        console.log(i.value)
    });
*/

/*Generic Types*/
/*
    function AdicionaApendiceALista<T>(array: T[], valor: T){
        return array.map(() => valor);
    }
    AdicionaApendiceALista([1,2,3], 1); //o tipo aqui será inferido como number
    AdicionaApendiceALista(['a','b','c'], 'd'); //e aqui, como string
    AdicionaApendiceALista([1,2,3], 'd'); //erro, pois todos os tipos inferidos devem ser iguais
*/

/*Condicionais a partir de parâmetros */
    /*interface IUsuario {
        id: string;
        email: string;
    }

    interface IAdmin  extends IUsuario{
        cargo: 'gerente' | 'coordenador' | 'supervisor';
    }

    function redirecione(usuario: IUsuario | IAdmin){
        if('cargo' in usuario){
            //redireciona para área de administraco
        }
        // redirecionar para área do usuario
    
    //usamos o "in" para saber se o parâmetros possui algum dos dados acima
    }*/
    
/*Caracter "?" para variáveis opcionais*/
    /*interface IUsuario {
        id: string;
        email: string;
        cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
    }

    function redirecione(usuario: IUsuario){
        if(usuario.cargo){
            //redirecionar(usuario.cargo)
        }
        //redirecionar para área do usuário
    }
    */

/*readonly e private*/
    /*interface Cachorro{
        nome: string;
        idade: number;
        parquefavorito?: string;
    }
    type cachorroSomenteLeitura = {
        +readonly [K in keyof Cachorro]-?: Cachorro[K];
    }

    class meuCachorro implements Cachorro {
        idade;
        nome;

        constructor(nome, idade){
            this.idade = idade;
            this.nome = nome
        }
    }

    const cao = new meuCachorro('Apolo', 14);
    cao.idade = 8;

    console.log(cao)
    */


//Importando bibliotecas com .ts
    /*
    import $ from 'jquery';
    $.fn.extend({
        novaFuncao() {
            console.log('Chamou nova função');        
        }
    });

    $('body').novaFuncao(); //Sem arq. tsconfig.json vai continuar dando erro (ou usar o comando: npm i --save-dev @types/jquery)
*/
    export const numero = 2;
    

/*Usando Omit*/
/*
    interface IPessoa {
        nome: string;
        idade: number;
        nacionalidade: string;
    }

    interface IBrasileiro extends Omit<IPessoa, 'nacionalidade'>{

    }

    const brasileiro: IBrasileiro = {

    }
*/