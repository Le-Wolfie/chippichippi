const pp = "./gif/chip.gif";
function replaceImg() {
  let img = document.querySelectorAll("img");
  img.forEach((i) => {
    i.src = pp;
  });
}

replaceImg();
