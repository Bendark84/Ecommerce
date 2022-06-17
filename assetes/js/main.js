
"use strict"

const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'https://academlo-store.netlify.app/assets/img/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'https://academlo-store.netlify.app/assets/img/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'https://academlo-store.netlify.app/assets/img/featured3.png',
      category: 'sweatshirts',
      quantity: 20
    }
    // {
    //   id: 4,
    //   name: 'Sweatshirts',
    //   price: 30.00,
    //   image: 'https://academlo-store.netlify.app/assets/img/featured3.png',
    //   category: 'sweatshirts',
    //   quantity: 10
    // }
]

//variables

/*card2 */
/*carrito de compras */
let cartIcon = document.querySelector("#img-bag") /* carrito de compras / es para buscar por medio del ID */
let cartOverlay = document.querySelector(".cart-overlay") /* carrito de compras */
let cartClose = document.querySelector("#cart-close") /* carrito de compras / para cerrar en la X */

let listProducts = document.querySelector(".img-card") /* este es donde esta la ropa */
let cartContainer = document.querySelector(".cart-list")
let cartCount = document.querySelector("#cart-count")
let cart= []
let contador = 0



// if(JSON.parse(window.localStorage.getItem("contador") != null)){
//     contador = window.localStorage.getItem("contador")
    
// }



/*Callback para mostrar el evento  */

document.addEventListener("DOMContentLoaded" , () =>{
    
    if(window.localStorage.getItem("cart")){
        cart=JSON.parse(window.localStorage.getItem("cart"))
    }else{
        window.localStorage.setItem("cart", JSON.stringify(cart))
    }
    
    mostrarProductos()
    mostrarProductosCart()

})

cartIcon.addEventListener("click", () =>{
    cartOverlay.classList.add("mostrar")

})

cartClose.addEventListener("click", () =>{
    cartOverlay.classList.remove("mostrar")
})





/*Funciones */


/*----------------------MOSTRAR PRODUCTO----------------------------------------------- */


function mostrarProductos(){

    let fragmentHTML = ""

    items.forEach((product) => {
        fragmentHTML += `
                <div class="hoodies-1" >
                    <img src=${product.image} alt="">
                    <button data-id="${product.id}" class="product-button" >+</button>
                    <p class="info-cart">  <span> $${product.price} </span> | <small>Stock:${product.quantity} <br>${product.category} </p> </small> <br>
                </div>   
        
        `
    })

    listProducts.innerHTML = fragmentHTML


    /* trar productos  */

   
    let productsButton = document.querySelectorAll(".product-button")

    
    productsButton.forEach( (button) =>{
        button.addEventListener( "click", (evento) => {
            let id = parseInt(button.getAttribute("data-id"))
            let product = items.find( item => {
                return item.id === id 

            })
            agregarProducto(product)
        })  
    })
}




/*----------------------AGREGAR PRODUCTO----------------------------------------------- */


function agregarProducto( producto ){
 
    let resultadoFind = cart.find( item => item.id === producto.id )
    //resultadoFind = "actualizacion"

    if( resultadoFind ){
        let stock = cart[resultadoFind.index].quantity
        let quantitySelected = cart[resultadoFind.index].quantitySelected

        if( stock > quantitySelected ){
            cart[resultadoFind.index].quantitySelected += 1
        }else{
            alert( "No tenemos suficiente inventario" )
        }

    }else{
        producto.quantitySelected = 1
        producto.index = cart.length


        cart.push(producto)
    }

        

    localStorage.setItem("cart",JSON.stringify(cart))

        
        mostrarProductosCart()
        
    }


/*----------------------MOSTRAR PRODUCTO CART----------------------------------------------- */





function mostrarProductosCart(){

    let fragmentoHTML = ``
    let suma = 0
    let cantidadTotal = 0

    cart.forEach( item =>{
        fragmentoHTML += `
        <div class="cart-item">
        
            <img src=${item.image} alt="">
            <p>${item.name}</p>
            <small>Cantidad: ${item.quantitySelected}</small>
            <button  class="botonMas">+</button>
            <button>-</button>
            <button class="buttonDelete">x</button>
        </div>
        `     

        let totalProducto = item.quantitySelected * item.price 
        suma += totalProducto

        cantidadTotal += item.quantitySelected
       

    })

    fragmentoHTML += `
    <div class="cart-price">
    
        <p> Total de Productos  : <br>   ${ cantidadTotal }</p><br>
        <p>$${ suma }</p><br>
        <div class="botonesCart">
            
        </div>
       
    </div>
    ` 
    

 


    cartContainer.innerHTML = fragmentoHTML
    cartCount.textContent = cantidadTotal


}





/* Local Storage */

/*window.localStorage*/



/*----------------------SCROLL NAV----------------------------------------------- */


/*para hacer un scroll de mi navbar */

const nav = document.querySelector("nav");
window.addEventListener('scroll', function(){
    nav.classList.toggle('active', window.scrollY >0 )
}) /*otro metodo para hacerlo lo del scroll*/

// window.addEventListener("scroll", () =>{
//     if(window.scrollY > 50){
//         nav.classList.add("scroll-nav")
//     }else{
//         nav.classList.remove("scroll-nav")
//     }

// })


/*----------------------DARK MODE----------------------------------------------- */


/*para pasar a modo obscuro*/

let themeIcon = document.getElementById("theme-toggler")


let body = document.querySelector("body")

themeIcon.addEventListener("click", (e) =>{
    body.classList.toggle("dark-theme")
    /* para cambiar la imagen cuando pasa a modo obscuro */
    let isDark = body.classList.contains("dark-theme")
    // if(isDark){
    //     themeIcon.classList.replace(pic="./assetes/imagenes/moon.png", pic="./assetes/imagenes/sun.png")
    // }else{
    //     themeIcon.classList.replace(pic="./assetes/imagenes/sun.png", pic="./assetes/imagenes/moon.png")
    // }
 

})







