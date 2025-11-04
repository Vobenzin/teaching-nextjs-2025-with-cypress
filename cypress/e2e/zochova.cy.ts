describe('Zochova test', () => {
  it('finde Beniak email', () => {
    cy.visit('/');

    cy.get('[id="hamburger"]').click()

    cy.get('[href="https://zochova.sk/kontakt"]').click()
    cy.get('[class="col-sm-6"]').should('contain.text','Ing. Marián Beniak, PhD.').should('contain.text','beniak@zochova.sk')
  });

  it('finde psycholog', () => {
  cy.visit('/');

  cy.get('[id="hamburger"]').click()

  cy.get('a').contains("Naša škola ").click()
  cy.get('a').contains("Školský psychológ").click()
  cy.get('strong').should('contain.text','Erika Nemcová')
  });
});
