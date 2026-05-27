/* 
function calcular(){
    let nome = String(document.getElementById(`nome`).value)
    let num1 = Number(document.getElementById(`num1`).value)
    let num2 = Number(document.getElementById(`num2`).value)
    let soma = num1 + num2
    let divi = soma / 2

    let resultado = document.getElementById(`resultado`)
    resultado.innerHTML = ""
    if(divi >= 7){
        resultado.innerHTML += `<p>Calculando a média final de ${nome} <p> `
        resultado.innerHTML += `<p>As notas obtidas foram ${num1} e ${num2}<p> `
        resultado.innerHTML += `<p>Calculando a média final é de ${divi} <p>`
        resultado.innerHTML += `<p>O aluno ${nome} foi <span id="cor">aprovado</span> <p>`
        document.getElementById(`cor`).style.color = `green`
    }else if(divi >=5 && divi <= 7){
        resultado.innerHTML += `<p>Calculando a média final de ${nome} <p>`
        resultado.innerHTML += `<p>As notas obtidas foram ${num1} e ${num2}<p> `
        resultado.innerHTML += `<p>Calculando a média final é de ${divi}<p> `
        resultado.innerHTML += `<p>O aluno ${nome} foi esta de <span id="cor">recuperação</span><p> `
        document.getElementById(`cor`).style.color = `orange`
    } else {
        resultado.innerHTML += `<p>Calculando a média final de ${nome} <p> `
        resultado.innerHTML += `<p>As notas obtidas foram ${num1} e ${num2} <p>`
        resultado.innerHTML += `<p>Calculando a média final é de ${divi}<p> `
        resultado.innerHTML += `<p>O aluno ${nome} esta <span id="cor">reprovado </span> <p>`
        document.getElementById(`cor`).style.color = `red`
    }
} */
function media(){
    var nome = window.prompt(`Qual é o seu nome`)
    var num1 = window.prompt(`Digite um numero:`)
    var num2 = window.prompt(`Digite outro numero:`)
    var soma = num1 + num2
    var divi = soma / 2
     
    var resultado = document.getElementById(`situacao`)
    resultado.innerHTML = `O resultado dele é`
    
}