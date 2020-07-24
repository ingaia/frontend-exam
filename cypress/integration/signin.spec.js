describe("Sign In", () => {
  it("Visit Web Site", () => {
    cy.visit('/');
  });
  it("should have an error if you don't put something on inputs", () => {
    cy.visit('/signin');
    cy.contains('LOGIN').click();
  });
  it("Should navigate to Dashboard", () => {
    cy.visit('/signin');
    cy.get('input[name=email]').type('email@email.com', { force: true });
    cy.get('input[name=password]').type('123456', { force: true });
    cy.contains('LOGIN').click();

    cy.url().should('include', '/dashboard');
  })
})