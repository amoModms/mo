function createHeart() {
    const heartsContainer = document.querySelector('.hearts');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

document.addEventListener("DOMContentLoaded", function() {
    const bouncyText = document.querySelector('.bouncy-text');
    bouncyText.innerHTML = bouncyText.textContent.split('').map((char, i) => 
        `<span style="--i:${i}">${char}</span>`).join('');
});
