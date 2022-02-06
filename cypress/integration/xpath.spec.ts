describe('Xpath with Cypress', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/login.html')
  })

  it('should click on element using xpath', () => {
    cy.xpath('/html/body/div[1]/div[2]/div/div/div/form/div[2]/input').should(
      'be.visible'
    )
  })
})
