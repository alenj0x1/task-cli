// import { Usuario } from './objetos.js'

// let order = {
//     id: 15,
//     status: "pending"
// }

type OrderType = "pending" | "paid";

class Order {
    readonly id: number;
    private type: OrderType;

    constructor(data: { id: number, type?: OrderType }) {
        if (data.id == 0) {
            throw new Error('No puedes establecer una orden, con ID 0');
        }

        this.id = data.id;
        this.type = data.type ?? "pending";
    }

    getType(): OrderType {
        return this.type;
    }

    setType(type: OrderType): OrderType {
        this.type = type;

        console.log(`Se cambió el tipo de la orden, a: ${this.type}`)
        return this.type;
    }
}

// const order = new Order({ id: 15 });
// console.log(order);

// // Uso de metodos
// console.log(order.getType());
// console.log(order.setType("paid"));

// Validaciones
// new Order(0);

interface CreateOrderRequest {
    id: number;
    type: OrderType;
}

class OrderManager {
    private orders: Order[] = [];

    constructor() { }

    addOrder(order: CreateOrderRequest) {
        this.orders.push(new Order({ ...order }));
    }

    all() {
        return this.orders;
    }
}


// const manager = new OrderManager();
// console.log(manager.all())

// // CreateOrderDto
// // CreateOrderRequest

// manager.addOrder({
//     id: 3,
//     type: 'paid'
// })
// console.log(manager.all());

class FacturaBuilder {
    private id?: number;
    private cod?: string;
    private cliente?: string;
    private fechaCreacion?: Date;
    private monto?: number;

    constructor() {

    }

    withId(value: number) {
        this.id = value;
        return this;
    }

    withCod(value: string) {
        this.cod = value;
        return this;
    }

    withCliente(value: string) {
        this.cliente = value;
        return this;
    }

    withFechaCreacion(value: Date) {
        this.fechaCreacion = value;
        return this;
    }

    withMonto(value: number) {
        this.monto = value;
        return this;
    }

    build() {
        if (!this.id) {
            throw new Error('Falta establecer el id')
        }

        if (!this.cod) {
            throw new Error('Falta establecer el código')
        }

        if (!this.cliente) {
            throw new Error('Falta establecer el cliente')
        }

        if (!this.fechaCreacion) {
            throw new Error('Falta establecer la fecha de creación')
        }

        if (!this.monto) {
            throw new Error('Falta establecer el monto')
        }

        return new FacturaPrueba({
            id: this.id,
            cod: this.cod,
            cliente: this.cliente,
            fechaCreacion: this.fechaCreacion,
            monto: this.monto
        })
    }
}

class FacturaPrueba {
    private id: number;
    private cod: string;
    private cliente: string;
    private fechaCreacion: Date;
    private monto: number;

    constructor(data: {
        id: number;
        cod: string;
        cliente: string;
        fechaCreacion: Date;
        monto: number;
    }) {
        this.id = data.id;
        this.cod = data.cod;
        this.cliente = data.cliente;
        this.fechaCreacion = data.fechaCreacion;
        this.monto = data.monto;
    }
}

const newOrder = new FacturaBuilder()
    .withId(1)
    .withCod('AO309-4093')
    .withCliente('ALEJANDRO')
    .withMonto(93.6)
    .withFechaCreacion(new Date())
    .build()

console.log(newOrder)

interface UsuarioPrueba {
    id: string;
    nombre: string;
    apellidos: string;
}

interface CreateUsuarioPrueba {
    nombre: string;
    apellidos: string;
}

interface IUserService {
    create(data: CreateUsuarioPrueba): UsuarioPrueba;
    findById(id: number): UsuarioPrueba;
    all(): UsuarioPrueba[];
}

class UserService implements IUserService {
    create(data: CreateUsuarioPrueba): UsuarioPrueba {
        throw new Error('Method not implemented.');
    }
    findById(id: number): UsuarioPrueba {
        throw new Error('Method not implemented.');
    }
    all(): UsuarioPrueba[] {
        throw new Error('Method not implemented.');
    }
}

abstract class RepositoryBase<T> {
    private data: T[] = [];
    public scopeRepo: string;

    constructor(scopeRepo: string) {
        this.scopeRepo = scopeRepo;
    }

    create(data: T) {
        this.data.push(data);
    }

    abstract getData(): T;
}

class UserRepository extends RepositoryBase<UsuarioPrueba> {
    override create() {

    }

    getData(): UsuarioPrueba {
        throw new Error('Method not implemented.');
    }
}

const repo = new UserRepository('asd');

class Random {
    static text() {
        return "asd";
    }

    static number() {
        return 0
    }
}

class Hasher {

}

const miTextoRandom = Random.text();
const miNumeroRandom = Random.number();

class NotFoundError extends Error {
    constructor(message?: string) {
        super(message)
    }
}

class BadRequestError extends Error {
    constructor(message?: string) {
        super(message)
    }
}

try {
    console.log('Todo funciono de forma correcta!')
}
catch (error) {
    if (error instanceof NotFoundError) {
        console.log('La data que enviaste al buscar, no se encontro')
    } else if (error instanceof BadRequestError) {
        console.log('La data que enviaste al buscar, no se encontro')
    }
    else {
        console.log('Error por defecto. 500 - Internal server error')
    }
}
