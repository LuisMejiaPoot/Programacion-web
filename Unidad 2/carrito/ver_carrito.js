
const mensaje  =  document.getElementById("mensaje")

if (!localStorage.getItem("carrito")) {
    
    mensaje.textContent = "Su carrito esta vacio"
}else{
    let json  =  localStorage.getItem("carrito")
    let products =  JSON.parse(json)
    mensaje.textContent ="Tu carrito cuenta con "+products.length+" productos"

 
    const tabla_agregados  =  document.querySelector("#productos_agregados tbody")
    let filas = "";
    for (let i = 0; i < products.length; i++) {
        
        fetch('https://fakestoreapi.com/products/'+products[i])
            .then(res=>res.json())
            .then(function name(element) {
              
                filas+=`
                <tr>
                    <td>`+element.title+`</td>
                    <td>`+element.description+`</td>
                    <td>1</td>
                    <td>`+element.price+`</td>
                </tr>
                ` 
                tabla_agregados.innerHTML= filas

            })
        
    }



    
    // console.log(products_api)
}