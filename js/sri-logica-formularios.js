/**
 * Created by AdrianDsktp on 10/14/2017.
 */
var master_UrlFormularios = {
    puerto: ':3000',
    ip: 'http://localhost',
    metodo: '/formulario',
    obtenerUrl: function () {
        return this.ip + this.puerto + this.metodo
    }
};
var sri_identificador_html_Formularios = '#sri-formularios';
var sri_formularios = [];
var sri_formularios_app;
function requestHtpp(metodo, nombre, cb) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(null, this.responseText);
        }
        if (this.readyState == 4 && this.status != 200) {
            cb(this.responseText);
        }
    };
    xhttp.open(metodo, nombre, true);
    xhttp.send();

}

function empezarAplicacionFormularios() {
    sri_formularios_app = new Vue({
        el: sri_identificador_html_Formularios,
        data: {
            formularios: sri_formularios
        }
    })

}

requestHtpp('GET', master_UrlFormularios.obtenerUrl(), function (error, datos) {

    if (error) {
        console.log('Error', error);
    } else {
        sri_formularios = JSON.parse(datos);
        empezarAplicacionFormularios();
    }

});


