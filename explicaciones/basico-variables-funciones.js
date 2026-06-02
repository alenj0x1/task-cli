"use strict";
// Uso comun de tipos en condicionales, parametros y funciones
function suma(primerNumero, segundoNumero, debeImprimir) {
    if (debeImprimir == true) {
        console.log(primerNumero + segundoNumero);
        return;
    }
    return primerNumero + segundoNumero;
}
let primerNumero = 10; // Ambito de bloque
primerNumero = 20;
var segundoNumero = 20; // Global
segundoNumero = 30;
const tercerNumero = 10;
// suma(1, 4); // 5
// suma(primerNumero, tercerNumero, true); // 20
/**
 * Trabajando, con let y var
 */
var nombre = "Alejandro"; // Global -- No se debe usar. Para evitar, comportamientos, no esperados.
function cambiarNombre() {
    nombre = "Pedro";
}
function cambiarNombreConLet(nombre, nuevoNombre) {
    let resultado = nuevoNombre; // Siempre, va a poder trabajar con valores, y estos valores, se mantendrán unicamente aqui. En este caso, en esta función.
    return resultado;
}
cambiarNombre();
console.log(nombre);
