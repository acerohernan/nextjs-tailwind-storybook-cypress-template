/// <reference types="cypress" />

context('test crypress file', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should load', () => {
    cy.get('button').contains('Button').should('be.visible')
  })
})
