let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function sendMail(form) {
    var message = encodeURIComponent(form.message.value);//Codifica el contenido del <textarea> para que los espacios y otros caracteres especiales se representen correctamente en la URL
    var email = "mailto:sanbus.emma@hotmail.com?subject=Mensaje%20desde%20la%20web&body=" + message;
    window.location.href = email;//Redirige al usuario a la aplicación de correo con el mensaje codificado correctamente
    return false; // Prevenir el envío del formulario normal
}
