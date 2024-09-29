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
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("HTML");
        habilidades[1].classList.add("CSS");
        habilidades[2].classList.add("JavaScript");
        habilidades[3].classList.add("phyton");
        habilidades[4].classList.add("MySQL");
        habilidades[5].classList.add("oraclecloud");
        habilidades[6].classList.add("Creatividad");
        habilidades[7].classList.add("logica");
        habilidades[8].classList.add("capacidadrp");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("gestionproyectos");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


function sendMail(form) {
    var message = encodeURIComponent(form.message.value);//Codifica el contenido del <textarea> para que los espacios y otros caracteres especiales se representen correctamente en la URL
    var email = "mailto:emmanuel@emmanuelbustamante.com?subject=Mensaje%20desde%20la%20web&body=" + message;
    window.location.href = email;//Redirige al usuario a la aplicación de correo con el mensaje codificado correctamente
    return false; // Prevenir el envío del formulario normal
}
