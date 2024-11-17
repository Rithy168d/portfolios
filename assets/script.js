let iconToggler = document.querySelector("#menuTogger");
let navList = document.querySelector(".navlist");

iconToggler.addEventListener("click", () => {
    iconToggler.classList.toggle("fa-xmark");
    navList.classList.toggle("active");
});

navList.addEventListener("click", () => {
    iconToggler.classList.remove("fa-xmark");
    navList.classList.toggle("active");

})