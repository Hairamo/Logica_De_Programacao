/* function somar(){

var numero1 = Number.parseInt(window.prompt(`Digite um numero: `))
var numero2 = Number.parseInt(window.prompt(`Digite um numero: `))

var soma = numero1 + numero2

var metade = numero1 / 2
let resultado = document.getElementById(`aResultado`)
resultado.innerHTML = soma


let dresultado = document.getElementById(`dResultado`)
dresultado.innerHTML = metade

}*/
window.alert(`Seja bem-vindo ao meu site!`)

function calcular(){
    var num = Number.parseInt(window.prompt(`Digite um número: `))
    document.getElementById(`resultado`).innerHTML = `O dobro do numero ${num} é ${num*2} e a dele é ${num/2}`
}