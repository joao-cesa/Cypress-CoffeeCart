const BOTÃO_DELETAR = '//button[@class="delete"]'
const BOTÃO_CHECKOUT = '//button[@data-test="checkout"]'

class Cart {
    deletarItem(){
        const NUM = Math.floor(Math.random() * 4);

        cy.xpath(BOTÃO_DELETAR).eq(NUM).click();
    }
    clicarChekout(){
        cy.xpath(BOTÃO_CHECKOUT).click()
    }
}

export default new Cart