"use strict";
// interface RespuestaCorrecta {
//     ok: true;
//     data: string;
//     timestamp: Date;
// }
function consultarUsuarios() {
    return {
        errors: [],
        data: [
            {
                nombre: "Alejandro",
                apellido: "Rodriguez"
            },
            {
                nombre: "Mateo",
                apellido: "Martinez"
            },
            {
                nombre: "Carmen",
                apellido: "Martinez"
            }
        ],
        message: "Usuarios consultados",
        timestamp: new Date()
    };
}
const usuarios = consultarUsuarios();
// asincrono - Segundo plano
// callback (param1, param2) => {}
const transform = usuarios.data.forEach((usuario) => {
    return {
        name: `${usuario.nombre} ${usuario.apellido}`
    };
});
console.log(transform);
// sincrono - Bloqueante
for (const usuario of usuarios.data) {
    console.log(usuario);
}
const usuariosConNombreYApellidos = usuarios.data.map(usuario => {
    return {
        name: `${usuario.nombre} ${usuario.apellido}`
    };
});
console.log(usuariosConNombreYApellidos);
console.log("Usuarios consultados");
// Unir a los usuarios, en un unico string
const nombresDeUsuarios = usuariosConNombreYApellidos.map(x => x.name);
console.log(nombresDeUsuarios.join(", "));
// Uso de split
const SEPARATOR = ";";
const originesParaCors = "https://miaplicacion.com;https://nuevaaplicacion.com;https://otraaplicacion.com";
const originesParseados = originesParaCors.split(SEPARATOR);
console.log(originesParseados);
// Marcadores de remplazo
const plantillaDeCorreoCodigoDeSeguridad = "<html> <h1>Use este codigo, para autenticarse: {{codigo_otp}}</h1>  </html>";
const codigo = "098385";
function parsearPlantilla(plantilla, codigo) {
    return plantilla.replace("{{codigo_otp}}", codigo);
}
console.log(parsearPlantilla(plantillaDeCorreoCodigoDeSeguridad, codigo));
// Uso de repeat
const simboloDeVida = "♯";
let vidaActual = 5;
function restarVidaDeUsuario() {
    if (vidaActual == 0)
        return;
    vidaActual = vidaActual - 1;
}
function mostrarVidaDeUsuario() {
    console.log(simboloDeVida.repeat(vidaActual));
}
setInterval(() => {
    restarVidaDeUsuario();
    mostrarVidaDeUsuario();
}, 500);
// List<> -> Array - Lista de elementos
