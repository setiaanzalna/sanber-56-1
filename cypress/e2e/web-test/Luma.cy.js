describe('Test Login Website Luma', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
  })

  it('Failed Login - Invalid email', () => {
    cy.get('#email').type('setia123')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('setia123.')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    cy.get('#email-error').should('contain.text','Please enter a valid email address (Ex: johndoe@domain.com).')
  })

  it('Failed Login - Wrong Credentials', () => {
    cy.get('#email').type('setia12@gmail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('setia123.')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    cy.get('.message-error > div').should('contain.text','The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
  })

  it('Failed Login - Wrong Password', () => {
    cy.get('#email').type('setia123@gmail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('setia123')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    cy.get('.message-error > div').should('contain.text','The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
  })

  it('Success Login', () => {
    cy.get('#email').type('setia123@gmail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('setia123.')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    cy.url().should('include','board')
  })
})