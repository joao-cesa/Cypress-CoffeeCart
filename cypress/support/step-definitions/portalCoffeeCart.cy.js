import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

 
Given('que o usuário acessa o portal CoffeeCart', () =>{
    cy.visit('/')
 
});
 