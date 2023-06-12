// Seleciona todas as perguntas
const faqQuestions = document.querySelectorAll(".faq-question");

// Adiciona evento de clique a cada pergunta
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    // Encontra a resposta correspondente à pergunta clicada
    const answer = question.nextElementSibling;

    // Alterna a visibilidade da resposta
    answer.classList.toggle("show");
  });
});

const scrollButtons = document.querySelectorAll(".cta-button");

scrollButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const section = document.querySelector("#submit");
    section.scrollIntoView({ behavior: "smooth" });
  });
});
