describe('Custom Command', () => {
  it('should login to application using custom cypress command', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.fixture('user').then(({ username, password }) => {
      cy.login(username, password)
    })
  })
})
