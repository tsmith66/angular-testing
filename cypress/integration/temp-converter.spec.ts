describe('Temp Converter', () => {

  beforeEach(() => {
    cy.visit('/converter')
  });
  it('Can convert 212F', () => {
    // find the input, and type in there 212
    // cy.get('[data-temp-converter-entry').type('212');
    cy.enterTemperatureForConverter(212);
    // click the convert button
    cy.get('[data-temp-converter-convert-button]').click();
    // check the span to see if the right amount displayed
    cy.get('[data-temp-converter-result]').should('contain', '212 is 100 Celsius');
  });

  it('Can convert 32F', () => {
    // find the input, and type in there 212
    // cy.get('[data-temp-converter-entry').type('32');
    cy.enterTemperatureForConverter(32);
    // click the convert button
    cy.get('[data-temp-converter-convert-button]').click();
    // check the span to see if the right amount displayed
    cy.get('[data-temp-converter-result]').should('contain', '32 is 0 Celsius');
  });

  it('Should round results', () => {
    // find the input, and type in there 212
    // cy.get('[data-temp-converter-entry').type('33');
    cy.enterTemperatureForConverter(33);
    // click the convert button
    cy.get('[data-temp-converter-convert-button]').click();
    // check the span to see if the right amount displayed
    cy.get('[data-temp-converter-result]').should('contain', '33 is 0.56 Celsius');
  });
});
