
let idade = document.getElementById("idade");

function verificarIdade() {
    
let resultado = document.getElementById("resultado");

    console.log("clicou")
    if (idade.value < 16) {
        resultado.innerText = "Ei, você é muito novo para votar!"
    } else if (idade.value < 18) {
        resultado.innerText = "Você pode votar se quiser. Seja consciente!";
    } else if (idade.value < 70) {
        resultado.innerText = "Você é obrigado a votar!"
    } else {
        resultado.innerText = "Você pode votar se quiser, mas não é obrigado."
    };
};