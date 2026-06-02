function verificar(){
    var numero = Number(document.getElementById(`numero`).value)
    resultado.innerHTML = `Tabuada de <strong>${numero}</strong><br>`

    for (var cont = 0; cont <=10; cont++){
        resultado.innerHTML += `${numero} x ${cont} = <strong> ${numero * cont} </strong><br>`
    }

 /* for (let cont = 0; cont <=10; cont++){   /* Ele conta tipo temporizador */
  /*   console.log(typeof(`O contador esta na posição ${cont}`))
let numero =  Number(document.getElementById(`numero`).value)
let resultado = document.getElementById(`resultado`)
let multi = numero * cont
console.log(`${numero} x ${cont} = ${multi}` )  
 if(numero >= 0){ 
resultado.innerHTML += `<p> <strong>${numero} x ${cont} = ${multi}</strong><p>`  */
 

}cont>=5