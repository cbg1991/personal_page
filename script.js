
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

/* zoom in on cover pic while adding shadow */

let picShadow = document.querySelectorAll(".cover-pic");
for(i = 0; i < picShadow.length; i++) {
    let shadowImage = picShadow[i];
        shadowImage.addEventListener("mouseover", addShadow, false);
        shadowImage.addEventListener("mouseout", removeShadow, false);
        function addShadow() {
            shadowImage.setAttribute('id','hovered');
            shadowImage.setAttribute('id','cover-pic-zoom');
        }
        function removeShadow() {
            shadowImage.removeAttribute('id','hovered');
            shadowImage.removeAttribute('id','cover-pic-zoom');
        }
}

/* this is the gallery photo selector, which also removes opactiy from little photo on hover*/

let littleImage = document.querySelectorAll(".gallery-pic");
for(i = 0; i < littleImage.length; i++) {
    let selectedImage = littleImage[i];
        selectedImage.addEventListener("click", changeImage, false);
        selectedImage.addEventListener("mouseover", addOpacity, false);
        selectedImage.addEventListener("mouseout", removeOpacity, false);
        function changeImage() {
            console.log(selectedImage.src);
            newSource = selectedImage.src;
            document.querySelector("#expanded-image").src = newSource;
        }
        function addOpacity() {
            selectedImage.setAttribute('id','gallery-hover');
        }
        function removeOpacity() {
            selectedImage.removeAttribute('id','gallery-hover');
        }
}



