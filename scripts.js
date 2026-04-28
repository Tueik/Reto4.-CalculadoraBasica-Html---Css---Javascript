
let acumulado = "";
let cantidad1;
let cantidad2;
let operador;
let resultado;
let existe_resultado = false;
let seleccionando_operador = false;
let repetir_operacion = false;
let nueva_operacion = false;


const pantalla = document.querySelector("#pantalla_resultado");
const botones = document.querySelectorAll('input[type="button"]');

function limpiar() {

    acumulado = "";
    cantidad1 = "";
    cantidad2 = "";
    operador = "";
    resultado = "";
    existe_resultado = false;
    seleccionando_operador = false;
    repetir_operacion = false;
    nueva_operacion = false;

}

function operacion(operador, n1, n2) {

    let resultado_operacion;

    if (operador == " + ") {
        resultado_operacion = n1 + n2;
        resultado_operacion = Math.trunc(resultado_operacion);
        return resultado_operacion;
    }

    if (operador == " - ") {
        resultado_operacion = n1 - n2;
        resultado_operacion = Math.trunc(resultado_operacion);
        return resultado_operacion;
    }

    if (operador == " x ") {

        resultado_operacion = n1 * n2;
        resultado_operacion = Math.trunc(resultado_operacion);
        return resultado_operacion;
    }

    if (operador == " / ") {
        
        if (n1 == 0 && n2 == 0){
            alert("Alerta: No se puede dividir entre 0");
            limpiar();
            return 0;
        } else {
            resultado_operacion = n1 / n2;
            resultado_operacion = Math.trunc(resultado_operacion);
            return resultado_operacion;
        }

        return resultado_operacion;
    }


}

for (const boton of botones) {
    boton.addEventListener("click", function () {
        const botonApretado = boton.getAttribute("value");

        if (botonApretado == " + " || botonApretado == " - " || botonApretado == " x " || botonApretado == " / ") {
            pantalla.setAttribute("value", botonApretado)


            //console.log(Number.isInteger(cantidad1));

            if (!Number.isInteger(cantidad1)) { // Si sí esta vacío

                if (existe_resultado) {



                    if (repetir_operacion) {
                        operador = botonApretado;
                        seleccionando_operador = true;

                        if (acumulado == "") {

                            nueva_operacion = true;
                        }

                        cantidad2 = resultado; // 30 = 30 




                    } else {

                        operador = botonApretado;
                        seleccionando_operador = true;

                        cantidad1 = resultado;
                        existe_resultado = false;

                    }


                } else { // Flujo normal
                    operador = botonApretado;
                    seleccionando_operador = true;

                    cantidad1 = parseInt(acumulado);

                    acumulado = "";

                }

            } else { // No está vacío

                if (seleccionando_operador) { // Actualización Operador

                    operador = botonApretado;
                    seleccionando_operador = true;



                } else {

                    cantidad2 = parseInt(acumulado);

                    cantidad1 = operacion(operador, cantidad1, cantidad2);

                    operador = botonApretado;

                    acumulado = "";
                    cantidad2 = "";
                }


            }


        } else if (botonApretado == " = ") {


            if (seleccionando_operador) {

                if (cantidad2 == undefined){

                    cantidad2 = cantidad1;
                    resultado = operacion(operador, cantidad1, cantidad2);
                    pantalla.setAttribute("value", resultado);
                    existe_resultado = true;
                    seleccionando_operador = false;
                } else {
                    // Cuando se entra a este bloque, se intuye que el usuario quiere aplicar un operador sobre el mismo resultado,
                    // por lo que se asigna a 'cantidad2' el mismo valor que tiene 'cantidad'1
                    cantidad1 = cantidad2; // "" = 5
                    resultado = operacion(operador, cantidad1, cantidad2);
                    pantalla.setAttribute("value", resultado);
    
                    acumulado = "";
                    cantidad1 = "";
    
                    existe_resultado = true;
                    seleccionando_operador = false;
                }


            } else if (existe_resultado) {

                if (nueva_operacion) {
                    
                    nueva_operacion = false;
                    repetir_operacion = false;
                    cantidad1 = parseInt(acumulado); // 1

                    resultado = operacion(operador, cantidad1, cantidad2); // +, 1, 400
                    cantidad2 = cantidad1; // Guardamos el último valor

                    pantalla.setAttribute("value", resultado);
                    cantidad1 = "";
                    acumulado = "";

                } else {

                    resultado = operacion(operador, resultado, cantidad2);
                    pantalla.setAttribute("value", resultado);

                    repetir_operacion = true;
                }

            } else {

                cantidad2 = parseInt(acumulado);
                resultado = operacion(operador, cantidad1, cantidad2);
                pantalla.setAttribute("value", resultado);

                acumulado = "";
                cantidad1 = "";

                existe_resultado = true;

            }


        } else if (botonApretado == "C") {
            pantalla.setAttribute("value", " ");
            limpiar();


        } else { // ## Bloque Entrada Números ##

            seleccionando_operador = false;

            if (repetir_operacion) {
                repetir_operacion = false;

            } else if (existe_resultado && repetir_operacion == false) {
                existe_resultado = false;
                limpiar();
            }

            acumulado = acumulado + botonApretado;
            pantalla.setAttribute("value", acumulado);
            
        }



    });

}




