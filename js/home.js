document.addEventListener("DOMContentLoaded", () => {
    const fotos = document.querySelector(".slider .fotos");
    const prevButton = document.querySelector(".slider .prev");
    const nextButton = document.querySelector(".slider .next");
console.log("aq")
    const imagens = [
        "./img/carniceriafoto2.jpg",
        "./img/carniceriafoto3.jpg",
        "./img/carniceriafoto4.jpg",
        "./img/carniceriafoto5.jpg",
        "./img/carniceriafoto6.jpg",
        "./img/carniceriafoto7.jpg",
        "./img/carniceriafoto8.jpg",
        "./img/carniceriafoto9.jpg"
    ];

    // Injetar imagens no slider
    imagens.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `Foto ${index + 2}`;
        fotos.appendChild(img);
    });

    const images = Array.from(fotos.querySelectorAll("img"));
    let imagesPerPage = window.innerWidth <= 768 ? 2 : 7;
    let currentIndex = 0;

    function updateSlider() {
        const imageWidth = images[0].offsetWidth + 10;
        const offset = currentIndex * imageWidth;
        fotos.style.transform = `translateX(-${offset}px)`;
    }

    function goNext() {
        // Aumentar o índice para a próxima imagem
        currentIndex++;
        if (currentIndex > images.length - imagesPerPage) {
            currentIndex = 0; // Volta para a primeira imagem
        }
        updateSlider();
    }

    function goPrev() {
        // Diminuir o índice para a imagem anterior
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - imagesPerPage; // Volta para a última imagem
        }
        updateSlider();
    }

    nextButton.addEventListener("click", goNext);
    prevButton.addEventListener("click", goPrev);

    window.addEventListener("resize", () => {
        imagesPerPage = window.innerWidth <= 768 ? 2 : 4;
        updateSlider();
    });

    updateSlider();
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
