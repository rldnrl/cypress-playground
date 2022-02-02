describe('Select Box', () => {
  it('should load website with select box', () => {
    cy.visit('https://devexpress.github.io/testcafe/example')
  })

  it('should select an option from select box', () => {
    cy.get('[data-testid="preferred-interface-select"]').select('Both')
    cy.get('[data-testid="preferred-interface-select"]').should(
      'have.value',
      'Both'
    )
    cy.get('[data-testid="preferred-interface-select"]').select("JavaScript API")
    cy.get('[data-testid="preferred-interface-select"]').should(
      'have.value',
      'JavaScript API'
    )
  })
})
