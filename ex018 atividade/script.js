function verificar() {
    let numero = Number(document.getElementById(`numero`).value)
    let verificar = document.getElementById(`resultado`)
    
    verificar.innerHTML = `<p> O numero é ${numero} `

    
    verificar.innerHTML = `O número ${numero}`
    if(numero % 2 == 0){
        verificar.innerHTML = `O numero é ${numero} par.`
    }else{
        verificar.innerHTML = `O numero é ${numero} impar.`
    }
    
}
