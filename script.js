// Os preços precisam ser os mesmos mostrados no index.html
const produtos = [
  { nome: "Clássico Áureo", preco: 489.9 },
  { nome: "Noturno Black", preco: 350 },
  { nome: "Executivo Aço", preco: 429.9 },
  { nome: "Slim Rosé", preco: 250 }
];

function formatar(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Repete a pergunta até o usuário digitar um número inteiro maior ou igual a 0
function perguntarQuantidade(nome) {
  while (true) {
    const quantidade = Number(prompt("Quantas unidades de " + nome + "? (0 para não comprar)"));

    if (Number.isInteger(quantidade) && quantidade >= 0) {
      return quantidade;
    }
    alert("Quantidade inválida. Digite um número inteiro, 0 ou maior.");
  }
}

function simularCompra() {
  let subtotal = 0;
  let resumo = "";

  for (const produto of produtos) {
    const quantidade = perguntarQuantidade(produto.nome);
    const valor = produto.preco * quantidade;

    subtotal += valor;
    resumo += produto.nome + ": " + quantidade + " x " + formatar(produto.preco) + " = " + formatar(valor) + "\n";
  }

  if (subtotal === 0) {
    alert("Nenhum produto foi selecionado.");
    return;
  }

  let total = subtotal;
  resumo += "\nSubtotal: " + formatar(subtotal);

  if (subtotal >= 1000) {
    const desconto = subtotal * 0.1;
    total = subtotal - desconto;
    resumo += "\nDesconto de 10%: -" + formatar(desconto);
  } else {
    resumo += "\nSem desconto (a partir de R$ 1.000,00 ganha 10%)";
  }

  resumo += "\nTotal: " + formatar(total);
  alert(resumo);
}
