/*Hansel Pérez_100323660*/

/*Funcion que se llama cuando se hace clic en "Validar"*/
function validarCedula() {
    const cedulaInput = document.getElementById("cedula");
    const resultadoElement = document.getElementById("resultado");
    const cedula = cedulaInput.value;

    if (validarCedulaModulo10(cedula)) {
        resultadoElement.textContent = "Cédula válida.";
        resultadoElement.classList.add("válida");
    } else {
        resultadoElement.textContent = "Cédula inválida.";
        resultadoElement.classList.add("inválida");
    }
}

function validarCedulaModulo10(cedula) {
    if (cedula.length !== 11) {
        return false; // La cédula debe tener 11 dígitos
    }
    const cedulaArray = cedula.split("").map(Number).reverse();
    const suma = cedulaArray.reduce(function (acumulado, digito, index) {
        if (index % 2 === 1) {
            let doble = digito * 2;
            if (doble > 9) {
                doble -= 9;
            }
            return acumulado + doble;
        } else {
            return acumulado + digito;
        }
    }, 0);

    return suma % 10 === 0;
}
