function mostrarDatos(){
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const domicilio = document.getElementById("domicilio")
const curso = document.getElementById("curso")
const carrera = document.getElementById("carrera")
const materia = document.getElementById("materia")
const nota = document.getElementById("nota")
const mostrarDatos = document.getElementById("mostrarDatos")

 
 

    mostrarDatos.innerHTML = `<p> ${nombre.value} </p>
     <p> ${apellido.value} </p>
     <p> ${domicilio.value} </p>
     <p> ${curso.value} </p>
     <p> ${carrera.value} </p>
     <p> ${materia.value} </p>
     <p> ${nota.value} </p>`
}