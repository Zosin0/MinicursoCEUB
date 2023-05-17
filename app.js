function cadastraNome() {
    var nome_user = document.getElementById("userName"); // pega o input do nome do usuario
    var email_user = document.getElementById("email"); // pega o input do email do usuario

    var dados = JSON.parse(localStorage.getItem("dadosForm")); // cria uma variavel para pegar esses dados e converte em JSON

    if (dados == null) { // se não tiver nada nessa variavel ele vai configurar o local storage
        localStorage.setItem("dadosForm", "[]");
        dados = [];
    }

    var auxRegistro = { //pega o valor que ta relacionado ao input
        nome: nome_user.value,
        email: email_user.value
    }

    dados.push(auxRegistro); //adiciona esse valor aos dados

    localStorage.setItem("dadosForm", JSON.stringify(dados)); //adiciona os dois valores ao local storage
    alert("Nomes incluidos com sucesso");

    nome_user.value = "";
    email_user.value = "";
    window.location.href = "index.html";

}


const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel() {
    idx++

    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrossel, 1800);


