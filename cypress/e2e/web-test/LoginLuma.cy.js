import loginpage from '../../support/PageObject/LumaLogin'

describe('Test Login Website Luma', () => {
  function randomEmail(){
    const randomString = Math.random().toString(36).substring(2,10)
    const email = randomString + "@gmail.com"
    return email
  }
  
  let useremail = randomEmail()
  //contoh pemakainnya ada di test ke 2

  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
  })

  it('Failed Login - Invalid email', () => {
    //cy.get('#email').type('setia123')
    //cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('setia123.')
    //cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    cy.userlogin('setia123','setia123.')
    //cy.get('#email-error').should('contain.text','Please enter a valid email address (Ex: johndoe@domain.com).')
    cy.loginverify('#email-error','Please enter a valid email address (Ex: johndoe@domain.com).')
  })

  it('Failed Login - Test Fixtures', () => {
    cy.fixture('UserData.json').then((users) => {
      cy.userlogin(users.email,users.passw)
    })
  })

  it('Failed Login - Test POM', () => {
    cy.get(loginpage.email).type('setia123')
    cy.get(loginpage.psw).type('setia123.')
    cy.get(loginpage.login_btn).click()
    cy.get(loginpage.error_msg).should('contain.text','Please enter a valid email address (Ex: johndoe@domain.com).')
  })

  it('Failed Login - Test POM 2', () => {
    loginpage.inputEmail('setia123')
    loginpage.inputPsw('setia123.')
    loginpage.clickLogin()
    loginpage.verifyError()
  })

  it('Failed Login - Wrong Credentials', () => {
    //cy.get('#email').type('setia12@gmail.com')
    //cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('setia123.')
    //cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    cy.userlogin(useremail,'setia123.')
    //cy.get('.message-error > div').should('contain.text','The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    cy.loginverify('.message-error > div','The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
  })

  it('Failed Login - Wrong Password', () => {
    //cy.get('#email').type('setia123@gmail.com')
    //cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('setia123')
    //cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    cy.ketiklogin('#email','setia123@gmail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('setia123')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    //cy.get('.message-error > div').should('contain.text','The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    cy.loginverify('.message-error > div','The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
  })

  it.only('Success Login', () => {
    //cy.get('#email').type('setia123@gmail.com')
    //cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('setia123.')
    //cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    cy.userlogin('setia123@gmail.com','setia123.')
    cy.url().should('include','board')
  })
})