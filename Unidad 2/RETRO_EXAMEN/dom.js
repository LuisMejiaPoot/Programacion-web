let nombre  =  document.getElementById("div_nombre")
// console.log(nombre.textContent)


let parrafos  =  document.getElementsByClassName("parrafo")
console.log(parrafos[0].textContent)
for (let i = 0; i < parrafos.length; i++) { 
    // console.log(parrafos[i].textContent) 
}

let alumno  =  document.getElementsByName("alumno")
// console.log(alumno[0].value)


articulos  =  document.getElementsByTagName("article")

// console.log(articulos[2].textContent)

articuloclick =  document.getElementById("articulo1")

articuloclick.onclick =  function () {
    alert("Hola saludos ")
}

buscador  = document.getElementById("buscador")


buscador.onkeyup =  function () {
    console.log(this.value)
    let resultado = document.getElementsByClassName("resultado")

    resultado[0].innerHTML = "<p>"+this.value+"</p>"
    resultado[1].innerHTML = "<p>"+this.value+"</p>"
}


// prueba  =  document.querySelector("imga")

textos =  document.querySelectorAll(".lectura")
console.log(textos)
textos[0].style.color = "red";
textos[0].style.background = "blue"
textos[1].classList.add("fuente")
// textos[1].classList.remove("fuente") 
// console.log(textps)


