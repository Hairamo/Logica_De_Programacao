
/* let inicio = 0
let fim = 10
let passo = 2

for(inicio; inicio <= fim; inicio+=passo){
    console.log(`Contagem: ${inicio}`)
} */
function certo() {

    var inicio = Number(document.getElementById(`numero1`).value)
    var fim = Number(document.getElementById(`numero2`).value)
    var passo = Number(document.getElementById(`numero3`).value)
    let resultado = document.getElementById(`resultado`)
    resultado.innerHTML = ''

    if (passo === 0) {
        resultado.innerHTML = `O valor do Passo não pode ser 0`
    } else if (inicio < fim) {
        for (inicio; inicio <= fim; inicio += passo) {
            if (inicio + passo > fim) {
                resultado.innerHTML += `${inicio}  \u{1F3C1}`

            } else {
                resultado.innerHTML += `${inicio} \u{27A1}`
            }
        }
        }else {
            for (inicio; inicio >= fim; inicio -= passo) {
                if (inicio - passo < fim) {
                    resultado.innerHTML += `${inicio}  \u{1F3C1}`

                } else {
                    resultado.innerHTML += `${inicio} \u{27A1}`
                }
            }
        }

    }
