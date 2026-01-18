import { fakerPT_BR as faker } from '@faker-js/faker';

const campoNome = '[name="name"]'
const campoEmail = '[name="email"]'
const checkboxMensagem = '[id="promotion"]'
const botaoSubmit = '[id="submit-payment"]'
const mensagemSucesso = '//*[contains(text(), "Thanks for your purchase")]'

class Pagamento {
    preencherFormulario(){
        const nomeAleatorio = faker.person.fullName();
        const emailAleatorio = faker.internet.email();

        cy.get(campoNome).should('be.visible').type(nomeAleatorio)
        cy.get(campoEmail).type(emailAleatorio)

        const checkbox = faker.datatype.boolean();

        if(checkbox){
            cy.get(checkboxMensagem).should('be.visible').check()
        }else{
            cy.get(checkboxMensagem).should('be.visible').uncheck()
        }
    }

    clicarSubmit(){
        cy.get(botaoSubmit).should('be.visible').click()
    }

    validarSucesso(){
        cy.xpath(mensagemSucesso).should('be.visible')
    }
}

export default new Pagamento