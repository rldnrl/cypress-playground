import '@testing-library/cypress/add-commands'
import 'cypress-xpath'

Cypress.Commands.add('login', (username: string, password: string) => {
  cy.clearCookies()
  cy.clearLocalStorage()
  cy.get('#user_login').type(username)
  cy.get('#user_password').type(password)
  cy.contains('Sign in').click()
})
