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

console.log("RESULTADO 1");
console.log(`O colaborador ${nome}, ${profissao}, ${convenioTexto}. Seu telefone é ${telefone}, e seu salário atual é R$ ${salario}.`);


let numA = 3;
let numB = 5;


console.log('');
console.log("RESULTADO 2");
console.log(`As variáveis são: A = ${numA} , B= ${numB}`)
console.log('🪄✨')

let temp = numA;

numA = numB

numB = temp

console.log(`Agora as variáveis estão assim: A = ${numA} , B= ${numB}`);

