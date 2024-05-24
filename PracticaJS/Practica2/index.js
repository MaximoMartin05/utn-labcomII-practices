function calcular(){
    let Numero1 = document.getElementById("numero1")   
    let Numero2 = document.getElementById("numero2")
    
    
    var suma = parseInt(Numero1.value) + parseInt(Numero2.value)
    if(suma<0){
        suma = suma*-1
    }

    document.getElementById("parrafo").innerHTML = suma

}