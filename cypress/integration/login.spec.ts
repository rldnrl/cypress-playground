describe('Working with inputs', () => {
  it('should override the current time', () => {
    const date = new Date(2021, 1, 31).getTime()
    cy.clock(date)
    cy.log(`${date}`)
  })

  it('should clear cookie', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.clearCookies({ log: true })
    cy.clearLocalStorage('your item', { log: true })
  })

  it('should fill username', () => {
    cy.get('#user_login').as('username')
    cy.get('@username').clear()
    cy.get('@username').type('Some Invalid name')
  })

  it('should fill password', () => {
    cy.get('#user_password').as('password')
    cy.get('@password').clear()
    cy.get('@password').type('Some Invalid password')
  })

  it('should mark checkbox', () => {
    cy.get('input[type="checkbox"]').click()
  })

  it('should submit login form', () => {
    cy.contains('Sign in').click()
  })

  it('should display error message', () => {
    cy.get('.alert-error')
      .should('be.visible')
      .and('contain', 'Login and/or password are wrong')
  })
})
