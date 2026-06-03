interface User {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
} // id, nombre, email, activo

// type UserProperties = keyof User;

// Todas las propiedades de mi interfaz User
function getUserValue(user: User, key: keyof User, newValue: string) {
    return user[key]
}

const user = {
    id: 1,
    nombre: 'john',
    email: 'john@gmail.com',
    activo: true
};

// console.log(getUserValue(user, 'email', 'john2@gmail.com'))

function obtenerPropiedad<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const animal = {
    nombre: 'koko',
    raza: 'pudder'
}

animal['raza']

// console.log(obtenerPropiedad(animal, 'nombre'))

const config = {
    host: 'https://www.google.com',
    port: 3001,
    debug: true
}

// Si trabajo con objetos directamente, uso keyof typeof
// Si trabajo con tipos directamente, puedo usar directamente keyof

function getConfig<K extends keyof typeof config>(key: K) {
    return config[key];
}

// console.log(getConfig('port'))

type ConfigValue = ReturnType<typeof getConfig>

// Trabajamos con parciales
// type UpdateUserDto = Partial<User>;

function updateUser(id: number, data: Partial<User>) {
    console.log(`Usuario: ${id}, con:`, data);
}

updateUser(1, { nombre: 'Alejandro' })

// Required

interface AppConfigurationPartial {
    host?: string;
    port?: number;
    timeout?: number;
}

type AppConfigurationRequired = Required<AppConfigurationPartial>

function updateConfig(data: AppConfigurationRequired) {

}

// updateConfig({})

// El uso de required
interface Point {
    x: number;
    y: number;
}

function drawPoint(point: Readonly<Point>) {
    // point.x = 4;

    console.log(`x: ${point.x} - y: ${point.y}`)

    return point;
}

const graphical: Point = { x: 1, y: 10 }
drawPoint(graphical);

// Uso de pick y omit
type UserPublic = Pick<User, "id" | "email" | "nombre" | "activo">
type UserForDto = Omit<User, "createdAt" | "updatedAt">

// Uso de records
interface Permisos {
    EliminarUsuarios: 45,
    CrearUsuarios: 98,
    VerUsuarios: 'asdasd'
}

const data: Record<string, number> = {
    EliminarUsuarios: 1,
    CrearUsuarios: 2,
    VerUsuarios: 3
}

type Rol = "admin" | "editor" | "lector"

const permisosDeRol: Record<Rol, boolean> = {
    admin: false,
    editor: false,
    lector: false
}

// Uso de exclude y extract
// Exclude funciona para obtener todo lo demas, y excluir ciertos tipos
// Extract funciona para obtener, solo lo que indique
type Frutas = "manzana" | "mango" | "pera" | "naranja"

type FrutasPeroSinManzana = Exclude<Frutas, "manzana">
type FrutasCitricas = Extract<Frutas, "naranja" | "limon">

// Uso de non nullable
type Posiblemente = string | number | null | undefined;
type Definitivo = NonNullable<Posiblemente>

// Uso del return type, para obtener lo que retorna una funcion
function crearUsuario(id: number, nombre: string, edad: number) {
    return {
        id,
        nombre,
        edad
    }
}

type UsuarioReturn = ReturnType<typeof crearUsuario>

// Uso de parameters, para obtener multiples parametros de una funcion
type crearUsuariosParametros = Parameters<typeof crearUsuario>

// Uso de tipos condicionales
type EsString<T> = T extends string ? "si es string" : "no es string"

type Prueba1 = EsString<string>
type Prueba2 = EsString<number>
type Prueba3 = EsString<"string">

const helloWorld = "hello world!"

type SinNulos<T> = T extends null | undefined ? never : T;

type Prueba4 = SinNulos<null>
type Prueba5 = SinNulos<string>

type Nullable<T> = {
    [K in keyof T]: T[K] | null | undefined
}

type UsuarioNullable = Nullable<User>

type Entidad = "Usuario" | "Producto" | "Pedido"
type Accion = "Creado" | "Actualizado" | "Eliminado" | "Cancelado"

type NombreEvento = `${Entidad}-${Accion}`
