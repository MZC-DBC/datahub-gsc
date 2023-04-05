describe('login', () => {
  it('logs in', () => {
    cy.visit('/');
    cy.get('input[data-testid=username]').type(Cypress.env('ADMIN_USERNAME'));
    cy.get('input[data-testid=password]').type(Cypress.env('ADMIN_PASSWORD'));
    cy.contains('Sign In').click();
    cy.contains('돌아온 것을 환영합니다, DataHub');
  });
})
