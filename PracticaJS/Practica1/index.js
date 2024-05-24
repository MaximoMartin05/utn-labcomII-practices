function cuenta(){
    let NumeroRecorrido= document.getElementById("numero")
    

    for (var i=0 ; i <= NumeroRecorrido.value; i++){
        
        
        document.getElementById("parrafo").innerHTML = i
        console.log(i)
        alert(i)

    }
}

