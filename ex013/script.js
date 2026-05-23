function somar() {
    let num1 = Number(document.getElementById(`aNum1`).value)
    let num2 = Number(document.getElementById(`aNum2`).value)
    let soma = num1 + num2
    let resultado = document.getElementById(`aResultado`)
    resultado.innerHTML = soma
    /* console.log(`SOMAR`)
    console.log(num1)
    console.log(num2)
    console.log(typeof(num1))
    console.log(typeof(num2))
    console.log(num1 + num2) */

}

function subtrair(){
    let num1 = Number(document.getElementById(`sNum1`).value)
    let num2 = Number(document.getElementById(`sNum2`).value)
    let subtrair = num1 - num2
    let resultado = document.getElementById(`sResultado`)
    resultado.innerHTML = subtrair
/* 
    console.log(`SUBTRAIR`)
    console.log(num1)
    console.log(num2)
    console.log(typeof(num1))
    console.log(typeof(num2))
    console.log(num1 - num2) */
}