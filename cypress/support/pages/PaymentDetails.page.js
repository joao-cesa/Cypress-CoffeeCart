import { fakerPT_BR as faker } from '@faker-js/faker';

const CAMPO_NOME = '//input[@name="name"]'
const CAMPO_EMAIL = '//input[@name="email"]'
const CHECKBOX_MENSAGE = '//input[@id="promotion"]'

const BOTÃO_SUBMIT = '//button[@id="submit-payment"]'

class PaymentDetails {
    preencherFormulario(){
        const NOME_ALEATORIO = faker.person.fullName();
        const EMAIL_ALEATORIO = faker.internet.email();

        //const NOME_ALEATORIO = "user_teste";
        //const EMAIL_ALEATORIO = "test@example.com";

        cy.xpath(CAMPO_NOME).should('be.visible').type(NOME_ALEATORIO)
        cy.xpath(CAMPO_EMAIL).type(EMAIL_ALEATORIO)

        const CHECKBOX = faker.datatype.boolean();

        if(CHECKBOX){
            cy.xpath(CHECKBOX_MENSAGE).check({ force: true })
        }else{
            cy.xpath(CHECKBOX_MENSAGE).uncheck({ force: true })
        }
    }
    clicarSubmit(){
        cy.xpath(BOTÃO_SUBMIT).click()
    }


}

export default new PaymentDetails