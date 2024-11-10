// Preço unitário do produto
const precoUnitario = 50.00;

function alterarQuantidade(valor) {
    // Pega o elemento de quantidade e o converte para número
    let quantidade = parseInt(document.getElementById('quantidade').value);
    
    // Atualiza a quantidade, garantindo que ela não seja menor que 1
    quantidade += valor;
    if (quantidade < 1) quantidade = 1;

    // Atualiza o campo de quantidade
    document.getElementById('quantidade').value = quantidade;

    // Recalcula o valor total
    calcularTotal();
}

function calcularTotal() {
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const valorTotal = quantidade * precoUnitario;

    // Atualiza o valor total no HTML
    document.getElementById('valor-total').textContent = valorTotal.toFixed(2);
}

function reservar() {
    const quantidade = document.getElementById('quantidade').value;
    const valorTotal = document.getElementById('valor-total').textContent;
    alert(`Você reservou ${quantidade} unidade(s) com o valor total de R$ ${valorTotal}`);
}
