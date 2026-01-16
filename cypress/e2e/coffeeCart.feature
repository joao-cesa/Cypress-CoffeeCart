#utf-8
#language: pt

Funcionalidade: Comprar Cafés
    Cenario: Comprar Cafés Sortidos
        Dado que o usuário acessa o portal CoffeeCart
        E adiciona três cafés diferentes ao carrinho
        E aceitar a promoção do mocha
        E acessa a página do carrinho para validação
        E prossegue para a interface de pagamento
        Quando preenche os detalhes do pagamento
        E confirma a compra
        Então uma mensagem de confirmação deve ser exibida
