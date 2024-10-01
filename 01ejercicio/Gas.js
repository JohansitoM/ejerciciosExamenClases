// Calculadora de Gases
//  que permita calcular la masa de un gas utilizando la ecuación de los
// gases ideales: PV=nRTPV = nRTPV=nRT. La clase debe tener propiedades para la presión, el
// volumen y la temperatura, así como un método para calcular la masa del gas dado su masa molecular. Implementa getters y setters para acceder a estas propiedades.

class Gas {
    // ceclarando las variables privadas
    _presion
    _volumen
    _masaMolecular
    _temperatura
    _masa
    constructor(presion, volumen, masaMolecular, temperatura) {
        this._presion = presion // Medido en pascales
        this._volumen = volumen // Medido en metros cubicos
        this._masaMolecular = masaMolecular // moles
        this._temperatura = temperatura // en grados kelvin
        this._masa = 0
    }

    // Creacion de getters y setters para los atributos
    get Presion() {
        return this._presion
    }
    set Presion(presion) {
        this._presion = presion
    }
    get Volumen() {
        return this._volumen
    }
    set Volumen(volumen) {
        this._volumen = volumen
    }
    get MasaMolecular() {
        return this._masaMolecular
    }
    set MasaMolecular(masaMolecular) {
        this._masaMolecular = masaMolecular
    }

    // creación de metodo para calcular la masa en gramos
    calcularMasa = () => {
        this._masa = ( this._presion * this._volumen * this._masaMolecular ) / ( 8.314 * this._temperatura )
    }

    get Masa() {
        return this._masa
    }
}


export default Gas;