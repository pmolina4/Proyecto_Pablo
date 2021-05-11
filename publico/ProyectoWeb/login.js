function validar() {

    if (window.XMLHttpRequest) {

        // Objeto para IE7+, Firefox, Chrome, Opera, Safari

        xmlhttp = new XMLHttpRequest();

    } else {

        // Objeto para IE6, IE5

        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    }

    // Abrimos el archivo que esta alojado en el servidor cd_catalog.xml

    xmlhttp.open("GET", "registrados.xml", false);

    xmlhttp.send();



    // Obtenemos un objeto XMLDocument con el contenido del archivo xml del servidor

    xmlDoc = xmlhttp.responseXML;



    // Obtenemos todos los nodos denominados usuario del archivo xml

    var foros = xmlDoc.getElementsByTagName("usuario");



    // Hacemos un bucle por todos los elementos usuario

    for (var i = 0; i < foros.length; i++) {

        // Del elemento usuario, obtenemos del primer elemento denominado "nombre"

        // el valor del primer elemento interno

        titulo = foros[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue



        url = foros[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue
 


        document.write("<div>");

        document.write("<span>");

        document.write(nombre);

        document.write("</span><span>");

        document.write(clave);

        document.write("</span>");

        document.write("</div>");

    }
}