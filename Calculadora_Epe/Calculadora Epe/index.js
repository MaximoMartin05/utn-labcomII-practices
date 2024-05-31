function calcular() {
    var tipo_usuario = document.querySelector('input[name="iva"]:checked')
    var zona_domicilio = document.getElementById("zona").value
    var cantidad = document.getElementById("cantidad").value
    const costo_servicio = 102
    var tipo_usuario_validado

    if (tipo_usuario) {
        tipo_usuario_validado = tipo_usuario.value

        if (zona_domicilio == "0" || cantidad == "") {
            alert("Completa los campos vago")
        } else {
            Total = costo_servicio + (cantidad * zona_domicilio) * (1 + tipo_usuario_validado)

            alert("$" + Total)
        }
    }else {
        alert("Falta tipo de usuario")
    }

}