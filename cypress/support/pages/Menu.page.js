const ESPRESSO = '//div[@data-test="Espresso"]' 
const ESPRESSO_MACCHIATO = '//div[@data-test="Espresso_Macchiato"]'
const CAPPUCCINO = '//div[@data-test="Cappuccino"]'
const MOCHA = '//div[@data-test="Mocha"]'
const FLAT_WHITE = '//div[@data-test="Flat_White"]'
const AMERICANO = '//div[@data-test="Americano"]'
const CAFE_LATTE = '//div[@data-test="Cafe_Latte"]'
const ESPRESSO_CON_PANNA = '//div[@data-test="Espresso_Con Panna"]'
const CAFE_BREVE = '//div[@data-test="Cafe_Breve"]'

const LISTA_DE_CAFES = [
        ESPRESSO, 
        ESPRESSO_MACCHIATO, 
        CAPPUCCINO, 
        MOCHA, 
        FLAT_WHITE, 
        AMERICANO, 
        CAFE_LATTE, 
        ESPRESSO_CON_PANNA, 
        CAFE_BREVE
        ]

const CAFES_ESCOLHIDOS = Cypress._.sampleSize(LISTA_DE_CAFES, 3);

class MenuDeEscolhas{
    escolherCafes(){
        CAFES_ESCOLHIDOS.forEach((CAFE) => {
        cy.xpath(CAFE).click()
        }) 
    }
}
export default new MenuDeEscolhas