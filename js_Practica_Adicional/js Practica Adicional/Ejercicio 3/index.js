function calcular() {
    var nombre = document.getElementById("nombre").value
    var cantPreguntas = document.getElementById("cantPreguntas").value
    var cantCorrectas = document.getElementById("cantCorrectas").value

    if(nombre == "" || cantPreguntas == "" || cantCorrectas == "" || cantCorrectas == "0"){
        alert("Complete los campos faltantes")
    } else {
        reglaDe3 = parseFloat((cantCorrectas * 100) / cantPreguntas)
        
        if(reglaDe3 >= 90) {
            document.getElementById("mostrar").innerHTML = "Nivel Superior " + cantCorrectas +" * 100 / "+cantPreguntas + "= " + reglaDe3
        } else if (reglaDe3 >= 75) {
            document.getElementById("mostrar").innerHTML = "Nivel Medio "+ cantCorrectas +" * 100 / "+cantPreguntas + "= " + reglaDe3
        } else if (reglaDe3 >= 50) {
            document.getElementById("mostrar").innerHTML = "Nivel Regular "+ cantCorrectas +" * 100 / "+cantPreguntas + "= " + reglaDe3
        } else {
            document.getElementById("mostrar").innerHTML = "Nivel Hipocrita "+ cantCorrectas +" * 100 / "+cantPreguntas + "= " + reglaDe3
        }
    }

    
}

function maximo() {
    var cantPreguntas = document.getElementById("cantPreguntas").value
    var cantCorrectas = document.getElementById("cantCorrectas")

    cantCorrectas.setAttribute("max", cantPreguntas)
}

function validar() {
    var cantPreguntas = document.getElementById("cantPreguntas").value
    var cantCorrectas = document.getElementById("cantCorrectas").value
    if (cantCorrectas > cantPreguntas) {
        alert("Ingrese un numero menor a la cantidad de preguntas")
        limpiar()
    }
}

function limpiar() {
    document.querySelector("#cantCorrectas").value = "0"
}

// Ejercicio 5

// function pedir() {
//     numero = prompt("Ingrese numero mayor a 0")

//     while (numero < 1) {
//         numero = prompt("Ingrese numero mayor a 0")
//     } 
//     alert(numero)
    
// }