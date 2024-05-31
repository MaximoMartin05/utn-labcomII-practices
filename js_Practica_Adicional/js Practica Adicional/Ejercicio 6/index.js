let password = "maxi123"
var contador = 0

function validar() {

    var contra = document.getElementById("clave").value
    var mostrar = document.getElementById("mostrar")
    var boton = document.getElementById("boton")
    var clave = document.getElementById("clave")
    if (contra == password) {
        mostrar.innerHTML = "Ingreso Correctamente"
        mostrar.style.backgroundColor = "green"
    } else {
        contador = contador + 1
        mostrar.innerHTML = "Contraseña Invalida"
        mostrar.style.backgroundColor = "red"
    }

    if (contador >= 3) {
        alert("INTRUSO se bloqueo su cuenta por 30 segundos")
        setTimeout(() => {
            boton.setAttribute("disabled", "");
            clave.setAttribute("disabled", "");
        }, 0)

        var tiempo = 30000
        setTimeout(() => {
            boton.removeAttribute("disabled");
            clave.removeAttribute("disabled");
        }, tiempo)
        contador = 0
    }
}