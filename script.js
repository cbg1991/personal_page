console.log("test");

let bar = document.querySelector("#progressbar");
  window.addEventListener("scroll", () => {
    let max = document.body.scrollHeight - innerHeight;
    bar.style.width = `${(pageYOffset / max) * 100}%`;
  });

  section-2-images.onmouseenter = function(){
    this.classList.add("section-2-images-hover");
  }
