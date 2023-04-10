import 'cypress-plugin-api'

describe('Login To Portal Afeka', () => {
  it('invalid loads', () => {
    cy.readFromFile('data.json').then(arr => {
      arr.forEach(val => {
        if(val.username !== 'Matan.Bardugo')
          cy.login(val.username, val.password)         
      });
    });
  })

})


describe('Login To Portal Afeka', () => {
  it('valid loads', () => {
    cy.readFromFile('data.json').then(arr => {
      arr.forEach(val => {
        if(val.username === 'Matan.Bardugo')
          cy.login(val.username, val.password)         
      });
    });
  })
})