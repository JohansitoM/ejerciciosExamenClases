export default class Pedido {

    constructor(mesa, platosPedido) {
        this.platosPedido = platosPedido
        this.mesa = mesa
        this.precioTotal = 0
    }

    agregarPlatoPedido(plato) {
        this.platosPedido.push(plato)
    }

    calcularPrecioPedido() {
        let total = 0
        for (let i = 0; i < this.platosPedido.length; i++) {
            total += this.platosPedido[i].precio
        }
        return `$${total}`
    }

    mostrarPedido() {
        let platos = ""
        for (let i = 0; i < this.platosPedido.length; i++) {
            platos += this.platosPedido[i].mostrar()
        }

        return `Pedido:
        Mesa: ${this.mesa}
        Platos: ${platos}
        Total: ${this.calcularPrecioPedido()}`
    }
}
