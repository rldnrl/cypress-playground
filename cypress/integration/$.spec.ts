// 실무에서는 사용하지 말 것

describe('Cypress.$ Function', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html')
  })

  it('Expose jQuery element in the current window', () => {
    const signInButton = Cypress.$('#signin_button')
    cy.wrap(signInButton).click()
  })
})
