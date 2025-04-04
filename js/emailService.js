emailjs.init('coGcNUdX9akAuGnya');  


document.getElementById("discountBubble").addEventListener("click", function() {
    document.getElementById("roletaPopup").style.display = "block";  
});


document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("roletaPopup").style.display = "none";  
});


document.getElementById('submitEmail').addEventListener('click', function() {
    var email = document.getElementById('userEmail').value;


    if (!email) {
        alert("Por favor, inserte un correo electronico");
        return;
    }

    const currentDate = new Date().toLocaleDateString();
    const lastPlayedDate = localStorage.getItem(email);

    if (lastPlayedDate === currentDate) {
  
        document.getElementById('emailStatus').style.display = 'block';
        return;
    }


    document.querySelector(".email-container").style.display = 'none';
    document.querySelector(".roleta").style.display = 'flex';
    document.getElementById("spinButton").style.display = 'block';
});


