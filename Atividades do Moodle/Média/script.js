// Variáveis que guardarão os dados do aluno
let nomeAluno = "";
let notasAluno = [];

// Pega os elementos do HTML
const formulario = document.getElementById("formulario");
const camposNotas = document.querySelectorAll(".nota");
const campoMedia = document.getElementById("media");

// Função para calcular e mostrar a média
function calcularMedia() {
    let soma = 0;
    let quantidade = 0;

    camposNotas.forEach(function(campo) {
        if (campo.value !== "") {
            soma += Number(campo.value);
            quantidade++;
        }
    });

    if (quantidade > 0) {
        const media = soma / quantidade;
        campoMedia.textContent = "Média: " + media.toFixed(1);
    } else {
        campoMedia.textContent = "Média: -";
    }
}

// Calcula a média sempre que uma nota for alterada
camposNotas.forEach(function(campo) {
    campo.addEventListener("input", calcularMedia);
});

// Quando o formulário for enviado
formulario.addEventListener("submit", function(event) {

    // Impede o envio antes de validar
    event.preventDefault();

    // Recebe o nome digitado
    nomeAluno = document.getElementById("nome").value;

    // Limpa o vetor
    notasAluno = [];

    // Verifica se todas as notas foram preenchidas
    for (let i = 0; i < camposNotas.length; i++) {

        if (camposNotas[i].value === "") {
            alert("Preencha todas as notas antes de registrar.");
            return;
        }

        notasAluno.push(Number(camposNotas[i].value));
    }

    // Calcula a média das quatro notas
    let soma = 0;

    for (let i = 0; i < notasAluno.length; i++) {
        soma += notasAluno[i];
    }

    const media = soma / notasAluno.length;

    // Salva os dados para a página de resultado
    localStorage.setItem("nomeAluno", nomeAluno);
    localStorage.setItem("notasAluno", JSON.stringify(notasAluno));
    localStorage.setItem("mediaAluno", media);

    // Vai para a página de resultado
    window.location.href = "resultado.html";
});
