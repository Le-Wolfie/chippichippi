const chippi =
  "https://raw.githubusercontent.com/Le-Wolfie/chippichippi/main/gif/chip.gif";

function replaceImages() {
  // Replace img tags
  var imgElements = document.querySelectorAll("img");
  imgElements.forEach(function (img) {
    // Preserve aspect ratio and set width and height
    img.style.width = img.clientWidth + "px";
    img.style.height = img.clientHeight + "px";
    img.src = chippi;
  });

  // Replace video tags
  var videoElements = document.querySelectorAll("video");
  videoElements.forEach(function (video) {
    // Preserve aspect ratio and set width and height
    video.style.width = video.clientWidth + "px";
    video.style.height = video.clientHeight + "px";

    video.poster = chippi;
    video.src = chippi;
  });

  // Replace background images added via CSS
  var elementsWithBackground = document.querySelectorAll(
    "[style*='background-image']"
  );
  elementsWithBackground.forEach(function (element) {
    // Set background size to cover and background repeat to no-repeat
    element.style.backgroundSize = "cover";
    element.style.backgroundRepeat = "no-repeat";
    element.style.backgroundImage = `url(${chippi})`;
  });
}

browser.runtime.onMessage.addListener(function (message) {
  if (message.action === "replaceImages") {
    replaceImages();
  }
});
