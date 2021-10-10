function ejemplo() {
    // console.time('abc1');
   elemento =  document.getElementById("contenedor")
//    console.log(elemento.textContent)
//    console.timeEnd('abc1');
    byclass =  document.getElementsByClassName("mensaje")
    // console.log(byclass[1].textContent.replaceAll("\n",""),byclass)

    byname =  document.getElementsByName("caja")
    // console.log(byname[0].textContent,byname)
    // console.log(byname[0].value,byname)

    bytag =  document.getElementsByTagName("p")
    // document.getElementsByTagNameNS
    // for (const elemento in bytag) {
    //     console.log(bytag[elemento].textContent)
    // }
    var tabla = document.getElementById("tabla-principal");
    bytagNs =  tabla.getElementsByTagNameNS("http://www.w3.org/1999/xhtml","td")
    // console.log(bytagNs.length)

    ps =  document.querySelectorAll(".contenedor1 , .p1")
    ps[0].style.background="red"
    ps[3].classList.add("letras")
    ps[1].style.cssText += 'color:red;background-color:yellow';
    // ps[3].classList.remove("letras")
}

document.getElementById("btnFormulario").onclick =  function (params) {
    alert("hola")
}

document.getElementById("buscador").onkeyup =  function (params) {
    console.log(this.value)
   divs  =  document.getElementsByClassName("buscador_")
   divs[0].innerHTML="<p>"+this.value+"</p>"
}