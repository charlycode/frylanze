//Ajax para un Login con Jquery
$(function(){
    $('#form-login').submit(function(e){
        e.preventDefault();

        $.post('http://127.0.0.1:8090/JEM/login',$(this).serialize(), function(respuesta){
            if(respuesta.error_email){
                var error_email= '<div class="error_email">' + 'El email no tiene la estructura correcta!' + '</div>'
                 
                 $('.login-form .error_email').remove();
                 $('.login-form .error').remove();

                $('.login-link').before(error_email);
                
            
            } else if(respuesta.error){
                var error= '<div class="error">' + 'El email y/o contraseña son incorrectos!' + '</div>'
                 
                 $('.login-form .error').remove();
                 $('.login-form .error_email').remove();

                $('.login-link').before(error);
                            
            } else {
                  var url = "http://127.0.0.1:8090/JEM"

                  $(location).attr('href',url);
            }
        }, 'json');
    });
});



