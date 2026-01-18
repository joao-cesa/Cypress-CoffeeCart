import { Given, When, Then, After} from "@badeball/cypress-cucumber-preprocessor"
import Cardapio from '../pages/Cardapio.page'
import Carrinho from '../pages/Carrinho.page'
import Pagamento from '../pages/Pagamento.page'


Given('que o usuario acessa o portal CoffeeCart', () =>{
    cy.visit('/')
});
 
When('que adiciona três cafés diferentes ao carrinho', () =>{
    Cardapio.escolherCafes()
})

When('que aceita a promoção do mocha', () =>{
    Cardapio.aceitarPromocao()
})

When('entao acessa a pagina do carrinho', () =>{
    Cardapio.acessarCart()
})

When('que deleta um item do carrinho', () =>{
    Carrinho.validar_E_Deletar()
})

When('entao prossegue para a interface de pagamento', () =>{
    Carrinho.clicarChekout()
})

When('o usuario preencher os detalhes do pagamento', () =>{
    Pagamento.preencherFormulario()
})

When('o usuario confirmar a compra', () =>{
    Pagamento.clicarSubmit()
})

Then('uma mensagem de confirmação é exibida na tela', () =>{
    Pagamento.validarSucesso()
})

After(() => {
    cy.screenshot('e2e-sucesso-coffeeCart', { overwrite: true })
})