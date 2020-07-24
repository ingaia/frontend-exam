describe("Loading Page", () => {
  it("Successfuly loads", () => {
    cy.visit('/');
    cy.wait(8000);
    cy.url().should('include', '/signin')
  });
})