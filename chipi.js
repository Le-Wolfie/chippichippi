const chippi =
  "https://raw.githubusercontent.com/Le-Wolfie/chippichippi/main/gif/chip.gif";

function replaceImage(img) {
  img.src = chippi;
}

function handleIntersection(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // Introduce a small delay using setTimeout
      setTimeout(function () {
        replaceImage(entry.target);
        observer.unobserve(entry.target);
      }, 100); // Adjust the delay time (in milliseconds) as needed
    }
  });
}

var observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });

document.querySelectorAll("img").forEach(function (img) {
  observer.observe(img);
});

var mutationObserver = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.addedNodes.length > 0) {
      mutation.addedNodes.forEach(function (node) {
        if (node.tagName === "IMG") {
          observer.observe(node);
        } else {
          node.querySelectorAll("img").forEach(function (img) {
            observer.observe(img);
          });
        }
      });
    }
  });
});

mutationObserver.observe(document, { subtree: true, childList: true });
