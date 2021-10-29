

const btn_add_dog =  document.querySelector("#add-dog")
const template =  document.querySelector("#template").content
const container_dog  = document.querySelector(".container-dogs")
const fragment =  document.createDocumentFragment()


fetch("https://api.jikan.moe/v3/search/anime?q=shingeky")
.then(json=>json.json())
.then(function (response) {

        console.log(response)

})
btn_add_dog.addEventListener("click",function (e) {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(json=>json.json())
    .then(function (response) {

        console.log(response)
        
        let img  =  template.querySelector(".dog-img div img")
        img.setAttribute("src",response.message)
        let title  =  template.querySelector(".dog-text h2")
        
        let num_dog =  document.querySelectorAll(".container-dogs .dog")
        let total = num_dog.length + 1
        
        title.textContent="Perrito #"+total

        let dog =  template.querySelector(".dog")
        dog.setAttribute("id","dog-"+total)

        let btn_eliminar =  template.querySelector(".eliminar")
        btn_eliminar.setAttribute("onclick","delete_dog('"+total+"')")


        const clone  = template.cloneNode(true)
        // fragment.appendChild(clone)
        container_dog.appendChild(clone)

        if (!localStorage.getItem("perritos")) {
            let perritos =  [];
            let perrito = "Perrito"+total.toString()
            perritos.push(perrito)
            let json  = JSON.stringify(perritos)
            localStorage.setItem("perritos",json)
        }else{
            let perritos  =  localStorage.getItem("perritos")
            perritos =  JSON.parse(perritos)
            perritos.push("Perrito"+total.toString())

            localStorage.setItem("perritos",JSON.stringify(perritos))

        }
    })
})


function delete_dog(total) {
    
if (confirm("deseas eliminar")) {
    let dog =  document.querySelector("#dog-"+total)
    container_dog.removeChild(dog)
}


}