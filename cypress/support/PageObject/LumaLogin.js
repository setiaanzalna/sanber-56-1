class loginpage {
    error_msg = '#email-error'
    email = '#email'
    psw = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'
    login_btn = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span'

    inputEmail(email){
        cy.get(this.email).clear().type(email)
    }
    inputPsw(psw){
        cy.get(this.psw).clear().type(psw)
    }
    clickLogin(){
        cy.get(this.login_btn).click()
    }
    verifyError(){
        cy.get(this.error_msg).should('contain.text','Please enter a valid email address (Ex: johndoe@domain.com).')
    }

}
export default new loginpage()