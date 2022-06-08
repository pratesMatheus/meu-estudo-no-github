function calculadora() {
    const operacao = Number(prompt('Escolha uma operação: \n 1 - Soma (+) \n 2- Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão (/) \n 5 - Resto da divisão (%) \n 6 - Potenciação (**)'));


    //vamos verfificar se a operação digitada pelo usuário existe (de 1 até 6)
    if (!operacao || operacao >= 7){
        window.alert('Erro - digito inválido');
        calculadora();
    } else {
        //declarando variáveis:
        /*por padrão o prompt apenas reconhece o tipo String, 
        com o método Number(), é alterada para receber tipos numéricos*/
        let n1 = Number(prompt('insira o primeiro valor'));
        let n2 = Number(prompt('insira o segundo valor'));
        let resultado;

        //verificar se variáveis são válidas também
        if (!n1 || !n2){
            alert('Erro - parâmetros inválidos');
            calculadora();
        } else{
            //função de soma
            function soma(){
                resultado = n1 + n2;
                window.alert(`${n1} + ${n2} é igual a: ${resultado}`);
                novaOperacao();
            }
            //função de subtração
            function subtracao(){
                resultado = n1 - n2;
                window.alert(`${n1} - ${n2} é igual a: ${resultado}`);
                novaOperacao();
            }
            //função de multiplicação
            function multiplicacao(){
                resultado = n1 * n2;
                window.alert(`${n1} vezes ${n2} é igual a: ${resultado}`);
                novaOperacao();
            }
            //função de divisão
            function divisaoReal(){
                resultado = n1 / n2;
                window.alert(`${n1} dividido por ${n2} é igual a: ${resultado}`);
                novaOperacao();
            }
            //função de resto da divisão
            function restoDivisao(){
                resultado = n1 % n2;
                window.alert(`o resto da divisão de ${n1} por ${n2} é igual a: ${resultado}`);
                novaOperacao();
            }
            function potenciacao(){
                resultado = n1 ** n2;
                window.alert(`${n1} elevado a ${n2} é igual a: ${resultado}`);
                novaOperacao();
            }

            //
            function novaOperacao(){
                let opcao = prompt('deseja fazer nova operação? \n 1 - Sim \n 2 - Não');

                if (opcao == 1){
                    calculadora();
                } else if (opcao == 2){
                    alert('Até mais e obrigado');
                } else {
                    alert('opção inválida');
                    novaOperacao();
                }
            }
        }
        /* podemos substituir o "if" pelo "switch/case"
        if (operacao == 1){
            soma();
        } else if (operacao == 2){
            subtracao();
        } else if (operacao == 3){
            multiplicacao();
        } else if (operacao  == 4){
            divisaoReal();
        } else if (operacao == 5){
            restoDivisao();
        } else if (operacao == 6){
            potenciacao();
        }*/

        switch (operacao){
            case 1: 
                soma();
                break;
            case 2: 
                subtracao();
                break;
            case 3: 
                multiplicacao();
                break;
            case 4: 
                divisaoReal();
                break;
            case 5:
                restoDivisao();
                break;
            case 6:
                potenciacao();
                break;
        }
    }
}
calculadora();