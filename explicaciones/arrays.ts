const facturas: {
    id: number;
    nroFactura: string;
    monto: number;
    fechaCreacion: Date;
    fechaEliminacion?: Date;
    clienteIdentificacion: string;
}[] = [
    {
        id: 1,
        nroFactura: "0938-A393",
        monto: 93.5,
        fechaCreacion: new Date(),
        clienteIdentificacion: "0123456789"
    },
    {
        id: 2,
        nroFactura: "0932-A0394",
        monto: 93.5,
        fechaCreacion: new Date(),
        clienteIdentificacion: "0099838475"
    },
        {
        id: 3,
        nroFactura: "0931-A0394",
        monto: 76.4,
        fechaCreacion: new Date(),
        clienteIdentificacion: "0099838475"
    },
            {
        id: 4,
        nroFactura: "0931-A03123",
        monto: 15.4,
        fechaCreacion: new Date(),
        clienteIdentificacion: "0099838472"
    }
]

// push - Agregar elementos a un arreglo
function agregarFactura() {
    facturas.push({
        id: 3,
        nroFactura: "01231923",
        monto: 100,
        fechaCreacion: new Date(),
        clienteIdentificacion: "00000000000"
    })
}

// agregarFactura()
// agregarFactura()
// agregarFactura()

// console.log(facturas)

function buscarFacturas(filtroBusqueda: {
    id?: number;
    nroFactura?: string;
    clienteIdentificacion?: string;
}) {
    // Nro factura
    let datosFiltrados = facturas;

    if (filtroBusqueda.id)
    {
        datosFiltrados = datosFiltrados.filter(factura => factura.id == filtroBusqueda.id)
    }

    // Uso de include - Include unicamente funciona, para strings.
    if (filtroBusqueda.nroFactura)
    {
        datosFiltrados = datosFiltrados.filter(factura => factura.nroFactura.includes(filtroBusqueda.nroFactura ?? ""))
    }

    if (filtroBusqueda.clienteIdentificacion)
    {
        datosFiltrados = datosFiltrados.filter(factura => factura.clienteIdentificacion == filtroBusqueda.clienteIdentificacion)
    }

    return datosFiltrados;
}

function actualizarFactura(id: number, data: {
    clienteIdentificacion?: string;
    nroFactura?: string;
    monto?: number;
}) {
    const busqueda = buscarFacturas({
        id
    })

    if (busqueda.length == 0) return;

    let factura = busqueda[0]

    // spreading
    factura = { ...factura, ...data }

    // indexOf = -1. No encontro ese elemento, en el arreglo
    // findIndex. Para cuando, no tengo el elemento, sino, una parte, como un valor de una propiedad.
    // const buscarIndiceFacturaConIndexOf = facturas.indexOf(factura);
    // const buscaIndiceConUnValorDePropiedad = facturas.findIndex(fact => fact.id == 2)

    // if (buscaIndiceConUnValorDePropiedad < 0) return;
}

function eliminarFactura(id: number) {
    const buscarFacturaIndice = facturas.findIndex(fact => fact.id == id && !fact.fechaEliminacion)

    if (buscarFacturaIndice < 0)
    {
        console.log("Factura no encontrada")
        return;
    }

    // slice - Me permite deslizarme, [0, 1, 3] slice(1) [1, 3]
    const sinElPrimero = facturas.slice(1)

    console.log("--- slice ----")
    console.log(sinElPrimero)

    console.log("--- facturas ----")
    console.log(facturas)

    // splice - Me permite, eliminar cierta cantidad de elementos

    // const cantidadAEliminar = 1
    // facturas.splice(buscarFacturaIndice, cantidadAEliminar);

    // console.log("--- facturas ----")
    // console.log(facturas)

    facturas[buscarFacturaIndice].fechaEliminacion = new Date()
    console.log("Factura eliminada!")
}

function listarFacturas() {
    return facturas.filter(factura => !factura.fechaEliminacion)
}

const factura = buscarFacturas({
    nroFactura: "0939"
})
console.log(factura)

// console.log(listarFacturas())

// Uso de nullish
const miValor: string | null = null;

// console.log(miValor ?? "Valor por defecto")

// actualizarFactura(2, {
//     clienteIdentificacion: "01293182319283"
// })

// eliminarFactura(1)
// eliminarFactura(1)

const usuario = { nombre: "alejandro"}
const perfil = { nombre: "alenj0x1"}

const unificado = { ...usuario, ...perfil }

console.log(unificado)