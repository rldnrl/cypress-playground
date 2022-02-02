describe('Keyboard press simulation', () => {
  it('should submit search box with pressing enter', () => {
    cy.visit('https://www.naver.com')
    cy.get('#query').type('docker{enter}')
  })
})
