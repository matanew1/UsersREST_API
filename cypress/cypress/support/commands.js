Cypress.Commands.add('readFromFile', (fileName) => {
    cy.readFile('cypress/fixtures/'+fileName)
})

Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://sso.afeka.ac.il/')  
    cy.get('input[name=username]').type(username)
    cy.get('input[name=password]').type(password)
    cy.get('input[value=כניסה]').click()
})