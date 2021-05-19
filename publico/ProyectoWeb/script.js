//Ejecución de funciones según la acción
window.addEventListener("resize", anchoPagina);

//declaración de variables
var contenedor_login_register = document.querySelector(".login-register")
var formulario_login = document.querySelector(".formulario-login")
var formulario_register = document.querySelector(".formulario-registrar")
var cajaTrasera_Login = document.querySelector(".cajaTrasera-Login")
var cajaTrasera_Register = document.querySelector(".cajaTrasera-Register")





//Recicheise
function anchoPagina() {
    if (window.innerWidth > 850) {
        cajaTrasera_Login.style.display = "block";
        cajaTrasera_Register.style.display = "block";
    } else {
        cajaTrasera_Register.style.display = "block";
        cajaTrasera_Register.style.opacity = "1";
        cajaTrasera_Login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

anchoPagina();

function IniciarSesion() {

    if (window.innerWidth > 850) {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        cajaTrasera_Register.style.opacity = "1";
        cajaTrasera_Login.style.opacity = "0";
    } else {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        cajaTrasera_Register.style.display = "block";
        cajaTrasera_Login.style.display = "none";
    }
}

function registrar() {

    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        cajaTrasera_Register.style.opacity = "0";
        cajaTrasera_Login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        cajaTrasera_Register.style.display = "none";
        cajaTrasera_Login.style.display = "block";
        cajaTrasera_Login.style.opacity = "1";
    }

}



