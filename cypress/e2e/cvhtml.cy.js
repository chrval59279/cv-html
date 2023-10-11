describe('CV i html', () => {

  beforeEach(()=>{
    cy.visit('localhost:8080/cv.html')

  })
  it('GUI tests', () => {
    cy.title().should('include','Mitt CV')
    cy.get('h1').should('contain','Christophe Valens')
    cy.get('[data-cy=erfarenheter] li').should('have.length',4)
    
  })
})