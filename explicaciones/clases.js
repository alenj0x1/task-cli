"use strict";
// import { Usuario } from './objetos.js'
class Order {
    id;
    type;
    constructor(data) {
        if (data.id == 0) {
            throw new Error('No puedes establecer una orden, con ID 0');
        }
        this.id = data.id;
        this.type = data.type ?? "pending";
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
        console.log(`Se cambió el tipo de la orden, a: ${this.type}`);
        return this.type;
    }
}
class OrderManager {
    orders = [];
    constructor() { }
    addOrder(order) {
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
    id;
    cod;
    cliente;
    fechaCreacion;
    monto;
    constructor() {
    }
    withId(value) {
        this.id = value;
        return this;
    }
    withCod(value) {
        this.cod = value;
        return this;
    }
    withCliente(value) {
        this.cliente = value;
        return this;
    }
    withFechaCreacion(value) {
        this.fechaCreacion = value;
        return this;
    }
    withMonto(value) {
        this.monto = value;
        return this;
    }
    build() {
        if (!this.id) {
            throw new Error('Falta establecer el id');
        }
        if (!this.cod) {
            throw new Error('Falta establecer el código');
        }
        if (!this.cliente) {
            throw new Error('Falta establecer el cliente');
        }
        if (!this.fechaCreacion) {
            throw new Error('Falta establecer la fecha de creación');
        }
        if (!this.monto) {
            throw new Error('Falta establecer el monto');
        }
        return new FacturaPrueba({
            id: this.id,
            cod: this.cod,
            cliente: this.cliente,
            fechaCreacion: this.fechaCreacion,
            monto: this.monto
        });
    }
}
class FacturaPrueba {
    id;
    cod;
    cliente;
    fechaCreacion;
    monto;
    constructor(data) {
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
    .build();
console.log(newOrder);
class UserService {
    create(data) {
        throw new Error('Method not implemented.');
    }
    findById(id) {
        throw new Error('Method not implemented.');
    }
    all() {
        throw new Error('Method not implemented.');
    }
}
class RepositoryBase {
    data = [];
    scopeRepo;
    constructor(scopeRepo) {
        this.scopeRepo = scopeRepo;
    }
    create(data) {
        this.data.push(data);
    }
}
class UserRepository extends RepositoryBase {
    create() {
    }
    getData() {
        throw new Error('Method not implemented.');
    }
}
const repo = new UserRepository('asd');
class Random {
    static text() {
        return "asd";
    }
    static number() {
        return 0;
    }
}
class Hasher {
}
const miTextoRandom = Random.text();
const miNumeroRandom = Random.number();
class NotFoundError extends Error {
    constructor(message) {
        super(message);
    }
}
class BadRequestError extends Error {
    constructor(message) {
        super(message);
    }
}
try {
    console.log('Todo funciono de forma correcta!');
}
catch (error) {
    if (error instanceof NotFoundError) {
        console.log('La data que enviaste al buscar, no se encontro');
    }
    else if (error instanceof BadRequestError) {
        console.log('La data que enviaste al buscar, no se encontro');
    }
    else {
        console.log('Error por defecto. 500 - Internal server error');
    }
}
