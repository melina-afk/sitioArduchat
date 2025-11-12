//headerScrolled.js
// Ocultar texto del header al hacer scroll en celular
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY > lastScroll + 10 && scrollY > 30) {
        header.classList.add("header-scroll"); // ocultar textos
    } else if (scrollY < 20) {
        header.classList.remove("header-scroll"); // mostrar textos
    }

    lastScroll = scrollY;
});
