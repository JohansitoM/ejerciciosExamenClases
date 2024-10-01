import Gas from './Gas.js'

function calcularMasa() {
    let presion = document.getElementById("presion").value
    let volumen = document.getElementById("volumen").value
    let masaMolecular = document.getElementById("masaMolecular").value
    let temperatura = document.getElementById("temperatura").value
    let gas = new Gas(presion, volumen, masaMolecular, temperatura)
    console.log(presion, volumen, masaMolecular, temperatura)
    console.log(gas)
    gas.calcularMasa()
    console.log(gas.Masa)
    document.getElementById("resultado").innerText = `La masa del gas es: ${gas.Masa} gramos`
}

document.getElementById("calcular").addEventListener("click", calcularMasa)