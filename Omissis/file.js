const audio = document.getElementById("tracciaAudio");
const bottone = document.getElementById("btnPlayPausa");

bottone.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
    bottone.innerHTML = "[PAUSE]";
  } else {
    audio.pause();
    bottone.innerHTML = "[PLAY]";
  }
});