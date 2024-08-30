document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Captura os valores dos campos
        var nomeCompleto = document.getElementById('fullName').value;
        var dataNascimento = document.getElementById('dob').value;
        var celular = document.getElementById('phone').value;
        var email = document.getElementById('email').value;
        var teamName = document.getElementById('teamName').value;
        var teacherName = document.getElementById('teacherName').value;
        var teacherPhone = document.getElementById('teacherPhone').value;

        // Envia para a API
        fetch('https://sua-api-url.com/endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nomeCompleto: nomeCompleto,
                dataNascimento: dataNascimento,
                celular: celular,
                email: email,
                teamName: teamName,
                teacherName: teacherName,
                teacherPhone: teacherPhone
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Sucesso:', data);
            // Aqui você pode manipular a resposta da API, como mostrar uma mensagem de sucesso
        })
        .catch(error => {
            console.error('Erro:', error);
            // Aqui você pode mostrar uma mensagem de erro para o usuário
        });
    });
});
