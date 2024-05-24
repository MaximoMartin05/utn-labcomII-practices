var operandoA
var operandoB
var operacion
var auxiliar

auxiliar = ""



function uno() {
    resultado.textContent = resultado.textContent + "1"
    auxiliar += "1"
}
function dos() {
    resultado.textContent = resultado.textContent + "2"
    auxiliar += "2"
}
function tres() {
    resultado.textContent = resultado.textContent + "3"
    auxiliar += "3"
}
function cuatro() {
    resultado.textContent = resultado.textContent + "4"
    auxiliar += "4"
}
function cinco() {
    resultado.textContent = resultado.textContent + "5"
    auxiliar += "5"
}
function seis() {
    resultado.textContent = resultado.textContent + "6"
    auxiliar += "6"
}
function siete() {
    resultado.textContent = resultado.textContent + "7"
    auxiliar += "7"
}
function ocho() {
    resultado.textContent = resultado.textContent + "8"
    auxiliar += "8"
}
function nueve() {
    resultado.textContent = resultado.textContent + "9"
    auxiliar += "9"
}
function cero() {
    resultado.textContent = resultado.textContent + "0"
    auxiliar += "0"
}


function suma() {
    resultado.textContent += " + "

    operandoA = auxiliar
    operacion = "+"
    limpiar()
}
function resta() {
    resultado.textContent += " - "

    operandoA = auxiliar
    operacion = "-"
    limpiar()
}
function division() {
    resultado.textContent += " / "

    operandoA = auxiliar
    operacion = "/"
    limpiar()
}
function multiplicar() {
    resultado.textContent += " * "

    operandoA = auxiliar
    operacion = "*"
    limpiar()
}


function limpiar(){
    auxiliar = ""
}

function reset (){
    resultado.textContent = ""
    auxiliar = ""
    operandoA = 0
    operandoB = 0
    operacion = ""
}

function calcular(){
    operandoB = auxiliar
    resultado.textContent = ""
    switch (operacion) {
        case "+":
            resultado.textContent = parseFloat(operandoA) + parseFloat(operandoB)

            break;
        
        case "-":
            resultado.textContent = parseFloat(operandoA) - parseFloat(operandoB)
            break;
        
        case "*":
            resultado.textContent = parseFloat(operandoA) * parseFloat(operandoB)
            break;

        case "/":
            resultado.textContent = parseFloat(operandoA) / parseFloat(operandoB)
            break;
        default:
            break;
    }
    operandoB = ""
    operandoA = ""
    auxiliar = resultado.textContent
}