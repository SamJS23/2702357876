
const stars = document.querySelectorAll('.star');
const ratingMessage = document.getElementById('rating-message');


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
    ratingMessage.textContent = `You rated the website ${rating} out of 5 stars.`;
}
