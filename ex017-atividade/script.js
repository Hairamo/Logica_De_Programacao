/* let num1 = ``

function click(){
    let num1 = Number(document.getElementById(`num1`).value)

    if(num1 <= 81){
        document.getElementById(`resultado`).innerHTML = `<p>Sua velocidade atual é de ${num1} Km/h<p><p> <p>Velocidade acima do limite foi multado<p> Use sempre cinto de segurança ` 
            console.log(num1)
}   else if(num1 >= 81){

    document.getElementById(`resultado`).innerHTML = `p>Sua velocidade atual é de ${num1} Km/h<p> <p>Velocidade acima do limite foi multado<p> Use sempre cinto de segurança `

} */

    function verificar() {
        let velocidade = Number(document.getElementById(`velocidade`).value)
        let resultado = document.getElementById(`resultado`)

        resultado.innerHTML = `<p> Sua velocidade atual é <strong> ${velocidade} Km/h.</strong><p>`

        if(velocidade > 80){
            resultado.innerHTML += `<p> Você ultrapassou o limite de velocidade. <span id="multa"> Vai receber uma multa por ser apressadinho </span> <p>` 
        } else
            resultado.innerHTML += `<p> Você está dentro do limite de velocidade. Boa Viagem!<p>`

        resultado.innerHTML += `<p> Use sempre o cinto de segurança.`
        
         document.getElementById(`multa`).style.color = `red`
    }
    