// https://docs.cypress.io/api/introduction/api.html

describe("Testing Redirect from house-profile to home", () => {
  it("Visits the house profile", () => {
    cy.visit("/#/house-profile");
    cy.location().should((loc) => {
      expect(loc.pathname.toString()).to.equal("/");
    });
  });
});
