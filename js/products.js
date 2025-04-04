document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slider = document.querySelector('.slider');
    
    const produtos = [
        { nome: "Producto 1", preco: "$15.99", img: "../img/carniceriafoto2.jpg" },
        { nome: "Producto 2", preco: "$16.99", img: "../img/carniceriafoto2.jpg" },
        { nome: "Producto 3", preco: "$17.99", img: "../img/carniceriafoto2.jpg" },
        { nome: "Producto 4", preco: "$18.99", img: "../img/carniceriafoto2.jpg" },
        { nome: "Producto 5", preco: "$19.99", img: "../img/carniceriafoto2.jpg" },
        { nome: "Producto 6", preco: "$20.99", img: "../img/carniceriafoto2.jpg" },
        { nome: "Producto 7", preco: "$21.99", img: "../img/carniceriafoto2.jpg" },
        { nome: "Producto 8", preco: "$22.99", img: "../img/carniceriafoto2.jpg" },
        { nome: "Producto 9", preco: "$23.99", img: "../img/carniceriafoto2.jpg" },
        { nome: "Producto 10", preco: "$24.99", img: "../img/carniceriafoto2.jpg" },
        { nome: "Producto 11", preco: "$25.99", img: "../img/carniceriafoto2.jpg" },
        { nome: "Producto 12", preco: "$26.99", img: "../img/carniceriafoto2.jpg" },
        { nome: "Producto 13", preco: "$27.99", img: "../img/carniceriafoto2.jpg" },
        { nome: "Producto 14", preco: "$28.99", img: "../img/carniceriafoto2.jpg" },
        { nome: "Producto 15", preco: "$29.99", img: "../img/carniceriafoto2.jpg" },
        { nome: "Producto 16", preco: "$30.99", img: "../img/carniceriafoto2.jpg" },
    ];

    let currentIndex = 0;
    const itemsPerPage = 10;  // 10 produtos por vez
    const totalItems = produtos.length;

    // Função para gerar os produtos na tela
    function renderProducts() {
        slider.innerHTML = ''; // Limpa o slider
    
        const startIndex = currentIndex * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const visibleProducts = produtos.slice(startIndex, endIndex); // Pegando os produtos da página atual
    
        visibleProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('producto-item');
    
            productDiv.innerHTML = `
                <img src="${product.img}" alt="${product.nome}">
                <div class="product-details">
                    <p class="name">${product.nome}</p>
                    <p class="price">Precio: ${product.preco}</p>
                </div>
            `;
    
            slider.appendChild(productDiv);
        });
    }
    

    // Função para mover o slider
    function moveSlider() {
        renderProducts();  // Atualiza os produtos visíveis
    }

    // Lógica do botão "next"
    nextButton.addEventListener('click', () => {
        if (currentIndex < Math.ceil(totalItems / itemsPerPage) - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Voltar ao início
        }
        moveSlider();
    });

    // Lógica do botão "prev"
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = Math.ceil(totalItems / itemsPerPage) - 1; // Vai para o final
        }
        moveSlider();
    });

    // Inicializa a renderização
    moveSlider();
});
