

// const div  =  document.querySelector("div")
// const p1 =  document.querySelector("#p1")
// const p2 =  document.querySelector("#p2")



// div.removeChild(p2)


// const div  =  document.querySelector("div")
// const p1 =  document.querySelector("#p1")
// const p2 =  document.querySelector("#p2")

// window.addEventListener("load", function(){
//     // htmlCardProjects()
// });


const arreglo = ["Luis","Mario","Carlos","Julio","Carolina"]

const lista  =  document.getElementById("lista")
arreglo.forEach(item => {
    const li  =  document.createElement("li")
    
    li.textContent = item
    lista.appendChild(li)
});

arreglo.forEach(item => {
    lista.innerHTML+=`<li>${item}</li>`
})


const list_fragment = document.querySelector("#list-fragment")
const fragment  = document.createDocumentFragment()
// const fragment  =  new DocumentFragment()

arreglo.forEach(item => {
    const li  =  document.createElement("li")
    li.textContent =  item
    const childNode  =  fragment.firstChild

    if(childNode ==  null){
        li.textContent = "Eras nulo"
    }
    fragment.appendChild(li,childNode)
})
list_fragment.appendChild(fragment)

const list_fragment2 =  document.querySelector("#list-fragment2")

const fragment2 =  new DocumentFragment()
arreglo.forEach(item => {
    const li  =  document.createElement("li")
    li.classList.add("list")
    
    const b  =  document.createElement("b")
    b.textContent ="Nombre: "

    const span  =  document.createElement("span")
    span.classList.add("text-danger")
    span.textContent=item


    li.appendChild(b)
    li.appendChild(span)

    fragment2.appendChild(li)

});

list_fragment2.appendChild(fragment2)


function htmlCardProjects(projects) {
    cards = "";
    const contenedor_cards_projects =  document.querySelector(".sub_container__tarjetas")
    template =  document.querySelector("#template-cards").content;
    const fragment  = new DocumentFragment();


    // const data =   new Promise((resolve, reject) => {
    //     fetch('products.json')
    //         .then(respond => {
    //             resolve(respond.json())
    //             // return respond.json()
    //         }).catch(err => {
    //             reject(err)
    //      })
    //     })


    for (let i = 0; i < 3; i++) {
        const clone  = template.cloneNode(true)
        fragment.appendChild(clone)
        
    }

    
    contenedor_cards_projects.innerHTML = '';
    console.log(fragment)
    contenedor_cards_projects.appendChild(fragment)
   

    projects.forEach((project)=>{
        // console.log(template)
        if (!idsPortafolio.includes(parseInt(project['id']))) {
           
            template.querySelector(".card").dataset.id = project['id']
            template.querySelector(".card").setAttribute("id","prop"+project['id'])
            template.querySelector('.cont-titulo-portfolio').setAttribute('id',"cont-titulo-portfolio_"+project['id'])
            template.querySelector('.cont-delete-portfolio').setAttribute("id","cont-delete-portfolio_"+project['id'])
            // template.querySelector("img").setAttribute("src",project["url_image"])
            template.querySelector("img").dataset.src = project["url_image"]
            template.querySelector('.card-title-project').textContent=project["name"]
            template.querySelector('.font-cards').textContent=project["name"]
            template.querySelector('.remove-port').dataset.id = project['id']
            

            template.querySelector('.anual').textContent = project["annual_profitability"]+" % Anual"
            template.querySelector('.meses').textContent = project['term']+" MESES"
            template.querySelector('.calificacion').textContent =  number_format(project["qualification"],0,".",",")
            template.querySelector(".inversion_minima").textContent ="$ "+ number_format(project['minimum_investment'],0,".",",")+ "MXN"
            template.querySelector('.light-orangebtn').setAttribute("href","/proyecto/"+project['id'])




            template.querySelector('.remove-port').setAttribute("onclick","deleteCookiesPortfolio('"+project['id']+"');");
            const clone  = template.cloneNode(true)
            fragment.appendChild(clone)
        }
        
    })
    contenedor_cards_projects.innerHTML = '';
    console.log(fragment)
    contenedor_cards_projects.appendChild(fragment)
    

    
  
}




// function htmlCardProjects(projects) {
//     cards = "";
//     contenedor_cards_projects = document.querySelector('#div-card-projects')
//     template =  document.querySelector("#template-cards").content;
//     const fragment  = new DocumentFragment();

   

//     projects.forEach((project)=>{
//         // console.log(template)
//         if (!idsPortafolio.includes(parseInt(project['id']))) {
           
//             template.querySelector(".card").dataset.id = project['id']
//             template.querySelector(".card").setAttribute("id","prop"+project['id'])
//             template.querySelector('.cont-titulo-portfolio').setAttribute('id',"cont-titulo-portfolio_"+project['id'])
//             template.querySelector('.cont-delete-portfolio').setAttribute("id","cont-delete-portfolio_"+project['id'])
//             // template.querySelector("img").setAttribute("src",project["url_image"])
//             template.querySelector("img").dataset.src = project["url_image"]
//             template.querySelector('.card-title-project').textContent=project["name"]
//             template.querySelector('.font-cards').textContent=project["name"]
//             template.querySelector('.remove-port').dataset.id = project['id']
            

//             template.querySelector('.anual').textContent = project["annual_profitability"]+" % Anual"
//             template.querySelector('.meses').textContent = project['term']+" MESES"
//             template.querySelector('.calificacion').textContent =  number_format(project["qualification"],0,".",",")
//             template.querySelector(".inversion_minima").textContent ="$ "+ number_format(project['minimum_investment'],0,".",",")+ "MXN"
//             template.querySelector('.light-orangebtn').setAttribute("href","/proyecto/"+project['id'])




//             template.querySelector('.remove-port').setAttribute("onclick","deleteCookiesPortfolio('"+project['id']+"');");
//             const clone  = template.cloneNode(true)
//             fragment.appendChild(clone)
//         }
        
//     })
//     contenedor_cards_projects.innerHTML = '';
//     console.log(fragment)
//     contenedor_cards_projects.appendChild(fragment)
    

    
  
// }

