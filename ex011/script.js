var area = document.getElementById(`div1`)          /* let é temporario igual o var, so pode ser usado dentro do bloco, const é um valor fixo */

function clicar() {
    area.innerHTML = `Clicou `
    area.style.backgroundColor = `red`;
}

function entrar() {
    area.innerHTML = `Entrou! lá ele`;

}

function sair() {
    area.innerHTML = `Saiu!`
    area.style.backgroundColor = `white`;

}