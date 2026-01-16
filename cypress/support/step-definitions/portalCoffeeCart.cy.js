import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

 
 
Given('dado que acessei o portal CoffeeCart.', () =>{
    cy.visit('/')
 
});
 