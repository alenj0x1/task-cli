const nombreDeUsuario: string = "alejandro";
const password: string = "1234";

let perfilDeTwitter: string | null = null;

function establecerPerfilDeTwitter(nuevoPerfil: string) {
    perfilDeTwitter = nuevoPerfil;
}

// null
// undefined
// unknown

console.log(`${nombreDeUsuario} - ${password} - ${perfilDeTwitter}`);

establecerPerfilDeTwitter("alejandro7853");

console.log(`${nombreDeUsuario} - ${password} - ${perfilDeTwitter}`);

const edad: string | number = "23";

const direccion: string = "Guayaquil";
const year: number = 2026;

// console.log(direccion + year);

function counter(currentNumber: number) {
    let newNumber = currentNumber += 1;
    return newNumber;
}

const newNumber = counter(0);

// console.log(newNumber);

// undefined, ocurre, cuando nosotros no controlamos, esa logica en concreto
// o cuando accedemos a una propiedad, o valor, que no existe

// null
// Cuando nosotros, controlamos nuestra logica de negocio
// y marcamos eso, como no existente

// Esta funcion, puede retornar, tanto string, como undefined
function processPayload(payload: unknown): string | null {
    // Le estoy dando una pista, de que el payload, en esa condicion, es de tipo numerico
    // Caso de cuando el payload, es numerico
    if (typeof payload == "number") {
        return `Respuesta del API (numerica): ${payload}`;
    }

    // Caso de cuando el payload, es numerico
    if (typeof payload == "string") {
        payload.substring(0)
        return `Respuesta del API (cadena de texto): ${payload}. Numero de caracteres: ${payload.length}`;
    }

    // // Caso de cuando el payload, es boolean
    // if (typeof payload == "boolean") {
    //     return `Respuesta del API (booleano): ${payload}`;
    // }

    return null;
}

const casoNumerico = processPayload(10);
const casoString = processPayload("Hola");
const casoBooleano = processPayload(true);

console.log(casoNumerico);
console.log(casoString);
console.log(casoBooleano);

function decirHola(nombreDePersona: string): string | void {
    console.log(`Hola, ${nombreDePersona}, tu nombre tiene ${nombreDePersona.length} caracteres`)
}

// function otra(nombre: unknown) {
//     nombre.asd.asd.asd.asd.asd;
// }
// otra("hola")

decirHola("Alejandro");
