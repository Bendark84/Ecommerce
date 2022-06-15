
"use strict"

/* carrito de compras */
let contadorMas = 0
window.localStorage.setItem()




/*para hacer un scroll de mi navbar */

const nav = document.querySelector("nav");
/*window.addEventListener('scroll', function(){
    nav.classList.toggle('active', window.scrollY >0 )
}) otro metodo para hacerlo lo del scroll*/

window.addEventListener("scroll", () =>{
    if(window.scrollY > 60){
        nav.classList.add("scroll-nav")
    }else{
        nav.classList.remove("scroll-nav")
    }

})

/*para pasar a modo obscuro*/

let themeIcon = document.getElementById("theme-toggler")


let body = document.querySelector("body")

themeIcon.addEventListener("click", (e) =>{
    body.classList.toggle("dark-theme")
    /* para cambiar la imagen cuando pasa a modo obscuro */
    let isDark = body.classList.contains("dark-theme")
    if(isDark){
        themeIcon.classList.replace(pic="./assetes/imagenes/moon.png", pic="./assetes/imagenes/sun.png")
    }else{
        themeIcon.classList.replace(pic="./assetes/imagenes/sun.png", pic="./assetes/imagenes/moon.png")
    }
 

})


/*card2 */
/*carrito de compras */

let cartIcon = document.querySelector("#img-bag")/*este es para buscar por medio del ID */
let cartOverlay = document.querySelector(".cart-overlay")
let cartClose = document.querySelector("#cart-close") /*para cerrar en la X */

/*Callback para mostrar el evento  */
cartIcon.addEventListener("click", () =>{
    cartOverlay.classList.add("mostrar")

})
cartClose.addEventListener("click", () =>{
    cartOverlay.classList.remove("mostrar")
})




