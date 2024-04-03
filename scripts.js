let nome = 'João Paulo da Silva';
let telefone = '(11) 98877-6655';
let convenio = false;
let convenioTexto
let profissao = 'professor';
let salario = 39460.09
let resultado1 = document.getElementById("resultado1");
let resultado2 = document.getElementById("resultado2");


function verificaConvenio() {
    if (convenio) {
        convenioTexto = 'possui convênio médico'
    } else {
        convenioTexto = 'não possui convênio médico'
    };
};

verificaConvenio()


console.log('-----------------------------');
console.log("RESULTADO 1");
console.log(`O colaborador ${nome}, ${profissao}, ${convenioTexto}. Seu telefone é ${telefone}, e seu salário atual é R$ ${salario}.`);


let numA = 3;
let numB = 5;


console.log('-----------------------------');
console.log("RESULTADO 2");
console.log(`As variáveis são: A = ${numA} , B= ${numB}`);
console.log('🪄✨');

let temp = numA;

numA = numB

numB = temp

console.log(`Agora as variáveis estão assim: A = ${numA} , B= ${numB}`);

console.log('-----------------------------');


console.log("---------------------------------");
console.log("OPERAÇÕES ARITMÉTICAS");
console.log("---------------------------------");

let inteiro = 7
let decimal = 3.5

let adicao = inteiro + decimal
console.log(adicao);

let subtracao = inteiro - decimal
console.log(subtracao);

let potenciacao = (adicao - .5) ** 2
console.log(potenciacao);

let expressao1 = inteiro - 4 / 2 / 2
console.log(expressao1);

let expressao2 = (inteiro - 4) / 2
console.log(expressao2);

let expressao3 = 2 + subtracao * 2
console.log(expressao3);

let expressao4 = (2 + subtracao) * 2
console.log(expressao4);

let modulo1 = potenciacao % 2
console.log(modulo1);

let modulo2 = (inteiro - 1) % 2
console.log(modulo2);


console.log("---------------------------------");
