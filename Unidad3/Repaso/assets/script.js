
$(".formulario-update").submit(function (e) {
    
    
    let datos = $(this).serialize()
    e.preventDefault();
    

    $.ajax({
        "type":"POST",
        "url":"actualizar.php",
        "data":{
            "formulario":datos
        },
        beforeSend:function (params) {
            
        },
        success:function (response) {
            console.log(response)
            respuesta = JSON.parse(response)

            if(respuesta.status =="success"){
                alert(respuesta.message)
            }else{
                alert(respuesta.message)
            }
        }
    })
})