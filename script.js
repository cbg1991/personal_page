console.log("test");
/* scroll progress bar */
let bar = document.querySelector("#progressbar");
  window.addEventListener("scroll", () => {
    let max = document.body.scrollHeight - innerHeight;
    bar.style.width = `${(pageYOffset / max) * 100}%`;
  });

/* hover shadows for index buttons */
let shadow = document.querySelectorAll(".homeButton");
for(i = 0; i < shadow.length; i++) {
    let shadowImage = shadow[i];
        shadowImage.addEventListener("mouseover", addShadow, false);
        shadowImage.addEventListener("mouseout", removeShadow, false);
        function addShadow() {
            shadowImage.setAttribute('id','hovered');
        }
        function removeShadow() {
            shadowImage.removeAttribute('id','hovered');
        }
}



