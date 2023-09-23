/// <reference types="cypress" />

// Implementação dos casos de teste da página de checkout.

beforeEach(() => {
  cy.visit('https://www.saucedemo.com/');

  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
  cy.get('#login-button').click();

  cy.get('.shopping_cart_link').click();
  cy.get('#checkout').click();
});

after(() => {
  cy.get('#finish').click();
  cy.get('.complete-header').contains("Thank you for your order!");
})

describe('Cenário de Checkout', () => {

  it('Validar se o firsName não foi preenchido', () => {
    cy.get('#last-name').type("Santos");
    cy.get('#postal-code').type("13252-110");
    cy.get('#continue').click();
    cy.get('.error-message-container.error').contains("Error: First Name is required");
  });

  it('Validar se o LastName não foi preenchido', () => {
    cy.get('#first-name').type("Maria");
    cy.get('#postal-code').type("13252-110");
    cy.get('#continue').click();
    cy.get('.error-message-container.error').contains("Error: Last Name is required");
  });

  it('Validar se o Postal Code não foi preenchido', () => {
    cy.get('#first-name').type("Maria");
    cy.get('#last-name').type("Santos");
    cy.get('#continue').click();
    cy.get('.error-message-container.error').contains("Error: Postal Code is required");
  });

  it('Verificar informações da entrega passam com campo "Zip/Postal Code" tendo apenas com um espaço', () => {
    cy.get('#first-name').type("Maria");
    cy.get('#last-name').type("Santos");
    cy.get('#postal-code').type(" ");
    cy.get('#continue').click();
  });

  it("Verificar informações da entrega passam com campo “Zip/Postal Code” tendo apenas com 4 caracteres", () => {
    cy.get('#first-name').type("Maria");
    cy.get('#last-name').type("Santos");
    cy.get('#postal-code').type("1111");
    cy.get('#continue').click();
  });

  it("Verificar informações da entrega passam com campo “First Name” com apenas 1 caractere. ", () => {
    cy.get('#first-name').type("M");
    cy.get('#last-name').type("Santos");
    cy.get('#postal-code').type("13252-110");
    cy.get('#continue').click();
  });

  it("Verificar informações da entrega passam com campo “Last Name” com apenas 1 caractere. ", () => {
    cy.get('#first-name').type("Maria");
    cy.get('#last-name').type("S");
    cy.get('#postal-code').type("13252-110");
    cy.get('#continue').click();
  });
});
