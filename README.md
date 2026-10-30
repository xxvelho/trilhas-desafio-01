# Minha Loja — Simulador de Compras

- **Projeto:** Desafio 1 — Minha Loja: Simulador de Compras
- **Aluno:** Elivelton Botelho Pinheiro
- **Trilha:** Desenvolvimento Mobile

## A loja

A **Hora Áurea** é uma relojoaria. A página mostra os produtos, as instruções de uso e o botão "Simular compra".

| Produto | Preço |
|---|---|
| Clássico Áureo | R$ 489,90 |
| Noturno Black | R$ 350,00 |
| Executivo Aço | R$ 429,90 |
| Slim Rosé | R$ 250,00 |

Compras a partir de R$ 1.000,00 ganham 10% de desconto.

## Tecnologias e execução

HTML, CSS e JavaScript, sem bibliotecas. Para executar, abra o `index.html` no navegador e clique em "Simular compra".

## Captura de tela

![Página da loja](assets/captura-tela.png)

## Testes realizados

| Teste | Resultado |
|---|---|
| Todas as quantidades 0 | Mostra "Nenhum produto foi selecionado." |
| 1 Slim Rosé (R$ 250,00) | Sem desconto, total R$ 250,00 |
| 2 Clássico Áureo (R$ 979,80) | Sem desconto (abaixo de R$ 1.000,00) |
| 4 Slim Rosé (R$ 1.000,00) | Desconto de R$ 100,00, total R$ 900,00 |
| 2 Clássico + 1 Noturno + 1 Executivo | Subtotal R$ 1.759,70, total R$ 1.583,73 |
| Texto, número negativo ou decimal | Avisa que é inválido e pergunta de novo |
| Cancelar ou deixar em branco | Conta como 0 unidades |

Os preços do `script.js` foram conferidos com os da página.

## Dificuldade encontrada e o que aprendi

Nenhuma

## Uso de IA

    Usei o IA para me ajudar com a estilização do site: cores, fontes e imagens.