/// <reference types="cypress" />

describe('Browser Actions', () => {
  it('should load books website', () => {
    cy.visit("http://books.toscrape.com/index.html")
    cy.url().should("include", "index.html")
  })

  it('should click on Travel category', () => {
    cy.get("a").contains("Travel").click()
    cy.get('h1').contains("Travel")
  })

  it('should display correct number of books', () => {
    cy.get('.form-horizontal > strong').contains(11)
    cy.get('.product_pod').its("length").should('eq', 11)
    cy.get('.product_pod').should('have.length', 11)
  })

  it('should click on Poetry', () => {
    cy.get("a").contains("Poetry").click()
  })

  it('should click on Olio book', () => {
    cy.get(':nth-child(4) > .product_pod > .image_container > a > .thumbnail').click()
  })

  it('should have correct price tag', () => {
    cy.get('.product_main > .price_color').contains("£23.88");
  });

})
