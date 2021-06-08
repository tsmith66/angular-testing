describe('routing from the root', () => {

  beforeEach(() => {
    cy.visit('/');
  })
  it('can go to converter', () => {
    cy.findRouterLinkFor('converter').click();
    // cy.get('[data-router-link=converter]').click();
    cy.get('[data-temp-converter]');
  });

  it('can go to home', () => {
    cy.findRouterLinkFor('home').click();
    cy.get('[data-home]');
  });

  it('come up with a strategy', () => {
    cy.visit('/tacos');
    cy.get('[data-home]');
  });
});
