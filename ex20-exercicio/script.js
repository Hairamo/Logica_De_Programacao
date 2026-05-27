function verificar(){
    let numero_1 = Number(document.getElementById(`numero_1`).value)
    let numero_2 = Number(document.getElementById(`numero_2`).value)
    let numero_3 = Number(document.getElementById(`numero_3`).value)
    let resultado = document.getElementById(`resultado`)
    resultado.innerHTML = ""

if (numero_1 > numero_2 && numero_1 > numero_3) {
    resultado.innerHTML = `O numero ${numero_1} é maior`
    /* console.log(`O numero é maior ${numero_1}`) */
} else if (numero_2 > numero_1 && numero_2 > numero_3) {
    /* console.log(`O numero é maior ${numero_2}`) */
     resultado.innerHTML = `O numero ${numero_2} é maior`
} else if (numero_3 > numero_1 && numero_3 > numero_2) {
    /* console.log(`O numero é maior ${numero_3}`) */
     resultado.innerHTML = `O numero ${numero_3} é maior`
} else {
    /* console.log(`Eles são iguais`) */
     resultado.innerHTML = `O numero ${numero_1} são iguais`
}
}
