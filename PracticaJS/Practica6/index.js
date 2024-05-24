function concatenar(){
    let nombre = document.getElementById("nombre")
    let apellido = document.getElementById("apellido")
    nombre = nombre.value+apellido.value

    document.getElementById("mostrar").innerHTML = nombre
}