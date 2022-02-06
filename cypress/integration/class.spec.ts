class BasePage {
  static loadHomePage() {
    cy.visit('https://devexpress.github.io/testcafe/example')
  }

  static wait(millisecond: number) {
    cy.wait(millisecond)
  }
}

class HomePage extends BasePage {
  static scrollToBottom() {
    cy.get('[data-testid="submit-button"]').scrollIntoView()
  }

  static scrollToTop() {
    cy.get('header').scrollIntoView()
  }
}

describe('Abstraction on the page', () => {
  before(() => {
    // runs before all tests inside describe
    // setup test data or test context
    // seed or reset the database
    HomePage.loadHomePage()
  })

  after(() => {
    // runs after all tests inside describe are done
    // test clean up
    // clean cookies or local storage
  })

  beforeEach(() => {
    // runs before each it block in the describe
  })

  afterEach(() => {
    // runs after each it block in the describe
  })

  it('1st it', () => {
    HomePage.loadHomePage()
    HomePage.scrollToBottom()
    HomePage.wait(5000)
    HomePage.scrollToTop()
  })

  it.skip('2nd it', () => {
    HomePage.loadHomePage()
    HomePage.scrollToBottom()
    HomePage.wait(5000)
    HomePage.scrollToTop()
  })

  it('3rd it', () => {
    HomePage.loadHomePage()
    HomePage.scrollToBottom()
    HomePage.wait(5000)
    HomePage.scrollToTop()
  })

  it.only('4th it', () => {
    HomePage.loadHomePage()
    HomePage.scrollToBottom()
    HomePage.wait(5000)
    HomePage.scrollToTop()
  })
})
