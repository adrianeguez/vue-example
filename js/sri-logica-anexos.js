/**
 * Created by AdrianDsktp on 10/14/2017.
 */
var master_UrlAnexos = {
    puerto: ':3000',
    ip: 'http://localhost',
    metodo: '/anexos',
    obtenerUrl: function () {
        return this.ip + this.puerto + this.metodo
    }
};
var sri_identificador_html_Anexos = '#sri-anexos';
var sri_anexos = [];
var sri_anexos_app;
function requestHtpp(metodo, nombre, cb) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            cb(null, this.responseText);
        }
        if (this.readyState == 4 && this.status != 200) {
            cb(this.responseText);
        }
    };
    xhttp.open(metodo, nombre, true);
    xhttp.send();

}

function empezarAplicacionAnexos() {
    sri_anexos_app = new Vue({
        el: sri_identificador_html_Anexos,
        data: {
            anexos: sri_anexos
        }
    })

}

requestHtpp('GET', master_UrlAnexos.obtenerUrl(), function (error, datos) {
    if (error) {
        console.log('Error', error);
    } else {
        sri_anexos = JSON.parse(datos);
        empezarAplicacionAnexos();
    }

});


