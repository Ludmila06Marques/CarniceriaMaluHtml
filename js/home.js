document.addEventListener('DOMContentLoaded', () => {
    const fotos = document.querySelector('.slider .fotos');
    const images = fotos.querySelectorAll('img');
    const prevButton = document.querySelector('.slider .prev');
    const nextButton = document.querySelector('.slider .next');

    const imagesPerPage = 4; 
    const totalImages = images.length; 
    let currentIndex = 0; 
    function updateSlider() {
      
        const offset = currentIndex * 100 ; 
        fotos.style.transform = `translateX(-${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        }
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
      
        if (currentIndex < Math.floor(totalImages / imagesPerPage) - 1) {
            currentIndex++;
        }
        updateSlider();
    });
});

document.getElementById("discountBubble").addEventListener("click", function() {
    document.getElementById("roletaPopup").style.display = "flex"; 
});


document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("roletaPopup").style.display = "none"; 
});


document.getElementById("spinButton").addEventListener("click", function() {
    const items = document.querySelectorAll(".roleta-item");

    const randomIndex = Math.floor(Math.random() * items.length);
    const discount = items[randomIndex].getAttribute("data-discount");


    const rotationDegrees = 360 * 10 + (randomIndex * 72);  


    document.querySelector(".roleta").style.transform = `rotate(${rotationDegrees}deg)`;


    document.querySelector(".roleta").style.pointerEvents = 'none';
    document.getElementById("spinButton").style.display = 'none';


    setTimeout(function() {
        document.querySelector(".roleta").style.display = 'none'; 
        

        document.getElementById("prize").textContent = `Has ganado ${discount}!`;
        document.getElementById("prize").style.display = 'block';
    const userEmail = document.getElementById('userEmail').value;


    localStorage.setItem(userEmail, new Date().toLocaleDateString());

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

 
    document.querySelector(".roleta").style.display = 'none';
    document.getElementById("spinButton").style.display = 'none';
    }, 3000); 
});
