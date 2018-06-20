# User Stories
quem interage: só a **Vanessa**


A **Vanessa** quer registrar os pedidos

A **Vanessa** quer registrar os clientes e ela também precisa associar o pedido aos clientes

Uma preocupação dela é o prazo de pedido e de entrega

Ela não quer que seja acesso publico

Ela quer saber se foi pago ou nao e como

Cada pedido de uma marca 

Produto: Marca,codigo,nome, valor bruto, valor liquido

Cliente: Nome, numero telefone, endereço;

Pedido: Data do pedido Natura, data de pedido Avon, data de entrega, valor total

Relatorios:
- pedidos (com filtro por data de pedido ou data de entrega do pedido) - exemplo: resumo semanal de produtos
- vendas ( por periodo) - fluxo de caixa
- clientes devedores (atrasados ou nao)



# Features

## Tela de Login

Auntenticacao por facebook ou conta google

## Tela de Resumo 

Ver o resumo de pedidos abertos na semana/pagamentos em aberto na semana/entregas a fazer na semana
A partir dessa tela: Acessar Pedidos pedidos, Acessar clientes, Acessar produtos relatorios por tipo


## Tela de Clientes

Lista de clientes contem>
Nome do cliente
Contato
Endereco quando clicar

Acoes: Adicionar, Editar, Buscar e que fiquem em ordem alfabetica.
Adicionar, Editar > Na linha que mostra o cadastro
Buscar > Em cima
Adicionar no começo da lista

## Tela de Produtos

Nome, codigo, marca como icone,valor bruto, valor liquido > in line

## Tela de Pedidos

numero_pedido, nome_cliente, data_de_entrega, status_pagamento
clica no pedido pra editar

checkbox para entregue

## Modal de Adicao de Pedido

Esta tela é um modal da tela de pedi/do
adicionar pedido > atraves de um botão "+"
Pedido vai conter:
Seleciona cliente>

Nome ou codigo -> Aparecer lista com o nome/codigo
![lik](Capturar.png)

inputs no final > Data do pedido Natura, data de pedido Avon, data de entrega, modo de pagamento > botao pago
![lik](adicao_listagem_itens.png)
output no final > Valor liquido e bruto do pedido

Pagamento> Em linha, adicionado até que saldo == 0
linha > modo (entrada, parcela, valor, data) obs: data pré-selecionada == atual
botao salvar

## Tela Relatorio Pedido

    lista de produtos por data de pedido e separado por marca
    (exportavel para excel)
    lista contem: nome produto, codigo do produto, data de pedido; 

## Tela Relatorio Venda

filtro por periodo mostra:
    valor recebido
    valor a pagar
    saldo
    valor a receber (total dos pedidos nao pagos)
clica em cima, espande para: produtos que compoe esses dinheiros

bruto - liquido = preco_base


## Tela Relatorio Cliente

Filtro de clientes, ordenados por pedidos não pagos em ordem crescente (-50 até 0 >> exemplo)
Filtro de clientes, com pedidos por data de entrega


# Tickets

