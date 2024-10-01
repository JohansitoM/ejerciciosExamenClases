import Menu from './Menu.js'
import Pedido from './Pedido.js'

export default class Restaurante {
    constructor(nombre, direccion, telefono, menu, cantidadMesas){
        this.nombre = nombre
        this.direccion = direccion
        this.telefono = telefono
        this.menu = menu
        this.cantidadMesas = cantidadMesas
        this.pedidos = []
    }

    generarPedido(numeroMesa, platosPedido) {
        let platos = []

        for (let i = 0; i < platosPedido.length; i++) {
            for (let j = 0; j < this.menu.platosMenu.length; j++) {
                if (platosPedido[i] === this.menu.platosMenu[j].nombre) {
                    platos.push(this.menu.platosMenu[j])
                }
            }
        }
        let pedido = new Pedido(numeroMesa, platos)
        this.pedidos.push(pedido)
    }
    completarPedido(numeroMesa) {
        for(let i = 0; i < this.pedidos.length; i++) {
            if(this.pedidos[i].mesa === numeroMesa) {
                return this.pedidos[i].mostrarPedido()
            }
        }
    }

    agregarPlatoPedido(numeroMesa,nombrePlato) {
        let platoObjeto = () => {
            for(let i = 0; i < this.menu.platosMenu.length; i++) {
                if(this.menu.platosMenu[i].nombre === nombrePlato) {
                    return this.menu.platosMenu[i]
                }
            }
            
        } 
        let pedidoCambio = () => {
            for(let j = 0; j < this.pedidos.length; j++) {
                if(this.pedidos[j].mesa === numeroMesa) {
                    return this.pedidos[j]
                }
            }
        }

        pedidoCambio().platosPedido.push(platoObjeto())
    }
}