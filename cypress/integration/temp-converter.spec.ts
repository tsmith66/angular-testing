describe('Temp Converter', () => {

  beforeEach(() => {
    cy.visit('/converter')
  });
  it('Can convert 212F', () => {
    // find the input, and type in there 212
    cy.get('[data-temp-converter-entry').type('212');
    // click the convert button
    cy.get('[data-temp-converter-convert-button]').click();
    // check the span to see if the right amount displayed
    cy.get('[data-temp-converter-result]').should('contain', '212 is 100 Celsius');
  });

  it('Can convert 32F');
});
