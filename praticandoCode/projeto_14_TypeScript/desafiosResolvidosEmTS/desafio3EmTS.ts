/*
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');

campoSaldo.innerHTML = 0

function somarAoSaldo(soma) {
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */


//SOLUÇÃO:

export {}

let btnUpdate = document.getElementById('atualizar-saldo');
let btnClean = document.getElementById('limpar-saldo')!;
let sum = document.getElementById('soma')! as HTMLInputElement;
let balance = document.getElementById('campo-saldo');
let totalBalance = 0

function clearSum() {
    sum.value = "";
}

function addToBalance(sum: number) {
    if (balance) {
        totalBalance += sum
        balance.innerHTML = totalBalance.toString();
        clearSum();
    }
}

function clearBalance() {
    if (balance) {
        totalBalance = 0;
        balance.innerHTML = totalBalance.toString();
    }
}

if (btnUpdate) {
    btnUpdate.addEventListener('click', () => {
        addToBalance(Number(sum.value)); 
    });
}

btnClean.addEventListener('click', () => {
    clearBalance();
});

clearBalance()