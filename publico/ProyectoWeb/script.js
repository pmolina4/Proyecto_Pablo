//Ejecución de funciones según la acción
window.addEventListener("resize", anchoPagina);

//declaración de variables
var contenedor_login_register = document.querySelector(".login-register")
var formulario_login = document.querySelector(".formulario-login")
var formulario_register = document.querySelector(".formulario-registrar")
var cajaTrasera_Login = document.querySelector(".cajaTrasera-Login")
var cajaTrasera_Register = document.querySelector(".cajaTrasera-Register")


var nombUsu = ["USR1", "USR2", "USR3", "USR4", "PABLO"];
var passUsu = ["CLAVE1", "CLAVE2", "CLAVE3", "CLAVE4", "MOLINA"];

nombUsu[5] = localStorage.getItem("usuario");//local no borra sesion si 
passUsu[5] = localStorage.getItem("pass");

var usuarioCheck = false; 

//Funciones


function crearRegistro() {
    var nuevoUsuario = document.getElementById("usuarioRegistro").value
    var nuevaContraseña = document.getElementById("contrasenaRegistro").value
    nombUsu.push(nuevoUsuario);
    passUsu.push(nuevaContraseña);
    localStorage.setItem("usuario", nuevoUsuario[5]);
    localStorage.setItem("pass", nuevaContraseña[5]);
}

function crearLogin() {
    var usuario = document.getElementById('usuarioLogin').value
    var password = document.getElementById('contrasenaLogin').value
    var posicion = 0;
    for (var i = 0; i < nombUsu.length; i++) {
        if (usuario == nombUsu[i]) {
            posicion = i;
        }
    }
    if (password == passUsu[posicion]) {
        alert("Bienvenido " + nombUsu[posicion] + " !!!!");
        usuarioCheck = true;
    } else {
        alert("contrseña incorrecta");
        usuarioCheck = false;
    }
}

//para escribir en html desde js
function escribiir(usuarioCheck) {
    document.getElementById('usuario_logeado').innerHTML = usuarioCheck + ' Bienvenido'
}


function escribir() {
   
}



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



