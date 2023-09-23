/// <reference types="cypress" />

// Implementação dos casos de teste da página de checkout.
describe("Cenário de Checkout", () => {
  it("Deve realizar Checkout com sucesso", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.get('[class="shopping_cart_link"]').click();
    cy.get('button[id="checkout"]').click();
  });
});

it('Validar informações da entrega com campo "Zip/Postal Code" apenas com um espaço', () => {
  cy.get('[data-test="firstName"]').type("Maria");
  cy.get('[data-test="lastName"]').type("Santos");
  cy.get('[data-test="postalCode"]').type(" ");
  cy.get('[data-test="continue"]').click();
});

it("Validar informações da entrega com campo “Zip/Postal Code” apenas com 4 caracteres", () => {
  cy.get('[data-test="firstName"]').type("Maria");
  cy.get('[data-test="lastName"]').type("Santos");
  cy.get('[data-test="postalCode"]').type("1111");
});

it("Validar informações da entrega com campo “First Name” com apenas 1 caractere. ", () => {
  cy.get('[data-test="firstName"]').type("");
  cy.get('[data-test="lastName"]').type("Santos");
  cy.get('[data-test="postalCode"]').type("13252-110");
});

it("Validar informações da entrega com campo “First Name” com apenas 1 caractere. ", () => {
  cy.get('[data-test="firstName"]').type("M");
  cy.get('[data-test="lastName"]').type("Santos");
  cy.get('[data-test="postalCode"]').type("13252-110");
});
