console.log(`LOOP COM WHILE`)
/* let cont = 0;

while (cont<=5){
    console.log(`Passo ${cont}`);
    cont++;
} */
/* let senha = ``;
while (senha !== "12345"){
  /*  senha =  prompt(`Digite sua senha: ${senha} `)
 } */



console.log(`LOOP COM DO WHILE`);/* while faz verificação do teste primeiro e depois executa */

/* let i = 7;
do {                /*  Do while Ele faz um codigo antes e depois pede a verificação */
/*  console.log(`Passo ${i}`);
 i++
 /* console.log(`Passo ${i}`); */


/* }while (i<=5) */

let opc;

do {
    opc = prompt(`1 - Ver Saldo \n2 - Fazer depósito\n3 - Sair `);
    console.log(`Você escolhe a opção ${opc}`)
} while (opc !== "3")

console.log(`Programa encerrado`)