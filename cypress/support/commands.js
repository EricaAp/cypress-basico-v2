Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName').type('Erica');
    cy.get('#lastName').type('Ap');
    cy.get('#email').type('email@email.com');
    cy.get('#open-text-area').type('teste', { delay: 0 });
    //cy.get('button[type="submit"]').click();
    cy.contains('button', 'Enviar').click();

})


Cypress.Commands.add('fillMandatoryFieldsAndSubmit2', (nome, sobrenome, email, ajuda) => {
    cy.get('#firstName').type(nome);
    cy.get('#lastName').type(sobrenome);
    cy.get('#email').type(email);
    cy.get('#open-text-area').type(ajuda, { delay: 0 });
    // cy.get('button[type="submit"]').click();
    cy.contains('button', 'Enviar').click();

})
