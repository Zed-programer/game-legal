const botao = document.querySelector("button");
const palpite = document.getElementById("palpite");
const resposta = document.getElementById("resposta");
const boneco = document.getElementById("boneco");
const aviso = document.createElement("span");
botao.after(aviso);

let numeroSecreto = Math.floor(Math.random() * 11);

botao.addEventListener("click", function() {
    if (palpite.value === "") {
        aviso.textContent = "⚠️ Digite um número primeiro!";
        boneco.src = "irritada.png";
        return;
    }

    aviso.textContent = "";
    const chute = Number(palpite.value);

    if (chute < numeroSecreto) {
        resposta.textContent = "📈 O número é MAIOR!";
        boneco.src = "errado.png";
    } else if (chute > numeroSecreto) {
        resposta.textContent = "📉 O número é MENOR!";
        boneco.src = "errado.png";
    } else {
        resposta.textContent = "🎉 ACERTOU! Era o " + numeroSecreto + "!";
        boneco.src = "feliz.png";
        numeroSecreto = Math.floor(Math.random() * 11);
    }

    palpite.value = "";
});