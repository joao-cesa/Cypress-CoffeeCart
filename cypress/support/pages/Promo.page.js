const ACEITAR_PROMO = '//button[@class="yes"]'

class AceitraPromocao {
    clicarYes(){
        cy.xpath(ACEITAR_PROMO).click()
    }
}

export default new AceitraPromocao