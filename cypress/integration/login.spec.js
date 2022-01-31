describe('Working with inputs', () => {
  it('should fill username', () => {
    cy.get('#user_login').clear()
    cy.get('#user_login').type("Some Invalid name")
  })

  it('should fill password', () => {
    cy.get('#user_password').clear()
    cy.get('#user_password').type("Some Invalid password")
  })

  it('should mark checkbox', () => {
    cy.get('input[type="checkbox"]').click()
  })

  it('should submit login form', () => {
    cy.contains('Sign in').click()
  })

  it('should display error message', () => {
    cy.get('.alert-error').should('be.visible')
  })
})
