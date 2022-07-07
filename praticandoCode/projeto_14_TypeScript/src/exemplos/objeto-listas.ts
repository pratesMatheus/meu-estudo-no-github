//Parte1 - criando objetos definidos por inferência
    const Pessoa = {
        nome: 'Mariana',
        idade: 28,
        profissao: 'desenvolvedora'
    }

    //Pessoa.idade = '24'; //Vai dar erro por ser do tipo string, quando deveria ser number
    Pessoa.idade = 24;
//part1.2 - informando o que esses objetos têm
    const andre: {nome: string, idade: number, profissao: string} = {
        nome: 'Andre',
        idade: 25,
        profissao: 'pintor'
    };
    
    const paula: {nome: string, idade: number, profissao: string} = {
        nome: 'Paula',
        idade: 26,
        profissao: 'Desenvolvedora'
    };
//Parte2 - interfaces são bem mais práticas 
interface Pessoa{
    nome: string,
    idade: number,
    profissao?: Profissao,
} 

enum Profissao{
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol,
    //dentro do enum podemos colocar várias constantes
}

interface Estudade extends Pessoa {
    materias: string[],

}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 26,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudade = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática aplicada', 'programação']
}

const monica: Estudade = {
    nome: 'Monica',
    idade: 21,
    materias: ['Matemática aplicada', 'programação']
}

function listar(lista: string[]){
    for(const item of lista){
        console.log('- ', item)
    }
}


listar(monica.materias);