
const mensaje  =  document.getElementById("mensaje")

if (!localStorage.getItem("carrito")) {
    
    mensaje.textContent = "Su carrito esta vacio"
}else{
    let json  =  localStorage.getItem("carrito")
    let products =  JSON.parse(json)
    mensaje.textContent ="Tu carrito cuenta con "+products.length+" productos"

 
    const tabla_agregados  =  document.querySelector("#productos_agregados tbody")
    let filas = "";
    const  quantities =  JSON.parse(localStorage.getItem("quantities"))
    for (let i = 0; i < products.length; i++) {
        
        fetch('https://fakestoreapi.com/products/'+products[i])
            .then(res=>res.json())
            .then(function name(element) {
              
                let price_total =  quantities[i] *  element.price
                filas+=`
                <tr id ="fila-`+element.id+`">
                    <td>`+element.title+`</td>
                    <td>`+element.description+`</td>
                    <td><input value="`+quantities[i]+`" type="number" id="qua-`+element.id+`" /></td>
                    <td>`+element.price+`</td>
                    <td><input value="`+price_total+`" type="number" id="price-`+element.id+`" readonly /></td>
                    <td>
                    <button class="eliminar" data-id="`+element.id+`" data-name ="`+element.title+`">Eliminar</button>
                    <button class="editar"  onclick=editarProduct(`+element.id+`,`+element.price+`) data-id="`+element.id+`">Editar</button>
                    </td>

                </tr>
                ` 
                tabla_agregados.innerHTML= filas

                const btns_eliminar =  document.querySelectorAll(".eliminar")

                btns_eliminar.forEach(item => {
                    item.addEventListener("click",function (e) {
                        let data_id =  e.target.getAttribute("data-id")
                        let name  =  e.target.getAttribute("data-name")
                        eliminar_product(data_id,name)
                    })
                });

            })
        
    }
}


function eliminar_product(id,name) {
    let products  =  localStorage.getItem("carrito")
    let quantities =  localStorage.getItem("quantities")
    products =  JSON.parse(products)
    quantities =  JSON.parse(quantities)
    let index = products.indexOf(id)
    if (index > -1) {
        if (confirm("Estas seguro que deseas eliminar "+name)) {
            const tabla_agregados  =  document.querySelector("#productos_agregados tbody")
            const fila  =  document.querySelector("#fila-"+id)
            tabla_agregados.removeChild(fila)
            products.splice(index,1)
            quantities.splice(index,1)
            localStorage.setItem("carrito", JSON.stringify(products))
            localStorage.setItem("quantities",JSON.stringify(quantities))
            alert("eliminaste " +name)

        }

    }
    

} 

function editarProduct(id,price) {

    let input  =  document.querySelector("#qua-"+id)
    let input_price_total =  document.querySelector("#price-"+id)

    let carrito =  JSON.parse(localStorage.getItem("carrito"))
    let quantities =  JSON.parse(localStorage.getItem("quantities"))

    let index =  carrito.indexOf(id.toString())
    
   
    quantities[index] =  input.value
    let price_total =  parseInt(input.value) * price

    input_price_total.value =  price_total
    localStorage.setItem("quantities",JSON.stringify(quantities))
}