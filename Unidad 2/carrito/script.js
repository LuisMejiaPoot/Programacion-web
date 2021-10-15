

const menu  =  document.querySelector("#menu")
const template  =  document.querySelector("#template").content
const fragment =  document.createDocumentFragment()
const contenedor_productos =  document.querySelector("#contenedor_productos")

const btn_ver_carrito =  document.getElementById("irCarrito")

btn_ver_carrito.addEventListener("click",function (e) {
    
    location.href ="ver_carrito.html"
})

fetch('https://fakestoreapi.com/products/categories')
.then(json=>json.json())
.then(function (response) {
    console.log(response)
    response.forEach(item => {
        
        let categoria  =  document.createElement("a")
        categoria.setAttribute("href","#")
        categoria.setAttribute("data-category",item)
        categoria.classList.add("categories")
        categoria.textContent = item
        menu.appendChild(categoria)
    });

    btns =  document.querySelectorAll(".categories")
    btns.forEach(btn => {

        btn.addEventListener("click",function (event) {
            
            btns.forEach(item => {
                item.classList.remove("btn-select")
                
            });
            let category =  event.target.getAttribute("data-category")
            event.target.classList.add("btn-select")

            console.log(category)
            getProducts(category)
        })
    });

})



/**
category: "electronics"
​​
description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system"
​​
id: 9
​​
image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
​​
price: 64
​​
rating: Object { rate: 3.3, count: 203 }
​​
title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 "
 */


function getProducts(category) {


    let  seccion =  document.querySelector("#seccion")

    seccion.textContent ="Estas en la categoria "+category
    fetch('https://fakestoreapi.com/products/category/'+category+"")
    .then(json=>json.json())
    .then(function (response) {
        
        response.forEach(product => {
            
            let img  = template.querySelector(".cont_imagen img")
            img.setAttribute("src",product.image)

            let titulo = template.querySelector(".titulo span")
            titulo.textContent =  product.title

            // let descripcion  = template.querySelector(".descripcion span")
            // descripcion.textContent =  product.description

            let price =  template.querySelector(".precio h2")
            price.textContent =  "$"+product.price

            
            let button_add =  template.querySelector(".btn-primary")
            button_add.setAttribute("data-id",product.id)
            button_add.setAttribute("onclick","agregar_carrito('"+product.id+"')")

            let button_ver =  template.querySelector(".btn-danger")
            button_ver.setAttribute("onclick","ver_mas('"+product.id+"')")

            const clone  = template.cloneNode(true)
            fragment.appendChild(clone)


        });

        contenedor_productos.innerHTML =""
        contenedor_productos.appendChild(fragment)

    })
}

function ver_mas(id) {
    
    alert(id)
}

function agregar_carrito(id) {
    


    if(!localStorage.getItem("carrito")){

        let products = []

        products.push(id)
        products =  JSON.stringify(products)
        localStorage.setItem("carrito",products)

        alert("Producto agregado")
    }else{
        let products =  localStorage.getItem("carrito")  // json de productos
        products =  JSON.parse(products)  // json a arreglo

        if (products.includes(id)) {
            alert("El product ya existe")
            return;
        }
        products.push(id)

        let  json  =  JSON.stringify(products)
        localStorage.setItem("carrito",json)
        alert("Producto agregado")

    }

}