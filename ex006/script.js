var hora = 20 /* new Date().getHours(); */ 
if (hora == 5 && hora <= 11){
    console.log(" Bom dia! ");
}else if(hora ==12 && hora <= 17){
    console.log(" Boa Tarde! ");
}else{
    console.log("Boa noite");
}

console.log(hora)