function verificar(event) {
    event.preventDefault();
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

    if (idade >= 18 && doencaSelecionada == "No" && peso >= 50 && tattooSelecionada == "No"  && medicineSelecionada == "No") {
        resultado.innerHTML = ` <p><span id="Cor1">Você  pode doar sangue </span></p>`
    }else { 
            resultado.innerHTML = ` <p><span id="Cor2">Você não pode doar sangue </span></p>`
    }
            document.getElementById(`Cor1`).style.color = `green`
            document.getElementById(`Cor2`).style.color = `red`
}

