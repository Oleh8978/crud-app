/// <reference types="cypress" />


describe('visit app ', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('check if element is added', () => {
        cy.wait(1000)
        cy.get('.link').type('test')
        cy.get('.name').type('name')
        cy.get('.surname').type('surname')
        cy.get('.submit').click({force: true})
        cy.wait(3000)
        cy.get('.list').find('div').should('have.length.at.least', 1)
    })


})
  