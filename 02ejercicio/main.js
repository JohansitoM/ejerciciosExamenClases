// Ejercicio 2: Restaurante de Comidas
// Desarrolla un sistema básico de pedidos para un restaurante. Crea una clase Plato con nombre y precio. Crea una clase Menu que gestione una lista de platos. Implementa una clase Pedido para añadir platos y calcular el total a pagar. Finalmente, crea una clase Restaurante que permita gestionar menús y pedidos de diferentes mesas.
import Restaurante from "./Restaurante.js";
import Plato from "./Plato.js";
import Pedido from "./Pedido.js";
import Menu from "./Menu.js";

// Creación de platos
const plato1 = new Plato("Arroz con huevo", 10000)
const plato2 = new Plato("Arroz quemado", 15000)
const plato3 = new Plato("Pollo biche", 20000)
const plato4 = new Plato("Carne de zombie", 25000)
const plato5 = new Plato("Pollo asado", 30000)

// Crear el menú
const menu = new Menu("Menu de Johansito", [plato1, plato2, plato3])
menu.agregarPlatoAMenu(plato4)
menu.agregarPlatoAMenu(plato5)

console.log("Menu de Johansito")
console.log(menu.mostrarMenu())

console.log("Eliminando el plato 'Pollo biche'")
menu.eliminarPlatoMenu("Pollo biche")
console.log(menu.mostrarMenu())

// Crear la clase restaurante
const restaurante = new Restaurante("Las delicias de Johansito 👨‍🍳", "Donde tu quieras", "3217668488", menu, 5, )

// Crea un pedido
restaurante.generarPedido(1, ["Pollo asado", "Carne de zombie"])
// Agrega un plato al pedido de la mesa 1
restaurante.agregarPlatoPedido(1, "Arroz quemado")

console.log('mostrando el pedido de la mesa uno')
console.log(restaurante.completarPedido(1))


