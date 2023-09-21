/// <reference types="Cypress"/>

describe("Ordenação de itens da lista", () => {
  it("Fluxo de ordenação de itens", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    //Ordenação de produtos de menor para maior valor:
    cy.get('[data-test="product_sort_container"]').select(
      "Price (low to high)"
    );

    //Ordenação de produtos de maior para menor valor:
    cy.get('[data-test="product_sort_container"]').select(
      "Price (high to low)"
    );

    //Ordenação por ordem alfabética:
    cy.get('[data-test="product_sort_container"]').select("Name (A to Z)");

    //Ordenação de produtos de maior para menor valor:
    cy.get('[data-test="product_sort_container"]').select("Name (Z to A)");
  });
});
