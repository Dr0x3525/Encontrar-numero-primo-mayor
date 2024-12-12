console.log("Aplicacion de numeros primos menores");
console.log("Características de un número primo:");
console.log("1.El número debe ser mayor que 1");
console.log("2.El número solo debe ser divisible entre 1 y él mismo (sin dejar residuo).");
console.log("Si el numero es decimal se tomara el valor aproximado")

let numero =  prompt("Escribe un numero")
let numeroentero = parseInt(numero)

console.log(typeof(numero))

if (numeroentero === 1) {
    console.log("el numero 1 no es valido")
}

if (numeroentero === 2) {
    numeroentero = 1
    console.log("el numero 2 es el primo mas pequeño")
}

if (Number.isInteger(numeroentero) && numeroentero > 0) {



        for (let dividendo = numeroentero-1; 1 <= dividendo; dividendo--) {

        let boton = false
    
    
        for (let divisior = dividendo-1; 1< divisior; divisior--) {
            //console.log("numero o "+ divisior)
            
            residuo = dividendo%divisior
            //10
            //console.log(residuo)
    
    
    
            if (residuo == 0) {
                boton = true
                //console.log("este es "+ boton)
    
            }
    
    
    
    
        }
    
        //console.log("esteboton"+ boton)
    
        if (boton == false) {
            if (dividendo != 1) {
                console.log("el numero "+ dividendo + " es un primo menor que "+ numeroentero)
            } else {
                boton = true

            }

        }
    
    }


}

else {
    console.log(numero + " no es un numero entero")
}



