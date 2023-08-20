const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
/* Toggle menu */
const toggleMenu = $(".navbar__toggle-menu");
const overlay = $(".overlay");
const closeBtn = $(".navbar__close-btn");
const navItems = $$(".nav-item");
console.log(overlay);
const nav = $(".nav");

toggleMenu.onclick = () => {
    overlay.classList.toggle("open");
    toggleMenu.style.display = "none";
    closeBtn.style.display = "inline-block";
};
overlay.onclick = () => {
    overlay.classList.remove("open");
    toggleMenu.style.display = "inline-block";
    closeBtn.style.display = "none";


};
closeBtn.onclick = () => {
    overlay.classList.remove("open");
    toggleMenu.style.display = "inline-block";
    closeBtn.style.display = "none";
}

navItems.forEach((navItem) => {
    navItem.onclick = () => {
        overlay.classList.remove("open");
        toggleMenu.style.display = "inline-block";
        closeBtn.style.display = "none";

        // closeBtn.style.opacity = "0";
        // closeBtn.style.visivility = "hidden";
        // closeBtn.style.transition = "0.5 ease";



    }

})