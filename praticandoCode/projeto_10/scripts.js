class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;    
    }

    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }
    //método sacar
    sacar(valor){
        if(valor > this._saldo){
            return "Operação negada";
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }
    //método depositar
    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
} //Fim da classe ContaBancaria


class ContaCorrente extends ContaBancaria{
    constructor (agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = "conta corrente";
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito (){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
} //Fim da classe ContaCorrente

class ContaPoupanca extends ContaBancaria{
    constructor (agencia, numero){
        super(agencia, numero);
        this.tipo = "conta poupança";
    }
} //Fim da classe ContaPoupanca

class ContaUniversitaria extends ContaBancaria{
    constructor (agencia, numero){
        super(agencia, numero);
        this.tipo = "conta universitária";
    }

    sacar(valor){
        if(valor > 500){
            return "Operação negada";
        }

        this._saldo = this._saldo - valor;
    }
} //Fim da classe ContaUniversitaria

/* para testar no terminal:
TESTE 1
    - const minhaConta = new ContaCorrente(1, 234, true)
    - minhaConta.saldo
    - minhaConta.depositar(1000)
    - minhaConta.sacar(500)
    - minhaConta.saldo
    - minhaConta.sacar(500) //retorna "Operação negada"

TESTE 2
    - const contaPoup = new ContaPoupanca(1,22)
    - const contaUni = new ContaUniversitaria(2,33)

    - contaUni.depositar(1000)
    - contaUni.sacar(550) // retorna "Operação negada"
*/