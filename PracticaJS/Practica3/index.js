function averiguar(){
   let numero = document.getElementById("numero")
   let parrafo = document.getElementById("parrafo")
    if (parseInt(numero.value) > 0){
        parrafo.innerHTML = "Numero Positivo"
    }
    else if (parseInt(numero.value)<0){
        parrafo.innerHTML = "Numero Negativo"
    
    }
    else {

        parrafo.innerHTML = "Numero Nulo"
    
    }
}