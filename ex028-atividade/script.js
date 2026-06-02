let cadastro = [
    [`Jaderson`, 36, `73kg`, 1.79, [`Ravena`, `Aloy`]],
    [`Jefferson`, 34, `84kg`, 1.74, [`Francisco`, `Marlene`]]
]
/* console.log(cadastro[0])
console.log(cadastro[0][2])
console.log(cadastro[1][4][0]) */

let objCadastro = {Nome: `Jaderson`, Idade: 36}                      /*  */
    console.log(objCadastro.Idade)

for(let i in cadastro){    /* in é usado mais para listas no caso nesse exercicio cadastro */
    for(let y = 0; y<= cadastro[0][4].length -1; y++){
        console.log(`${cadastro[i][0]} - ${cadastro[i][4][y]}`)
    }
 /*    console.log(`O usuário ${cadastro[i][0]} tem ${cadastro[i][2]}`) */
}