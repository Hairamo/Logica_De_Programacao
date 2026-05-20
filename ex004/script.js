//Menores de 16 não votam
//Entre 16 a 18 voto opcional
//Maiores de 18 voto obrigatório
//Acima de 70 voto opcional

 var idade = 16;


if(idade < 16){
    console.log('Não vota');
}
 else if (idade >= 18 ||  idade >= 70) {
    console.log("Voto obrigatorio");
} else {
    console.log(' Voto opcional'); 
}
 
// Resposta do professor

/* var idade = 17
if (idade < 16) {           
    console.log(' Não vota.')
} else if (idade < 18 || idade >= 70){
    console.log('Voto opcional')
}else {
    console.log(' Voto obrigatorio')
} */