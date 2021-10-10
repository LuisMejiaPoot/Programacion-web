

const calificaciones = [
    {"alumno":"Carlos", "calificacion":10,"image":"https://as2.ftcdn.net/v2/jpg/03/13/82/51/500_F_313825184_EpuEFYiODvG1lvqfKN2uIVAceAV5T0OX.jpg"},
    {"alumno":"Mario", "calificacion":5,"image":"https://as2.ftcdn.net/v2/jpg/03/13/82/51/500_F_313825184_EpuEFYiODvG1lvqfKN2uIVAceAV5T0OX.jpg"},
    {"alumno":"Daniela", "calificacion":8,"image":"https://as2.ftcdn.net/v2/jpg/03/13/82/51/500_F_313825184_EpuEFYiODvG1lvqfKN2uIVAceAV5T0OX.jpg"},
    {"alumno":"Mauricio", "calificacion":7,"image":"https://as2.ftcdn.net/v2/jpg/03/13/82/51/500_F_313825184_EpuEFYiODvG1lvqfKN2uIVAceAV5T0OX.jpg"},
    {"alumno":"Juan", "calificacion":5,"image":"https://as2.ftcdn.net/v2/jpg/03/13/82/51/500_F_313825184_EpuEFYiODvG1lvqfKN2uIVAceAV5T0OX.jpg"},
]
const ul_calificaciones = document.getElementById("calificaciones")



const template  = document.querySelector("#template_calificaciones").content
const fragment  =  document.createDocumentFragment()

calificaciones.forEach(item => {
    template.querySelector(".alumno").textContent = item.alumno
    template.querySelector(".cal").textContent = item.calificacion

    const clone  = template.cloneNode(true)
    fragment.appendChild(clone)
});


ul_calificaciones.appendChild(fragment)



numero  = document.querySelector(".contador")


btn_mas  =  document.querySelector(".mas")
btn_menos  =  document.querySelector(".menos")

let contador = 0
btn_mas.addEventListener("click",(e)  =>{
    contador++
    numero.textContent = contador
})

btn_menos.addEventListener("click",(e)  =>{
    contador--
    numero.textContent = contador
})


// boton para obtener datos de formulario

let  btnGuardar =  document.querySelector("#btnGuardar")


btnGuardar.addEventListener("click",(e)=>{
    e.preventDefault()
    let input_name =  document.getElementsByName("nombre")
    console.log(input_name[0].value)

    materias  =  document.getElementById("materias")
    seleccionado =  materias.options[materias.selectedIndex].value
    

    radios  =  document.querySelectorAll(".dificultad")
    seleccionadoradio =  ""
    for (let i = 0; i < radios.length; i++) {
        
        console.log(radios[i])
        if(radios[i].checked){
            
            seleccionadoradio  = radios[i].value
        }
        
    }
    console.log(seleccionadoradio)
  
})





// calificaciones.forEach(element => {
    
//     const li =  document.createElement("li")

//     const span =  document.createElement("span")
//     span.textContent =  element.alumno
//     if(parseInt(element.calificacion) <=6){
//         span.classList.add("text-danger")
//     }else{
//         span.classList.add("text-success")
//     }
//     li.appendChild(span)
//     ul_calificaciones.appendChild(li)
// });
