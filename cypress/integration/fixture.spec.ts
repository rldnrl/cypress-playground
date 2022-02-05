describe('Login with Fixture Data', () => {
  it('should be try login', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.fixture('user').then(({ username, password }) => {
      cy.get('#user_login').as('username')
      cy.get('#user_password').as('password')

      cy.get('@username').type(username)
      cy.get('@password').type(password)
      cy.contains('Sign in').click()
    })
  })
})
