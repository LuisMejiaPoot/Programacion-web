
$(".form_ajax").submit(function (e) {
    let datos  =  $(this).serialize()
    e.preventDefault();
    let user_message =  document.querySelector("#user_message")

    $.ajax({
        type:"POST",
        url:"guardar.php",
        data:{
            "form":datos,
            // "user_name":"",
            // "last_name":"",
            // "email":"",
            // "phone":""
        },
        beforeSend:function () {
            user_message.textContent ="Enviando datos, espere por favor";
        },
        success:function (response) {


            let data  = JSON.parse(response);
            
            if (data.status == "success") {
                user_message.classList.add("text-success")
            }else{
                user_message.classList.add("text-danger") 
            }
            user_message.textContent = data.message

            setTimeout(function (e) {
                user_message.textContent=""
            },2000);

            let tr =`<tr id="fila-`+data.data_user.id+`">
            <td>${data.data_user.name}</td>
            <td>${data.data_user.last_name}</td>
            <td>${data.data_user.email}</td>
            <td>${data.data_user.phone}</td>
            <td>
            <a href="form_update.php?id_user=${data.data_user.id}" class="btn btn-success">Actualizar</a>
            <button class="btn btn-danger" onclick=eliminar(`+data.data_user.id+`)  >Eliminar</button>
            </td>
            </tr>`;
            $(".table-user").append(tr)
        },
        error:function (err) {
            console.log(err)
        }
    })

})

const message_update =  document.querySelector("#message_update")
$(".form_ajax_update").submit(function (e) {
    let data =  $(this).serialize()
    e.preventDefault();
    $.ajax({
        "type":"POST",
        "url":"update.php",
        "data":{
            "form":data
        },
        beforeSend:function () {
            message_update.textContent = "Actualizando usuario";
        },
        success:function (response) {
            response = JSON.parse(response)
            if (response.status == "success") {
                message_update.classList.add("text-success")
                document.querySelector("#messsage_redirect").textContent ="Usted sera redireccionado a index..."
                setTimeout(function () {
                    
                    location.href="index.php"
                }, 3000);
            }else{
                message_update.classList.add("text-danger")
            }
            message_update.textContent  =  response.message
        },
        error:function (err) {
            console.log(err)
        }
    })
})


function eliminar(id) {
   
    if (!confirm("Estas seguro que deseas eliminar al usuario?")) {  
        return;
    }

    $.ajax({
        type:"POST",
        url:"delete.php",
        data:{
            "id":id,
        },
        beforeSend:function () {
            
        },
        success:function (response) {
            
            response =  JSON.parse(response)
            if (response.status == "success") {
                $("#fila-"+id).addClass("d-none")
            }
            alert(response.message)
        },
        error:function (err) {
            console.log(err)
        }
    })

}

// $(".btn-danger").click(function () {
    
   
// })