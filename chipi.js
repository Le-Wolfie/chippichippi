const chippi = "https://raw.githubusercontent.com/youssef-attai/chippichippi/main/gif/chip.gif";

function main() {
  var allImageElements = document.querySelectorAll('img, [style*="background-image"]');

  allImageElements.forEach(function(element) {
      // Check if it's an <img> element
      if (element.tagName === 'IMG') {
          // Change the src attribute for <img> elements
          element.src = chippi;
      } else {
          // Change the background image for other elements
          element.style.backgroundImage = `url(${chippi})`;
      }
  });
}

// main();

// Function to replace images
function replaceImages(images) {
    images.forEach(function(img) {
      // if (!img.getAttribute('data-chippichippied')) {
          // Replace the image source or background image here
          img.src = chippi;
          // Or for background images: img.style.backgroundImage = 'url("path/to/your/new/image.jpg")';
        // Mark the image as replaced
      //   img.setAttribute('data-chippichippied', 'true');
      // }
    });
}

// Create a MutationObserver to watch for changes in the DOM
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        // Check if nodes were added to the DOM
        if (mutation.addedNodes.length > 0) {
            // Select all images in the added nodes
            var newImages = document.querySelectorAll('img, [style*="background-image"]', mutation.target);
            // Replace the images
            replaceImages(newImages);
        }
    });
});

// Start observing the entire document and subtree
observer.observe(document, { subtree: true, childList: true });

// Initial replacement when the page loads
replaceImages(document.querySelectorAll('img, [style*="background-image"]'));

