
const stars = document.querySelectorAll('.star');
const ratingMessage = document.getElementById('ratingmsg');


stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value');
        updateStars(rating);
        updateMessage(rating);
    });
});


function updateStars(rating) {
    stars.forEach(star => {
        const starValue = star.getAttribute('data-value');
        if (starValue <= rating) {
            star.classList.add('filled'); 
        } else {
            star.classList.remove('filled'); 
        }
    });
}


function updateMessage(rating) {
    ratingMessage.textContent = `${rating} out of 5 stars.`;
}

document.addEventListener("DOMContentLoaded", function () {
    const welcomeText = document.getElementById("welcome-text");
    const bio = document.getElementById("bio");


    const menuItems = document.querySelectorAll("li");



    menuItems.forEach(item => {
        const link = item.querySelector("a");
        if (link && window.location.href.includes(link.getAttribute("href"))) {
            profileName = item.textContent.trim(); 
        }
    });


    const text = `Welcome to ${profileName}'s Profile!`;
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            welcomeText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        } else {
            setTimeout(() => {
                bio.classList.add("visible");
            }, 500);
        }
    }

    typeWriter();
});
