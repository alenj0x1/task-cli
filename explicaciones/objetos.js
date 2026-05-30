"use strict";
var UsuarioRolEnum;
(function (UsuarioRolEnum) {
    UsuarioRolEnum["Administrador"] = "admin";
    UsuarioRolEnum["IT"] = "IT";
    UsuarioRolEnum["RRHH"] = "RRHH";
    UsuarioRolEnum["Desarrollador"] = "Desarrollador";
    UsuarioRolEnum["Gerente"] = "Gerente";
})(UsuarioRolEnum || (UsuarioRolEnum = {}));
// : especifico el tipo. Para variables, para argumentos de funciones o para retornos de una funcion.
// extends. Todas las propiedades que especifique para esa interfaz, incluye tambien, las propiedades de esta otra interfaz
const usuarioAdministrador = {
    id: '01093847123',
    nombre: 'Alejandro',
    edad: 23,
    rol: UsuarioRolEnum.Administrador,
    hobbies: [
        {
            detalle: 'Dibujar',
            desdeHaceCuando: '3 meses'
        },
        {
            detalle: 'Jugar ajedrez',
            desdeHaceCuando: '1 mes'
        }
    ],
    trabajandoActualmente: 'SI', // Si yo coloco aca, algo diferente, a mi tipo, no funciona
    fechaCreacion: new Date(),
    fechaActualizacion: new Date(),
    habilidades: ['Angular']
};
const usuarioDesarrollador = {
    id: '01093847124',
    nombre: 'Mateo',
    edad: 23,
    rol: UsuarioRolEnum.Desarrollador,
    hobbies: [
        {
            detalle: 'Programar',
            desdeHaceCuando: '2 años'
        },
    ],
    trabajandoActualmente: 'SI', // Si yo coloco aca, algo diferente, a mi tipo, no funciona
    fechaCreacion: new Date(),
    fechaActualizacion: new Date(),
    habilidades: ['React']
};
console.log(usuarioAdministrador);
console.log(usuarioDesarrollador);
// Si yo coloco aca, algo diferente, a mi tipo, no funciona tampoco para condicionales
if (usuarioAdministrador.rol == UsuarioRolEnum.Administrador) {
    console.log('El usuario es administrador');
}
if (usuarioDesarrollador.rol == UsuarioRolEnum.Desarrollador) {
    console.log('El usuario es desarrollador');
}
console.log(usuarioAdministrador.hobbies);
console.log(usuarioDesarrollador.hobbies);
// ["Jugar"] string[]
// [1, 2] number[]
// ["Jugar", 1] (string | number)[]
// Types
function cambiarRolDeUsuario(rol) {
    usuarioAdministrador.rol = rol;
}
function cambiarEstadoDeTrabajando(estado) {
    usuarioAdministrador.trabajandoActualmente = estado;
}
function agregarHobbieAUsuario(hobbie) {
    usuarioAdministrador.hobbies.push(hobbie);
}
function establecerMultiplesHobbiesAUsuario(hobbies) {
    usuarioAdministrador.hobbies = hobbies;
}
