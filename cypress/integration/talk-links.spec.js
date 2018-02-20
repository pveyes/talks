describe('Talk links', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('shows correct title', () => {
    cy.title()
      .should('eq', 'Fatih Kalifa - Tech Talks')

    cy.get('h1')
      .should('have.text', 'Talks');
  });

  it('shows links to all tech talks', () => {
    const talks = cy.get('[data-test="talks"]');
    const talkTitles = [
      'Testing JavaScript Applications with Jest'
    ];

    talkTitles.forEach((title, idx) => {
      talks.find(`li:nth-child(${idx + 1}) a:first-child`)
        .should('have.text', title);
    });
  });
})
