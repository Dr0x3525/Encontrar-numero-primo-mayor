
//informacion de que hace el programa
console.log("Aplicacion de numeros primos menores");
console.log("Características de un número primo:");
console.log("1.El número debe ser mayor que 1");
console.log("2.El número solo debe ser divisible entre 1 y él mismo (sin dejar residuo).");
console.log("Si el numero es decimal se tomara el valor aproximado")


//inicializacion de variables
let numero =  prompt("Escribe un numero")
let numeroentero = parseInt(numero)




//funciones

//funcion verificar que un numero sea valido

function verificarnumerovalido() {
    //console.log(typeof(numeroentero))
    //console.log(typeof(numero))
    //console.log(numeroentero)

    if (isNaN(numeroentero) || numero.includes(".") || numeroentero <= 0 ){
        console.log(numero + " no es un numero entero")
        return false

    } else {
        console.log("Numero correcto")
        return true
    }

}

// Función verificar si el número es 1

function verificarEsUno() {
    if (numeroentero === 1) {
        console.log("el numero 1 no es valido por las reglas anteriormente mencionadas")
    
    return false    
    }

    else {
        return true;
    }

}

// Función verificar si el número es 2

function verificarEsDos() {
    if (numeroentero === 2) {
        console.log("el numero 2 es el primo mas pequeño por ende no hay menores que el XD")
        return false    
    }

    else {
        return true;
    }
}

function encontrarNumerosPrimosMenores() {  
    for (let dividendo = numeroentero-1; dividendo >= 2; dividendo--) {

        let esCompuesto = false;
    
    
        for (let divisior = dividendo-1; 1< divisior; divisior--) {
            //console.log("numero o "+ divisior)
            
            let residuo = dividendo%divisior
            //console.log(residuo)
    
    
    
            if (residuo === 0) {
                esCompuesto = true
                divisior = 1
                //console.log("este es "+ boton)
            }
    
    
    
    
        }
    
        //console.log("esteboton"+ boton)
    
        if (esCompuesto === false) {
            if (dividendo != 1) {
                console.log("el numero "+ dividendo + " es un primo menor que "+ numeroentero)
            } else {
                esCompuesto = true

            }

        }
    
    }
}
//fin funciones

verificarnumerovalido(numeroentero);

if (numerovalido === true) {

    //verifica casos especiales
    verificarEsUno(numeroentero)
    verificarEsDos(numeroentero)


        //si todo es correcto empieza a iterar

    if (numerovalido === true) {
        encontrarNumerosPrimosMenores(numeroentero)
    }

}

