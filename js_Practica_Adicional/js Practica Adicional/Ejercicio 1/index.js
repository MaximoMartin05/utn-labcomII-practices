function calcular() {
    var numero1 = document.getElementById("numero1").value
    var numero2 = document.getElementById("numero2").value
    var numero3 = document.getElementById("numero3").value

    if (numero1 == "" || numero2 == "" || numero3 == "") {

        alert("Complete los campos faltantes")

    } else {
        numero1 = parseInt(numero1)
        numero2 = parseInt(numero2)
        numero3 = parseInt(numero3)

        if (numero1 == numero2 & numero1 == numero3 & numero2 == numero3) {
            document.getElementById("mostrar").innerHTML = "Los 3 numeros son iguales"
        } else if (numero1 == numero2 || numero1 == numero3 || numero2 == numero3){
            document.getElementById("mostrar").innerHTML = "2 numeros son iguales"
        }else{
            if (numero1 > numero2 & numero1 > numero3) {
                document.getElementById("mostrar").innerHTML = numero1 + " Es el mayor"
            } else if (numero2 > numero3) {
                document.getElementById("mostrar").innerHTML = numero2 + " Es el mayor"
            } else {
                document.getElementById("mostrar").innerHTML = numero3 + " Es el mayor"
            }
        }
    }
}