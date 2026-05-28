function verificar() {
    let nascimento = document.getElementById(`nascimento`).value; // menor de idade não pode doar sangue.


    let doencaSelecionada = document.querySelector(`input[name="sick"]:checked`).value;

    let peso = Number(document.getElementById(`peso`).value) // Peso minimo 50kg


    let tattooSelecionada = document.querySelector(`input[name="Tattoo"]:checked`).value;

    let medicineSelecionada = document.querySelector(`input[name="medicine"]:checked`).value;

    let resultado = document.getElementById(`resultado`)
    


    console.log(`nascimento: ${nascimento} / doença: ${doencaSelecionada} / peso: ${peso} / tatuagem: ${tattooSelecionada} / medicina: ${medicineSelecionada}`)

    console.log(typeof nascimento)
    let dataNascimento = new Date(nascimento + "T00:00:00");   //new Date é para capturar o nascimento no codigo
    console.log(dataNascimento)
    console.log(typeof dataNascimento)

    let hoje = new Date()
    let idade = hoje.getFullYear() - dataNascimento.getFullYear()
    console.log(idade)
    let dia = dataNascimento.getDate() //alteração
    let mes = dataNascimento.getMonth() + 1;  //alteração

    if (idade >= 18 && doencaSelecionada == nao && peso < 50 && tattooSelecionada == nao && medicineSelecionada == nao ) {
        resultado.innerHTML += ` <p>Sua idade é ${idade} maior de 18 anos pode doar sangue</p>`
        resultado.innerHTML += `<p>Você não tem doença no sangue</p>`
        resultado.innerHTML += `<p><p>Seu peso é ${peso}. Seu peso esta nos conformes</p>`
        resultado.innerHTML += `<p>Sua tatuagem não é recente.  Poderá continuar com o procedimento</p>`
        resultado.innerHTML += `<p><p>O medicamento você não toma.</p>`
    }else{
        resultado.innerHTML += ` <p>Sua idade é ${idade} maior de 18 anos pode doar sangue</p>`
        resultado.innerHTML += `<p>Você não pode doar sangue</p>`
        resultado.innerHTML += `<p>Seu peso é ${peso}, infelizmente não poderá doar</p>`
        resultado.innerHTML += `<p>Sua tatuagem é recente. não poderá continuar</p>`
        resultado.innerHTML += `<p>O medicamento que você esta tomando o impede de proceguir.</p>`
    }


   /*  } else {
        resultado.innerHTML += `<p>Você tem ${idade} . Sai da frauda e volta depois</p>`
    }
    
     if (doencaSelecionada == sim) {
        resultado.innerHTML += `<p>Você não pode doar sangue</p>`

    } else {
        resultado.innerHTML += `<p>Você não tem doença no sangue</p>`
    }
    if  (peso < 50) {
        resultado.innerHTML += `<p>Seu peso é ${peso}, infelizmente não poderá doar</p>`
    } else {
        resultado.innerHTML += `<p>Seu peso é ${peso}. Seu peso esta nos conformes</p>`

    }
    if (tattooSelecionada == sim) {
        resultado.innerHTML += `<p>Sua tatuagem é recente. não poderá continuar</p>`
    } else {
        resultado.innerHTML += `<p>Sua tatuagem não é recente.  Poderá continuar com o procedimento</p>`
    }
     if (medicineSelecionada == sim) {
        resultado.innerHTML += `<p>O medicamento que você esta tomando o impede de proceguir.</p>`
    } else {
        resultado.innerHTML += `<p>O medicamento você não toma.</p>`
    } */
    
}

