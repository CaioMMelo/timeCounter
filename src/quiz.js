const perguntas = [
  {
    pergunta: "Qual foi a data do nosso primeiro beijo? 💋",
    respostas: ["10 de junho", "02 de junho", "12 de julho"],
    correta: 1
  },
  {
    pergunta: "Qual comida nós mais comemos juntos? 🍕",
    respostas: ["Hambúrguer", "Pizza", "Sushi"],
    correta: [0,1,2]
  },
  {
    pergunta: "Quem disse 'eu te amo' primeiro? 💖",
    respostas: ["Caio", "Samara", "Foi ao mesmo tempo!"],
    correta: 0
  },

  {
    pergunta: "Quando te chamei para ir em um japa pela primeira vez formalmente? 🍣",
    respostas: ["11 de abril", "25 de maio", "15 de maio"],
    correta: 1
  },
  {
    pergunta: "Qual meu apelido que voocê me deu? 🎬",
    respostas: ["Meu principe encantado", "Melhor jogador de Valorant do mundo", "Calouro abusado"],
    correta: 2
  },
  {
    pergunta: "Qual foi a primeira vez que nos vimos? 🌳",
    respostas: ["Fui te levar suborno(chocolate)", "Belissima no NumaUva ", "Hatch"],
    correta: 0
  }
];

let perguntaAtual = 0;

const quizContainer = document.getElementById("quiz-container");
const nextBtn = document.getElementById("next-btn");
const resultado = document.getElementById("resultado");

function carregarPergunta() {
  resultado.classList.add("hidden");
  quizContainer.innerHTML = "";

  const p = perguntas[perguntaAtual];
  const perguntaEl = document.createElement("div");
  perguntaEl.classList.add("question");
  perguntaEl.innerText = p.pergunta;
  quizContainer.appendChild(perguntaEl);

  const respostasEl = document.createElement("div");
  respostasEl.classList.add("answers");

  p.respostas.forEach((resposta, index) => {
    const btn = document.createElement("button");
    btn.classList.add("answer-btn");
    btn.innerText = resposta;
    btn.onclick = () => verificarResposta(index);
    respostasEl.appendChild(btn);
  });

  quizContainer.appendChild(respostasEl);
}

function verificarResposta(respostaSelecionada) {
  const correta = perguntas[perguntaAtual].correta;
  resultado.classList.remove("hidden");

  // Se correta for um array, aceita qualquer resposta
  if (Array.isArray(correta) ? correta.includes(respostaSelecionada) : respostaSelecionada === correta) {
    resultado.innerText = "Acertou! Você me conhece mesmo 💘";
  } else {
    resultado.innerText = "Errou... mas te amo do mesmo jeito 😘";
  }

  nextBtn.classList.remove("hidden");
}

nextBtn.onclick = () => {
  perguntaAtual++;
  if (perguntaAtual < perguntas.length) {
    carregarPergunta();
    nextBtn.classList.add("hidden");
  } else {
    quizContainer.innerHTML = "<h2>Fim do quiz! 💖</h2>";
    resultado.innerText = "Você arrasou!";
    nextBtn.classList.add("hidden");
  }
};

carregarPergunta();
