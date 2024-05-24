function mayor(){
    var numeros = {
        numero1: document.getElementById("numero1"),
        numero2: document.getElementById("numero2")

    }

    if ( numeros.numero1.value > numeros.numero2.value){
        alert("Es mayor: "+ numeros.numero1.value)
    }
    else{
        alert("Es mayor: "+ numeros.numero2.value)
    }
    

    
}