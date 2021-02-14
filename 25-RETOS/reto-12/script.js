const buttons = document.querySelectorAll (".btn");
const sounds = document.querySelectorAll(".audio");


buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        remAttribute();
        addAttribute(index);

    });
});


function addAttribute(index) {
    sounds[index].setAttribute("autoplay", "autoplay").play();

}

function remAttribute() {
    sounds.forEach((audio) => {
        audio.load();
        audio.removeAttribute("autoplay");

    });
}
