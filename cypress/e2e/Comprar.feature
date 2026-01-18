#utf-8
#language: pt

Funcionalidade: Comprar Cafés
    O sistema deve permitir que o usuario gerencie itens selecionados e forneca dados de pagamento para que a compra
    seja concluida com sucesso.
    Cenario: Comprar Cafés Sortidos
        Dado que o usuario acessa o portal CoffeeCart 
        E que adiciona três cafés diferentes ao carrinho
        E que aceita a promoção do mocha
        E entao acessa a pagina do carrinho
        E que deleta um item do carrinho
        E entao prossegue para a interface de pagamento
        Quando o usuario preencher os detalhes do pagamento
        E o usuario confirmar a compra
        Então uma mensagem de confirmação é exibida na tela

