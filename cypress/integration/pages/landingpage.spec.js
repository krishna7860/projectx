describe("Landing Page Test", () => {
  it("Is Welcome Modal Visible", () => {
    cy.visit("http://localhost:5002");
    cy.get('[data-test="welcome-modal"]').should("be.visible");
  });

  it("Step 1 Should Be there", () => {
    cy.get('[data-test="welcome-header"]')
      .should("be.visible")
      .contains("Please Select Location");
  });

  it("State Input Should be Focused", () => {
    cy.get('[placeholder="Please Select State"]').should("be.focused");
  });

  it("City Input Should be Disabled", () => {
    cy.get('[placeholder="Please Select City"]').should("be.disabled");
  });

  it("State Input Should be clickable", () => {
    cy.get('[placeholder="Please Select State"]').click();
    cy.contains("Assam");
  });

  it("State Input Should be Typeable", () => {
    cy.visit("http://localhost:5002");
    cy.get('[placeholder="Please Select State"]').click();
    cy.get('[placeholder="Please Select State"]').type("Del");
    cy.get('[data-test="select-options"]').contains("Delhi").click();
  });

  it("City Input Should Be Enabled", () => {
    cy.get('[placeholder="Please Select City"]').should("not.be.disabled");
    cy.get('[placeholder="Please Select City"]').click();
    cy.get('[data-test="select-options"]').contains("Delhi").click();
  });

  it("Next Button Should Work", () => {
    cy.get("button").contains("Next").click();
  });

  it("Step 2 Should Be Visible", () => {
    cy.get('[data-test="welcome-header"]')
      .should("be.visible")
      .contains("Please Select Preferences");
  });
  it("Previous Button Should Be visible", () => {
    cy.get("button").contains("Previous").should("be.visible");
  });

  it("Input For Search Category Should Be visible and focused", () => {
    cy.get("input[placeholder='Search Catagory']")
      .should("be.visible")
      .should("be.focused");
  });

  it("Selecting Category Should Work", () => {
    cy.get("[data-test='']");
  });
});
