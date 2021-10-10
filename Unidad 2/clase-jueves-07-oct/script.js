
const calificaciones = [
    {"alumno":"Carlos", "calificacion":10,"image":"https://as2.ftcdn.net/v2/jpg/03/13/82/51/500_F_313825184_EpuEFYiODvG1lvqfKN2uIVAceAV5T0OX.jpg"},
    {"alumno":"Mario", "calificacion":5,"image":"https://as2.ftcdn.net/v2/jpg/03/13/82/51/500_F_313825184_EpuEFYiODvG1lvqfKN2uIVAceAV5T0OX.jpg"},
    {"alumno":"Daniela", "calificacion":8,"image":"https://as2.ftcdn.net/v2/jpg/03/13/82/51/500_F_313825184_EpuEFYiODvG1lvqfKN2uIVAceAV5T0OX.jpg"},
    {"alumno":"Mauricio", "calificacion":7,"image":"https://as2.ftcdn.net/v2/jpg/03/13/82/51/500_F_313825184_EpuEFYiODvG1lvqfKN2uIVAceAV5T0OX.jpg"},
    {"alumno":"Juan", "calificacion":5,"image":"https://as2.ftcdn.net/v2/jpg/03/13/82/51/500_F_313825184_EpuEFYiODvG1lvqfKN2uIVAceAV5T0OX.jpg"},
    {"alumno":"Juan", "calificacion":5,"image":"https://as2.ftcdn.net/v2/jpg/03/13/82/51/500_F_313825184_EpuEFYiODvG1lvqfKN2uIVAceAV5T0OX.jpg"},
    {"alumno":"Juan", "calificacion":5,"image":"https://as2.ftcdn.net/v2/jpg/03/13/82/51/500_F_313825184_EpuEFYiODvG1lvqfKN2uIVAceAV5T0OX.jpg"},
    {"alumno":"Juan", "calificacion":5,"image":"https://as2.ftcdn.net/v2/jpg/03/13/82/51/500_F_313825184_EpuEFYiODvG1lvqfKN2uIVAceAV5T0OX.jpg"},
]


const h1 =  document.getElementById("contador")


const btn_mas =  document.querySelector(".mas")
const btn_menos =  document.querySelector(".menos")
let contador  = 0
btn_mas.addEventListener("click",function (e) {
    
    contador++
    h1.textContent =  contador

})

btn_menos.addEventListener("click",function (e) {
    
    contador--
    h1.textContent =  contador

})



const buscador  =  document.getElementById("buscador")

buscador.addEventListener("keyup",(e)=>{

    // console.log(buscador.value)
    document.querySelector("#resultado").textContent =  buscador.value

    
})

const contenedor  =  document.getElementById("contenedor")


const template  =  document.querySelector("#template").content
const fragment = document.createDocumentFragment()


calificaciones.forEach(item => {
    
    template.querySelector(".imagen_sub").setAttribute("src",item.image)
    template.querySelector(".alumno").textContent =  item.alumno
    template.querySelector(".materia").textContent =  item.calificacion

    // template.querySelector("p").textContent ="Texto random"
    const clone  = template.cloneNode(true)
    fragment.appendChild(clone)
    
    
});

contenedor.appendChild(fragment)
let divs = "";
// calificaciones.forEach(item => {
    
//     // const sub_contenedor  =  document.createElement("div")
//      divs +=  `<div class="sub_contenedor">
            
//     <div class="imagen">
//         <img class="image" src="`+item.image+`" alt="">
//     </div>
//     <div class="alumno">
//         Alumno:`+item.alumno+`
//     </div>
//     <div class="materia">
//         `+item.calificacion+`
//     </div>
// </div>`
// });



calificaciones.forEach(item => {
    const sub_contenedor =  document.createElement("div")


    sub_contenedor.classList.add("sub_contenedor")

    const div_imagen  =  document.createElement("div")

    div_imagen.classList.add("imagen")

    const img =  document.createElement("img")
    img.setAttribute("src",item.image)

    div_imagen.appendChild(img)
    sub_contenedor.appendChild(div_imagen)


    const div_alumno  =  document.createElement("div")
    div_alumno.textContent = item.alumno

    sub_contenedor.appendChild(div_alumno)

    const div_calificacion  = document.createElement("div")
    div_calificacion.textContent =  item.calificacion

    sub_contenedor.appendChild(div_calificacion)

    contenedor.appendChild(sub_contenedor)

});

