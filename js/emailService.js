emailjs.init('coGcNUdX9akAuGnya');  // Chave pública

// Função para abrir o popup de desconto
document.getElementById("discountBubble").addEventListener("click", function() {
    document.getElementById("roletaPopup").style.display = "block";  // Exibe o popup
});

// Fechar o popup quando o botão de fechar for clicado
document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("roletaPopup").style.display = "none";  // Esconde o popup
});

// Função para verificar e iniciar a roleta
document.getElementById('submitEmail').addEventListener('click', function() {
    var email = document.getElementById('userEmail').value;

    // Verifica se o campo de e-mail não está vazio
    if (!email) {
        alert("Por favor, insira seu e-mail para jogar!");
        return;
    }

    // Verifica se o usuário já jogou este mês
    const currentDate = new Date().toLocaleDateString();
    const lastPlayedDate = localStorage.getItem(email);

    if (lastPlayedDate === currentDate) {
        // Caso já tenha jogado, mostra a mensagem de aviso
        document.getElementById('emailStatus').style.display = 'block';
        return;
    }

    // Caso o usuário não tenha jogado, esconde o formulário e mostra a roleta
    document.querySelector(".email-container").style.display = 'none';
    document.querySelector(".roleta").style.display = 'flex';
    document.getElementById("spinButton").style.display = 'block';
});


