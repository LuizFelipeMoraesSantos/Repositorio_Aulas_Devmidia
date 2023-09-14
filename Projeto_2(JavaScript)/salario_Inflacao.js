import dados from 'readline-sync';

let ano_salario = "";
console.log('Escolha uma das opções');

console.log("1 - Lista do histórico do salário mínimo de 2010 até 2020.");
console.log("2 - Lista do histórico do IPCA(inflação) de 2010 até 2020");
console.log("3 - Comparar e listar a porcentagem de crescimento salarial com a inflação(IPCA)");

let escolha = dados.question("Escolha: ");

switch (Number(escolha)) {
    case 1:
        let array_salario = [
            { ano: "2010", salario: "510.00" },
            { ano: "2011", salario: "545.00" },
            { ano: "2012", salario: "622.00" },
            { ano: "2013", salario: "678.00" },
            { ano: "2014", salario: "724.00" },
            { ano: "2015", salario: "788.00" },
            { ano: "2016", salario: "880.00" },
            { ano: "2017", salario: "937.00" },
            { ano: "2018", salario: "954.00" },
            { ano: "2019", salario: "998.00" },
            { ano: "2020", salario: "1045.00" }
        ];
        let contador = 0;
        while (contador < array_salario.length) {
            let lista = array_salario[contador];
            contador++;

            console.log("Ano: ".padEnd(25, '.') + lista.ano);
            console.log("Salário mínimo: ".padEnd(25, '.') + 'R$ ' + lista.salario.replace(".", ",") + "\n");
        }
        break; // Adicione o break aqui

    case 2:
        let array_ipca = [
            { ano: "2010", ipca: "5.91" },
            { ano: "2011", ipca: "6.50" },
            { ano: "2012", ipca: "5.84" },
            { ano: "2013", ipca: "5.91" },
            { ano: "2014", ipca: "6.41" },
            { ano: "2015", ipca: "10.67" },
            { ano: "2016", ipca: "6.29" },
            { ano: "2017", ipca: "2.95" },
            { ano: "2018", ipca: "3.75" },
            { ano: "2019", ipca: "4.31" },
            { ano: "2020", ipca: "4.52" }
        ];
        let contagem = 0;
        while (contagem < array_ipca.length) {
            let lista_ipca = array_ipca[contagem];
            contagem++;

            console.log("Ano: ".padEnd(25, ".") + lista_ipca.ano);
            console.log("IPCA: ".padEnd(25, '.') + lista_ipca.ipca.replace(".", ",") + "%\n");
        }
        break; // Adicione o break aqui

    case 3:
        let lista_ipca3 = [
            { ano: 2010, ipca_final: 5.91 },
            { ano: 2011, ipca_final: 6.50 },
            { ano: 2012, ipca_final: 5.84 },
            { ano: 2013, ipca_final: 5.91 },
            { ano: 2014, ipca_final: 6.41 },
            { ano: 2015, ipca_final: 10.57 },
            { ano: 2016, ipca_final: 6.29 },
            { ano: 2017, ipca_final: 2.95 },
            { ano: 2018, ipca_final: 3.75 },
            { ano: 2019, ipca_final: 4.31 },
            { ano: 2020, ipca_final: 5.52 }
        ];
        let lista_salario3 = [
            { ano: 2010, salario_final: 510.00 },
            { ano: 2011, salario_final: 545.00 },
            { ano: 2012, salario_final: 622.00 },
            { ano: 2013, salario_final: 678.00 },
            { ano: 2014, salario_final: 724.00 },
            { ano: 2015, salario_final: 788.00 },
            { ano: 2016, salario_final: 880.00 },
            { ano: 2017, salario_final: 937.00 },
            { ano: 2018, salario_final: 954.00 },
            { ano: 2019, salario_final: 998.00 },
            { ano: 2020, salario_final: 1045.00 }
        ];
        for (let i = 1; i < lista_salario3.length; i++) {
            let anoAtual = lista_salario3[i].ano;
            let salarioAtual = lista_salario3[i].salario_final;
            let anoAnterior = lista_salario3[i - 1].ano;
            let salarioAnterior = lista_salario3[i - 1].salario_final;
            let aumentoDeSalario = ((salarioAtual - salarioAnterior) / salarioAnterior) * 100;


            
            console.log(`Ano: ${anoAtual}`);7
            console.log(`Salario: ${lista_salario3[i].salario_final.toFixed(2)}`)
            console.log(`Salario minimo: ${aumentoDeSalario.toFixed(2)}%`)
            console.log(`Inflação: ${lista_ipca3[i].ipca_final.toFixed(2)}%`)
        }
        break; 

    default:
        console.log("Opção inválida! ");
        break;
}