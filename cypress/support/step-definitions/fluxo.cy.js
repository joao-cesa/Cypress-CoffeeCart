import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'
import enterCartPage from '../pages/enterCart.page'
import menuPage from '../pages/menu.page'
import PromoPage from '../pages/Promo.page'

And('adiciona três cafés diferentes ao carrinho', () =>{
    menuPage.escolherCafes()
})

And('aceitar a promoção do mocha', () =>{
    PromoPage.clicarYes()
})

And('acessa a página do carrinho para validação', () =>{
    enterCartPage.clicarCart()
})