export default class Plato {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }

    mostrar() {
        return `
            Nombre: ${this.nombre}
            Precio: ${this.precio}
            `
    }
}