/* eslint-disable no-undef */
describe('E2E Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3001')
  })

  it('Check Button is disabled', () => {
    cy.get('button').should('be.disabled')
  })

  it('Check text input is working', () => {
    cy.get('input').type('helloworld')
  })

  it('Check Button is enabled', () => {
    cy.get('input').should('be.enabled')
  })

  it('Check jiberish returns no results', () => {
    cy.get('input').type('helloworld')
    cy.get('button').click()
    cy.get('.no-properties')
  })

  it('Check example House ID search', () => {
    cy.get('input').type('671')
    cy.get('button').click()
    cy.get('.property-data')
          .should('have.length', 1)
          .should(
            "have.text",
            "E13BX, 22, FLAT 26 , ADELINA GROVE"
          );
  })

  it('Check example PostCode search', () => {
    cy.get('input').type('E10 6LH')
    cy.get('button').click()
    cy.get('.property-data')
          .should('have.length', 34)
  })

  it('Check example street name search', () => {
    cy.get('input').type('BUSHWOOD')
    cy.get('button').click()
    cy.get('.property-data')
          .should('have.length', 71)
  })

  it('Check back button is working', () => {
    cy.get('input').type('BUSHWOOD')
    cy.get('button').click()
    cy.get('button').click()
    cy.get('.search-container')
  })

})