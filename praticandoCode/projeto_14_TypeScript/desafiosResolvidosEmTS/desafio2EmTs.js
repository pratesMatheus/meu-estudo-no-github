/*
// Como podemos melhorar o esse código usando TS?

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/
//SOLUÇÃO:
var Job;
(function (Job) {
    Job[Job["Atriz"] = 0] = "Atriz";
    Job[Job["Padeiro"] = 1] = "Padeiro";
})(Job || (Job = {}));
var person1 = {
    name: 'maria',
    age: 29,
    profession: Job.Atriz
};
var pessoa2 = {
    name: 'roberto',
    age: 19,
    profession: Job.Padeiro
};
var pessoa3 = {
    name: 'laura',
    age: 32,
    profession: Job.Atriz
};
var pessoa4 = {
    name: "carlos",
    age: 19,
    profession: Job.Padeiro
};
