const BOTÃO_CART = '//a[@href="/cart"]'

class EnterCartInterface{
    clicarCart(){
        cy.xpath(BOTÃO_CART).click()
    }
}
export default new EnterCartInterface