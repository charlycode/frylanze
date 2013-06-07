function iniciar_XHR() {
    if(window.XMLHttpRequest){
        return new XMLHttpRequest();
    
    } else if(window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}

function comprobar() {
    var user = document.getElementById('usuario').value;
    var pass = document.getElementById('pass').value;
    var enviar = document.getElementById('enviar').value;
    peticion = iniciar_XHR();

    if(peticion){
        peticion.open("POST", "http://127.0.0.1:8090/JEM/login/index", true);
        peticion.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        peticion.send({usuario:user,password:pass});
        peticion.onreadystatechange = respuesta;

    }
}

function respuesta(){
    if(peticion.readyState == READY_STATE_COMPLETE){
        if(peticion.status == 200){
           var user = document.getElementById('usuario').value;
           var pass = document.getElementById('pass').value;
           var enviar = document.getElementById('enviar').value;
           var respuesta = peticion.responseText;
           alert(respuesta);

          /* if(respuesta.disponible == true){
             var center = document.getElementById('center');
                var error_user = document.createElement('div');
                var text_error = document.createTextNode('uiiiiiiiiiii');

                center.appendChild(error_user);
                error_user.appendChild(text_error);
                error_user.setAttribute('id', 'error_user');
           
           } else {
                var center = document.getElementById('center');
                var error_user = document.createElement('div');
                var text_error = document.createTextNode('El usuario esta bloqueado o no son correctos los datos');

                center.appendChild(error_user);
                error_user.appendChild(text_error);
                error_user.setAttribute('id', 'error_user');
                remove = document.getElementById('error_user');
                setTimeout("center.removeChild(remove);", 5000); 
           } */
        } else{
            alert(peticion.status + ' shido');
        }
    } else {
        alert(peticion.readyState + ' fallo');
    }
}