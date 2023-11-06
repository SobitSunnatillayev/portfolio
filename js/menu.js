let headerMenu = document.querySelector(".header__menu")
let headerMenuLine = document.querySelector(".header__menu-line")
let headerBurger = document.querySelector(".header__burger")
let body = document.querySelector("body")

headerMenu.addEventListener("click", function () {
    headerMenuLine.classList.toggle("active")
    headerBurger.classList.toggle("active")
    body.classList.toggle("active")
})
