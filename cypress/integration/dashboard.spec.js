describe("Dashboard", () => {
  it("Should Load Videos on Enter", () => {
    cy.visit('/dashboard');
    cy.wait(2000);
    cy.get('#button-img').should('be.visible');
  })
  it("Should navigate to Login", () => {
    cy.visit('/dashboard');
    cy.contains('LOGOUT').click();

    cy.url().should('include', '/signin');
  })
})