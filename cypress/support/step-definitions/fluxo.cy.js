import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import MenuDeEscolhas from '../pages/menu.page'
import Cart from '../pages/cart.page'
import PaymentDetails from '../pages/PaymentDetails.page'

When('adiciona três cafés diferentes ao carrinho', () =>{
    MenuDeEscolhas.escolherCafes()
})

When('aceitar a promoção do mocha', () =>{
    MenuDeEscolhas.AceitarPromocao()
})

When('acessa a página do carrinho', () =>{
    MenuDeEscolhas.AcessarCart()
})

When('deleta e valida os itens no carrinho', () =>{
    Cart.deletarItem()
})

When('prossegue para a interface de pagamento', () =>{
    Cart.clicarChekout()
})

Then('preenche os detalhes do pagamento', () =>{
    PaymentDetails.preencherFormulario()
})

When('confirma a compra', () =>{
    PaymentDetails.clicarSubmit()
})