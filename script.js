function validateForm() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Campo nome 
    if (nome.trim() == '') {
        alert('Por favor, preencha o campo Nome.');
        return false;
    }

    // Campo email
    if (email.trim() == '') {
        alert('Por favor, preencha o campo Email.');
        return false;
    } else if (!emailRegex.test(email)) {
        alert('Por favor, insira um endereço de email válido.');
        return false;
    }

    // Campo mensagem
    if (mensagem.trim() == '') {
        alert('Por favor, preencha o campo Mensagem.');
        return false;
    }

    // Todos os campos corretos
    return true;
}