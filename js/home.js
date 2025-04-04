document.addEventListener('DOMContentLoaded', () => {
    const fotos = document.querySelector('.slider .fotos');
    const images = fotos.querySelectorAll('img');
    const prevButton = document.querySelector('.slider .prev');
    const nextButton = document.querySelector('.slider .next');

    const imagesPerPage = 4; // Número de imagens exibidas por vez
    const totalImages = images.length; // Número total de imagens
    let currentIndex = 0; // Índice do bloco atual de imagens
    function updateSlider() {
        // Calculando a translação com base no número de imagens por vez
        const offset = currentIndex * 100 ; // Porcentagem a ser movida
        fotos.style.transform = `translateX(-${offset}%)`;
    }

    // Evento para o botão "anterior"
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        }
        updateSlider();
    });

    // Evento para o botão "próximo"
    nextButton.addEventListener('click', () => {
        // Garante que o índice não ultrapasse a última sequência
        if (currentIndex < Math.floor(totalImages / imagesPerPage) - 1) {
            currentIndex++;
        }
        updateSlider();
    });
});
// Quando o usuário clicar na bolinha
document.getElementById("discountBubble").addEventListener("click", function() {
    document.getElementById("roletaPopup").style.display = "flex"; // Abre o popup da roleta
});

// Quando o usuário clicar no botão de fechar do popup
document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("roletaPopup").style.display = "none"; // Fecha o popup
});

// Lógica para girar a roleta
document.getElementById("spinButton").addEventListener("click", function() {
    const items = document.querySelectorAll(".roleta-item");

    // Escolhe aleatoriamente um item da roleta
    const randomIndex = Math.floor(Math.random() * items.length);
    const discount = items[randomIndex].getAttribute("data-discount");

    // Anima a roleta girando 10 voltas + a posição final (aleatória)
    const rotationDegrees = 360 * 10 + (randomIndex * 72);  // 10 voltas + a posição do item selecionado

    // Aplica a rotação na roleta
    document.querySelector(".roleta").style.transform = `rotate(${rotationDegrees}deg)`;

    // Desabilita a roleta para impedir que o usuário gire novamente
    document.querySelector(".roleta").style.pointerEvents = 'none';
    document.getElementById("spinButton").style.display = 'none'; // Esconde o botão de girar após girar

    // Esconde as opções da roleta
    setTimeout(function() {
        document.querySelector(".roleta").style.display = 'none'; // Esconde toda a roleta (opções)
        
        // Exibe o prêmio para o usuário após a roleta parar de girar
        document.getElementById("prize").textContent = `Has ganado ${discount}!`;
        document.getElementById("prize").style.display = 'block';
          // Pega o e-mail do usuário
    const userEmail = document.getElementById('userEmail').value;

    // Armazena a data de hoje após o jogo
    localStorage.setItem(userEmail, new Date().toLocaleDateString());

    // Envia o e-mail para a Carniceria Malú com o resultado
    const templateParamsToCarniceria = {
        email: "carniceriamalu@gmail.com",
        user_email: userEmail,
        premio_ganho: `Desconto de ${discount}`,
    };

    emailjs.send('service_pwvkv38', 'template_4i0ze1j', templateParamsToCarniceria)
        .then(function(response) {
            // console.log('E-mail enviado para Carniceria Malu com sucesso!', response);
        }, function(error) {
            console.log('Erro ao enviar o e-mail para Carniceria Malu:', error);
        });

    // Envia o e-mail para o usuário com o prêmio
    const templateParamsToUser = {
        email: userEmail,
        premio_ganho: ` ${discount}`,
        mensaje: "¡Felicitaciones! Presenta este correo en la Carnicería Malú para validar tu descuento. Recuerda que solo la primera girada es permitida y únicamente 1 vez al mes.",
    };

    emailjs.send('service_pwvkv38', 'template_d3ee6r8', templateParamsToUser)
        .then(function(response) {
            // console.log('E-mail enviado para o usuário com sucesso!', response);
        }, function(error) {
            console.log('Erro ao enviar o e-mail para o usuário:', error);
        });

    // Esconde a roleta e o botão de giro após o jogo
    document.querySelector(".roleta").style.display = 'none';
    document.getElementById("spinButton").style.display = 'none';
    }, 3000); // Tempo correspondente à duração da animação (3 segundos)
});
