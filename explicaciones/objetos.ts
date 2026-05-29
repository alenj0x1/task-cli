type UsuarioRol = 'admin' | 'IT' | 'RRHH' | 'Desarrollador' | 'Gerente'
type UsuarioTrabajandoActualmente = 'SI' | 'NO'

enum UsuarioRolEnum {
    Administrador = 'admin',
    IT = 'IT',
    RRHH = 'RRHH',
    Desarrollador = 'Desarrollador',
    Gerente = 'Gerente'
}

interface CamposAuditoria {
    fechaCreacion: Date;
    fechaActualizacion: Date;
    trazabilidadLog?: string;
}

interface UsuarioHobbie {
    detalle: string;
    desdeHaceCuando: string;
}

interface Usuario extends CamposAuditoria {
    id: string;
    nombre: string;
    edad: number;
    celular?: string;
    rol: UsuarioRol; // 1.  : string El desarrollador, tendrá que leer la documentacion o preguntar, para saber los distintos roles. No controlo en codigo, los distintos roles que existen
    hobbies: UsuarioHobbie[],
    trabajandoActualmente: UsuarioTrabajandoActualmente;
    habilidades: string[];
}

interface Factura extends CamposAuditoria {
    id: string;
    nro_factura: string;
    cliente: Usuario;
}

// : especifico el tipo. Para variables, para argumentos de funciones o para retornos de una funcion.
// extends. Todas las propiedades que especifique para esa interfaz, incluye tambien, las propiedades de esta otra interfaz

const usuarioAdministrador: Usuario = {
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
}

const usuarioDesarrollador: Usuario = {
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
}

console.log(usuarioAdministrador)
console.log(usuarioDesarrollador)

// Si yo coloco aca, algo diferente, a mi tipo, no funciona tampoco para condicionales
if (usuarioAdministrador.rol == UsuarioRolEnum.Administrador) {
    console.log('El usuario es administrador')
}

if (usuarioDesarrollador.rol == UsuarioRolEnum.Desarrollador) {
    console.log('El usuario es desarrollador')
}

console.log(usuarioAdministrador.hobbies)
console.log(usuarioDesarrollador.hobbies)

// ["Jugar"] string[]
// [1, 2] number[]
// ["Jugar", 1] (string | number)[]

// Types
function cambiarRolDeUsuario(rol: UsuarioRol) {
    usuarioAdministrador.rol = rol;
}

function cambiarEstadoDeTrabajando(estado: UsuarioTrabajandoActualmente) {
    usuarioAdministrador.trabajandoActualmente = estado;
}

function agregarHobbieAUsuario(hobbie: UsuarioHobbie) {
    usuarioAdministrador.hobbies.push(hobbie);
}

function establecerMultiplesHobbiesAUsuario(hobbies: UsuarioHobbie[]) {
    usuarioAdministrador.hobbies = hobbies;
}