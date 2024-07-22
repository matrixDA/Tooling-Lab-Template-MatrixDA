describe(`Test RPS Game`, () => {
  beforeEach(() => {
    cy.visit(`index.html`);
  });

  it(`Enter name, press start, select weapon, and play`, () => {
    cy.get(`#username`).type(`Dinesh Adhikari`);
    cy.get(`#start-game-button`).click();
    cy.get(`#user-selection`).select(`Scissors`); 
    cy.get(`#go-button`).click();
    cy.get(`#game-history`).contains(`Dinesh Adhikari`);
    cy.get(`#game-history`).should(`have.length`, 1);
  });
});