/// <reference types="cypress" />

describe('Device Test', () => {
  afterEach(() => {
    cy.wait(3000)
  })
  it('should 720px', () => {
    cy.viewport(1280, 720);
    cy.visit("https://example.cypress.io/")
  });

  it('should 1080px', () => {
    cy.viewport(1980, 1080);
    cy.visit("https://example.cypress.io/")
  });

  it('should iPhone X', () => {
    cy.viewport("iphone-x");
    cy.visit("https://example.cypress.io/")
  });

  it('should iPhone SE2', () => {
    cy.viewport("iphone-se2");
    cy.visit("https://example.cypress.io/")
  });

});
