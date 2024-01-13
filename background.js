var audio = new Audio();
audio.src =
  "https://raw.githubusercontent.com/Le-Wolfie/chippichippi/chippibtn/moosic/chipi%20chipi%20chapa%20chapa%20dubi%20dubi%20daba%20daba%20(looped).mp3";
audio.loop = true;

// Restart the audio when it ends
audio.addEventListener("ended", function () {
  audio.currentTime = 0;
  audio.play();
});
// Listen for messages from popup script
browser.runtime.onMessage.addListener(function (message) {
  if (message.action === "playAudio") {
    // Check if the audio is not playing
    if (audio.paused) {
      // If not playing, then play the audio
      audio.play();
    }
  }
});
