let headerContentBtn = document.querySelector(".header__content-btn")

    headerContentBtn.addEventListener("mousemove", (e) => {

        const X = e.pageX - headerContentBtn.offsetLeft
        const Y = e.pageY - headerContentBtn.offsetTop

        headerContentBtn.style.setProperty("--x", `${X}px`)
        headerContentBtn.style.setProperty("--y", `${Y}px`)
    })


let headerTitle = document.querySelector(".header__title")
let fullText = headerTitle.innerHTML
let stop = 0

headerTitle.innerHTML = ""

function runText(x = 0) {
    headerTitle.innerHTML += fullText[x]
    x++

    stop = setTimeout(() => {
        runText(x)
    }, 200);

    if (x == 18) {
        clearTimeout(stop)
    }

}

runText()


let headerMenu = document.querySelector(".header__menu")
let headerMenuLine = document.querySelector(".header__menu-line")
let headerBurger = document.querySelector(".header__burger")
let body = document.querySelector("body")

headerMenu.addEventListener("click", function () {
    headerMenuLine.classList.toggle("active")
    headerBurger.classList.toggle("active")
    body.classList.toggle("active")
})
