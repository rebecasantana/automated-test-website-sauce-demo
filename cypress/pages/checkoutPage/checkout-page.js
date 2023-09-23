// Implementação dos comandos para interagir com a página de checkout.

const element = require("./checkout-elements.js");

Cypress.Commands.add("typeFirstName", (firstName) => {
  cy.get(element.inputFirstName).type(firstName);
});

Cypress.Commands.add("typeLastName", (lastName) => {
  cy.get(element.inputLastName).type(lastName);
});

Cypress.Commands.add("typePostalCode", (postalCode) => {
  cy.get(element.inputPostalCode).type(postalCode);
});
