document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const videoPlayer = document.createElement('div');
    const videoElement = document.createElement('video');
    const closeBtn = document.createElement('button');

    videoPlayer.classList.add('video-player', 'hidden');
    videoElement.setAttribute('controls', 'true');
    videoElement.id = 'video-element';
    closeBtn.textContent = 'Fechar';
    closeBtn.classList.add('close-btn');

    videoPlayer.appendChild(videoElement);
    videoPlayer.appendChild(closeBtn);
    document.body.appendChild(videoPlayer);

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", () => {
            const videoSrc = thumbnail.getAttribute("data-video");
            videoElement.src = `assets/images/${videoSrc}`;
            videoPlayer.classList.remove("hidden");
            videoElement.play();
        });
    });

    closeBtn.addEventListener("click", () => {
        videoPlayer.classList.add("hidden");
        videoElement.pause();
        videoElement.src = "";
    });
});
