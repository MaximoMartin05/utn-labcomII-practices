function calculatePrice() {
  var selectColor = document.querySelector("#colorSelector");
  var valorColor = selectColor.value;

  var selectCapacidad = document.querySelector("#capacidadSelector");
  var valorCapacidad = selectCapacidad.value;

  var selectCantidad = document.querySelector("#cantidad");
  var valorCant = selectCantidad.value;

  
  if (valorColor == "0" || valorCapacidad == "0" || valorCant == "0") {
    var existingP = document.querySelector("#result1 p");
    var existingDiv = document.querySelector("#result1 div");
    var contenido
    if (existingDiv) {
      existingP.remove();
      existingDiv.remove();
    }
    switch(validarCamposVacios(valorColor, valorCapacidad, valorCant)) {
      case 1:
        contenido = "Faltan completar todos los campos"
        break
      case 2:
        contenido = "Falta de completar el campo de color"
        break
      case 3:
        contenido = "Falta de completar el campo de capacidad"
        break
      case 4:
        contenido = "Falta de completar el campo de cantidad"
        break
      default:
        break
    }
    var newDiv = document.createElement("div");
    newDiv.classList.add("modalContainerError");
    var newP = document.createElement("p");
    newP.classList.add("modalP");
    var newContent = document.createTextNode(
      contenido
    );
    newP.appendChild(newContent);
    newDiv.appendChild(newP);
    document.getElementById("result1").appendChild(newDiv);
  } else {
    backgroundColor = document.getElementById("fondo");
    colorGrafito = "#1C1C1C";
    colorSierra = "#4e3b31";
    colorSilver = "#c0c0c0";
    colorGold = "#CFB53B";

    var precio;
    var existingP = document.querySelector("#result1 p");
    var existingDiv = document.querySelector("#result1 div");
    if (existingDiv) {
      existingDiv.remove();
      existingP.remove();
    }
    switch (valorColor) {
      case "grafito":
        backgroundColor.style.backgroundColor = colorGrafito;

        break;
      case "sierra":
        backgroundColor.style.backgroundColor = colorSierra;
        break;
      case "silver":
        backgroundColor.style.backgroundColor = colorSilver;
        break;
      case "gold":
        backgroundColor.style.backgroundColor = colorGold;
      default:
        break;
    }
    switch (valorCapacidad) {
      case "128":
        precio = 150000;
        break;
      case "256":
        precio = 165000;
        break;
      case "512":
        precio = 180000;
        break;
      default:
        break;
    }
    precio = precio * valorCant;
    document.getElementById("result").innerHTML = precio + "$";
    var newDiv = document.createElement("div");
    newDiv.classList.add("modalContainerSuccess");
    newDiv.classList.add("desaparecer")
    var newP = document.createElement("p");
    newP.classList.add("modalP");
    var newContent = document.createTextNode(
      "Ha completado todo correctamente"
    );
    newP.appendChild(newContent);
    newDiv.appendChild(newP);
    document.getElementById("result1").appendChild(newDiv);
    setTimeout(() => {
      var existingP = document.querySelector("#result1 p");
      var existingDiv = document.querySelector("#result1 div");
      existingDiv.remove();
      existingP.remove();
    }, 3000)
  }
}

function limpiar() {
  document.querySelector("#colorSelector").value = "0";

  document.querySelector("#capacidadSelector").value = "0";

  document.querySelector("#cantidad").value = "0";

  document.getElementById("result").innerHTML = "Resultado cotización o error";
  document.getElementById("fondo").style.backgroundColor = "";

  var existingP = document.querySelector("#result1 p");
  var existingDiv = document.querySelector("#result1 div");
  if (existingDiv) {
    existingDiv.remove();
    existingP.remove();
  }
  var productImage = document.getElementById("productImage")
  productImage.setAttribute("src", "celDefault.jpg")
}


function validarCamposVacios (valorColor, valorCapacidad, valorCant) {
  var numCampo

  if (valorColor == "0" & valorCapacidad == "0" & valorCant == "0") {
    numCampo = 1
    return numCampo
  } else if (valorColor == "0") {
    numCampo = 2
  }else if (valorCapacidad == "0") {
    numCampo = 3
  } else if (valorCant == "0") {
    numCampo = 4
  } else {
    numCampo = 5
  }
  return numCampo
}

function changeProductImage() {
  var selectCapacidad = document.querySelector("#capacidadSelector");
  var valorCapacidad = selectCapacidad.value;
  var productImage = document.getElementById("productImage")

  // switch (valorCapacidad) {
  //   case "128":
  //     productImage.src = "cel.jpg"
  //     break;
  //   case "256":
  //     productImage.src = "cel1.jpg"
  //     break;
  //   case "512":
  //     productImage.src = "cel2.jpg"
  //     break;
  //   default:
  //     break;
  // }

  switch(valorCapacidad) {
    case "128":
      productImage.setAttribute("src", "cel.jpg")
      break;
    case "256":
      productImage.setAttribute("src", "cel1.jpg")
      break;
    case "512":
      productImage.setAttribute("src", "cel2.jpg")
      break;
    default:
      break;
  }

}

function changeColor() {
  var selectColor = document.querySelector("#colorSelector");
  var valorColor = selectColor.value;
  backgroundColor = document.getElementById("fondo");
    colorGrafito = "#1C1C1C";
    colorSierra = "#4e3b31";
    colorSilver = "#c0c0c0";
    colorGold = "#CFB53B";
  switch (valorColor) {
      case "grafito":
        backgroundColor.style.backgroundColor = colorGrafito;
        break;
      case "sierra":
        backgroundColor.style.backgroundColor = colorSierra;
        break;
      case "silver":
        backgroundColor.style.backgroundColor = colorSilver;
        break;
      case "gold":
        backgroundColor.style.backgroundColor = colorGold;
      default:
        break;
    }
}
