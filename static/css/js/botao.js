document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener("submit", function (event) {
        event.preventDefault();
        enviarDados();
    });
});

function enviarDados() {
    var mensagem = document.getElementById("mensagem").value;
    var nome = document.getElementById("nome").value;
    var turma = document.getElementById("turma").value;
    var curso = document.getElementById("curso").value;
    var foto = document.getElementById("foto").value;
    var homem = document.getElementById("homem").checked;
    var mulher = document.getElementById("mulher").checked;

    var data = {
        mensagem: mensagem,
        nome: nome,
        turma: turma,
        curso: curso,
        foto: foto,
    };

    fetch('/cadastrar_lanche/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')  // Certifique-se de obter o token CSRF corretamente
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert("Produto cadastrado com sucesso!");
        // Limpar os campos ou redirecionar para outra página, se necessário
    })
    .catch(error => {
        console.error('Erro ao cadastrar produto:', error);
    });
}

// Função auxiliar para obter o token CSRF do cookie
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
