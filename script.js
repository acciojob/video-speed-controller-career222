const video = document.querySelector(".viewer");
const playButton = document.querySelector(".player__button");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");
const volume = document.querySelector(".volume");
const playbackSpeed = document.querySelector(".playbackSpeed");
const skipButtons = document.querySelectorAll(".skip");

// Play / Pause
function togglePlay() {
    if (video.paused) {
        video.play();
        playButton.textContent = "❚ ❚";
    } else {
        video.pause();
        playButton.textContent = "►";
    }
}

playButton.addEventListener("click", togglePlay);

// Update progress bar
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
}

video.addEventListener("timeupdate", updateProgress);

// Volume
volume.addEventListener("input", function () {
    video.volume = volume.value;
});

// Playback speed
playbackSpeed.addEventListener("input", function () {
    video.playbackRate = playbackSpeed.value;
});

// Skip forward / backward
skipButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        video.currentTime += Number(button.dataset.skip);
    });
});

// Click progress bar to change video position
progress.addEventListener("click", function (event) {
    const position = event.offsetX / progress.offsetWidth;
    video.currentTime = position * video.duration;
});

// When video ends
video.addEventListener("ended", function () {
    playButton.textContent = "►";
});