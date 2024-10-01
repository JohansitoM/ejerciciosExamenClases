export default class Menu {
    constructor(titulo, platosMenu){
        this.titulo = titulo
        this.platosMenu = platosMenu
    }

    agregarPlatoAMenu(plato){
        this.platosMenu.push(plato)
    }

    eliminarPlatoMenu(nombrePlato) {
        for ( let i = 0 ; i < this.platosMenu.length; i++) {
            if(nombrePlato == this.platosMenu[i].nombre) {
                this.platosMenu.splice(i, 1)
            }
        }
    }

    mostrarMenu() {
        let platos = ""
        for (let i = 0; i < this.platosMenu.length; i++) {
            platos += this.platosMenu[i].mostrar()
        }
        return `Menu:
        Titulo: ${this.titulo}
        Platos: ${platos}`
    }
}