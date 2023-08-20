const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
/* Toggle menu */
const toggleMenu = $(".navbar__toggle-menu");
const overlay = $(".overlay");
const closeBtn = $(".navbar__close-btn");
const navItems = $$(".nav-item-mobile");
const navBar = $(".navbar");
const drawerMenu = $('.drawer-menu');
const navOnPC = $(".nav");
const navOnMobile = $('.nav-mobile')

toggleMenu.onclick = () => {
    overlay.classList.toggle("open");
    toggleMenu.style.display = "none";
    closeBtn.style.display = "inline-block";
    drawerMenu.style.display = "block";
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
// console.log(body.clientWidth);
navItems.forEach((navItem) => {
    console.log(navItem)

    navItem.onclick = () => {
        console.log(navItem)
        overlay.classList.remove("open");
        toggleMenu.style.display = "inline-block";
        closeBtn.style.display = "none";
        drawerMenu.style.display = "none";
    }

})
navOnMobile.innerHTML = navOnPC.innerHTML;