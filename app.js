const form = document.getElementById("userForm");

function testResults(form) {
    var inputValue = form.userName.value;
    alert("Cadastro realizado! Seu nome é: " + inputValue);
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const userName = document.getElementById("userName").value;

        // Adiciona o nome do usuário ao Local Storage
        let users = [];
        if (localStorage.getItem("users")) {
            users = JSON.parse(localStorage.getItem("users"));
        }
        users.push(userName);
        localStorage.setItem("users", JSON.stringify(users));

        window.location.href = "index.html";
    });
}

