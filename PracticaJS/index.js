


function mostrar(){
    let Color= document.getElementById("Color")
    let Memoria= document.getElementById("Memoria")
    let Cantidad= document.getElementById("Cantidad")
    let Boton= document.getElementById("Boton")
    let Resultado= document.getElementById("result")
    console.log(Color.value)
    var Precio = 0
    var resultado = 0
    if (Memoria.value == "128"){
        Precio = 150000
        
    } 
    else if(Memoria.value == "256"){
        Precio = 165000
    }
    else if (Memoria.value == "512"){
        Precio = 180000
    }

    resultado = Precio*Cantidad.value
    document.getElementById("result").innerHTML = "$ " + resultado    

}





