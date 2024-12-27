document.getElementById("menu-item-home").addEventListener("click", () => {
    fetch("pages/home.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("main-content").innerHTML = data
            let script=document.createElement("script")
            script.src="pages/home.js"
            document.getElementById("main-content").appendChild(script)
        })
})
document.getElementById("menu-item-home").click()

document.getElementById("menu-item-disc").addEventListener("click", () => {
    fetch("pages/discography.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("main-content").innerHTML = data
            let script=document.createElement("script")
            script.src="pages/discography.js"
            document.getElementById("main-content").appendChild(script)
        })
})

document.getElementById("menu-item-tour").addEventListener("click", () => {
    fetch("pages/tour.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("main-content").innerHTML = data
            let script=document.createElement("script")
            script.src="pages/tour.js"
            document.getElementById("main-content").appendChild(script)
        })
})
document.getElementById("menu-item-tienda").addEventListener("click", () => {
    fetch("pages/tienda.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("main-content").innerHTML = data
            let script=document.createElement("script")
            script.src="pages/tienda.js"
            document.getElementById("main-content").appendChild(script)
        })
})
document.getElementById("menu-item-carrito").addEventListener("click", () => {
    fetch("pages/carrito.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("main-content").innerHTML = data
            let script=document.createElement("script")
            script.src="pages/carrito.js"
            document.getElementById("main-content").appendChild(script)
        })
})
document.getElementById("menu-item-integrantes").addEventListener("click", () => {
    fetch("pages/integrantes.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("main-content").innerHTML = data
            let script=document.createElement("script")
            script.src="pages/integrantes.js"
            document.getElementById("main-content").appendChild(script)
        })
})

const myCarouselElement = document.querySelector('#carouselExample')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})
