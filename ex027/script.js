var nomes = [];
var resultado = document.getElementById(`resultado`);
function cadastrar() {
    resultado.innerHTML = '';
    let nome = document.getElementById(`nome`);

    if (nome.value === "") {
        resultado.innerHTML = `Você precisa digitar o nome completo`
        nome.focus();
    } else if (nomes.indexOf(nome.value) == -1) {
        nomes.push(nome.value);
        resultado.innerHTML += `<p>${nome.value} foi cadastrado no sistema.</p>`;
        /*  resultado.innerHTML += `<p>Essa é a lista de cadastrar ${nome.toString()}</p> ` primeiro teste */
        nome.value = '';
        nome.focus();

        resultado.innerHTML += `<h2> Lista de Cadastrados</h2>`
        for (let i = 0; i <= nomes.length - 1; i++) {
            resultado.innerHTML += `<p>${i + 1} - ${nomes[i]} </p>`
        }
    } else {
        resultado.innerHTML = `O nome ${nome.value} ja foi cadastrado.`
        nome.value = '';
        nome.focus();
    }
}