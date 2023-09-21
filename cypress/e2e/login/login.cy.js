/// <reference types="Cypress"/>

describe("Testes funcional de Login", () => {
  it("Deve realizar login com sucesso", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
  });
});

it("validando Login Incorreto", () => {
  cy.visit("https://www.saucedemo.com/");
  cy.get('[data-test="username"]').type("standard_user5");
  cy.get('[data-test="password"]').type("123456");
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="error"]').should(
    "contain",
    "Epic sadface: Username and password do not match any user in this service"
  );
});

it("validar Senha Incorreta", () => {
  cy.visit("https://www.saucedemo.com/");
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("123456");
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="error"]').should(
    "contain",
    "Epic sadface: Username and password do not match any user in this service"
  );
});
