
let acumulado = "";
let cantidad1;
let cantidad2;
let operador;
let resultado;
let existe_resultado = false;
let seleccionando_operador = false;
let repetir_operacion = false;
let nueva_operacion = false;


const pantalla2 = document.querySelector("#pantalla_secuencia");
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
    
}

function operacion(operador, n1, n2) {

    let resultado_operacion;

    if (operador == " + ") {
        console.log(resultado_operacion = n1 + n2);
        console.log("Desde operación: " + n1 );
        console.log("Desde operación: " + n2 );
        return resultado_operacion;
    }

    if (operador == " - ") {
        console.log(resultado_operacion = n1 - n2);
        return resultado_operacion;
    }

    if (operador == " x ") {
        console.log("Desde operación: " + n1 );
        console.log("Desde operación: " + n2 );

        console.log(resultado_operacion = n1 * n2);
        return resultado_operacion;
    }

    if (operador == " / ") {
        console.log(resultado_operacion = n1 / n2);
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
                    console.log("desde c1 vacio");

                    
                    if (repetir_operacion){
                        operador = botonApretado;
                        seleccionando_operador = true;

                        if(acumulado == ""){
                            console.log("acumulado en last"+acumulado);
                            nueva_operacion = true;                        
                        }

                        cantidad2 = resultado; // 30 = 30 
                        console.log("Desde el pinche pedo: " + acumulado);

                        console.log("Desde if (repetir_operacion): ");
                        console.log(" cantidad1 : " + cantidad1);
                        console.log(" operador: " + operador);
                        console.log(" cantidad2: " + cantidad2);
                        console.log(" resultado: " + resultado);
                        console.log(" repetir_operacion: " + repetir_operacion);
                        console.log(" existe_resultado: " + existe_resultado);
                        console.log(" seleccionando_operador: " + seleccionando_operador);
                        
                    } else {
                        
                        operador = botonApretado;
                        seleccionando_operador = true;
    
                        cantidad1 = resultado;
                        existe_resultado = false;
                        console.log("desde boolean: " + acumulado);
                        console.log("desde: if (existe_resultado)");
                        console.log(" cantidad1 : " + cantidad1);
                        console.log(" operador: " + operador);
                        console.log(" cantidad2: " + cantidad2);
                        console.log(" resultado: " + resultado);
                    }
                    

                } else {
                    operador = botonApretado;
                    seleccionando_operador = true;
                    console.log(seleccionando_operador);
                    console.log(operador);
                    cantidad1 = parseInt(acumulado);
                    console.log(cantidad1);
                    acumulado = "";

                }

            } else { // No está vacío

                console.log("acumulado desde simbolos: " + acumulado);
                if (seleccionando_operador) { // Actualización Operador
                    console.log("Desde actualización operador: ")
                    console.log(" operador antes: " + operador);
                    operador = botonApretado;
                    console.log(" operador actualizado: " + operador);
                    console.log(" cantidad1 : " + cantidad1);
                    console.log(" operador: " + operador);
                    console.log(" cantidad2: " + cantidad2);
                    console.log(" resultado: " + resultado);


                } else {
                    console.log("desde bloque operacion");
                    cantidad2 = parseInt(acumulado);
    
                    console.log("desde else cantidad1 : " + cantidad1);
                    console.log("desde operador: " + operador);
                    console.log("desde cantidad2: " + cantidad2);
    
    
                    cantidad1 = operacion(operador, cantidad1, cantidad2);
    
                    operador = botonApretado;
                    console.log(botonApretado);
    
                    acumulado = "";
                    cantidad2 = "";
                }


            }


        } else if (botonApretado == " = ") {
            
            
            if (seleccionando_operador){
                console.log("Evaluando desde if (seleccionando_operadoor) =: ");
                
                console.log("operador: "+operador);
                console.log("cantidad1: "+cantidad1);
                console.log("cantidad2: "+cantidad2);
                
                // Cuando se entra a este bloque, se intuye que el usuario quiere aplicar un operador sobre el mismo resultado,
                // por lo que se asigna a 'cantidad2' el mismo valor que tiene 'cantidad'1
                cantidad1 = cantidad2; // "" = 5
                resultado = operacion(operador, cantidad1, cantidad2);
                pantalla.setAttribute("value", resultado);
                
                acumulado = "";
                cantidad1 = "";
                
                existe_resultado = true;
                seleccionando_operador = false;
               

                  console.log(resultado);
                  

            } else if (existe_resultado) {
                
                if (nueva_operacion){
                    console.log("=======aqui andamos bro");
                    console.log(" operador: ");
                    console.log(operador);
                    console.log(" cantidad1: ");
                    console.log(cantidad1);
                    console.log(" cantidad2: ");
                    console.log(cantidad2);
                    console.log(" resultado: ");
                    console.log(resultado);
                    console.log(" existe_resultado: "+existe_resultado);
                    console.log(" repetir_operacion: "+repetir_operacion);
                    console.log(acumulado);
                    nueva_operacion = false;
                    repetir_operacion = false;
                    cantidad1 = parseInt(acumulado); // 1
                    
                    resultado = operacion(operador, cantidad1, cantidad2); // +, 1, 400
                    cantidad2 = cantidad1; // Guardamos el último valor


                    pantalla.setAttribute("value", resultado);
                    cantidad1 = "";
                    acumulado = "";
                    
                } else {

                    console.log("Evualuando desde if (existe_resultado) =: ");
                    console.log(" operador: "+operador);
                    console.log(" cantidad1: "+cantidad1);
                    console.log(" cantidad2: "+cantidad2); // 400
                    console.log(" resultado: "+resultado); // 401
    
                
                    resultado = operacion(operador, resultado, cantidad2);
                    pantalla.setAttribute("value", resultado);
                
                    console.log("Evaluando después de igual = después de operación");
                    console.log(" operador: "+operador);
                    console.log(" cantidad1: "+cantidad1);
                    console.log(" cantidad2: "+cantidad2);
                    console.log(" resultado: "+resultado);
                    console.log(" existe_resultado: "+existe_resultado);
                    console.log(" repetir_operacion: "+repetir_operacion);
    
                    repetir_operacion = true;
                }

            } else {
                console.log(acumulado);
                console.log("desde igual");

                cantidad2 = parseInt(acumulado);
                resultado = operacion(operador, cantidad1, cantidad2);
                pantalla.setAttribute("value", resultado);
    
                console.log("pre acumulado: " + acumulado)

                acumulado = "";

                console.log("post reseteo acumulado: " + acumulado)
    
                console.log("precantidad1: " + cantidad1);

                cantidad1 = "";

                console.log("post cantidad1: " + cantidad1);
                console.log(resultado);

                existe_resultado = true;

            }

            
        } else if (botonApretado == "C"){
            pantalla.setAttribute("value", " ");
            limpiar();


        } else { // ## Bloque Entrada Números ##
            seleccionando_operador = false;
            console.log("desde acumulador existe_resultado:" + existe_resultado);
            
            if(repetir_operacion){
                repetir_operacion = false;
                console.log(acumulado);
            } else if (existe_resultado && repetir_operacion == false){
                existe_resultado = false;
                limpiar();
            }

            acumulado = acumulado + botonApretado;
            pantalla.setAttribute("value", acumulado);
            console.log("acumulado desde numeros: " + acumulado);
        }


        //pantalla2.setAttribute("value", acumulado);
        console.log("Salida bloque.");

    });

}




