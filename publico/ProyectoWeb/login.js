function leerXML() {
    // lee desde GitHub.
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        miFuncion(this);
      }
    };
    xhr.open("GET", "https://pmolina4.github.io/Proyecto_Pablo/publico/ProyectoWeb/xml/registrados.xml", true);
    xhr.send();
  }

  function miFuncion(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("usuario");
    var checking = false;
    var nombreUsuario = document.getElementById("usuarioLogin").value;
    var passwordUsuario = document.getElementById("contrasenaLogin").value;
    for (i = 0; i < x.length; i++) {
        if (x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue == nombreUsuario) {
            if (x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue == passwordUsuario) {
                checking = true;
                if (typeof(Storage) !== 'undefined') {
                    sessionStorage.setItem("usuario",nombreUsuario);
                } else {
                    alert("El navegador no es compatible con SessionStorage.")
                }
                break;
            }
          }
        }
        if(checking==true){
            alert("Bienvenido, "+ nombreUsuario)
            window.location.href = "index.html";
          }
        }

        function checking(){
            if(sessionStorage.getItem("usuario").length>0){
              document.getElementById("login").style.display="none";
              document.getElementById("logout").style.display="inline-block";
              document.getElementById("usuariolog").innerHTML = sessionStorage.getItem("usuario");
            }
          }
          window.onload = function launch(){
            checking();
          }
      
          function logOut() {
            if (typeof (Storage) !== "undefined") {
        if(confirm("¿Estás seguro?")){
                sessionStorage.removeItem("usuario");
        location.reload();
            } 
            return false;
        }
  }