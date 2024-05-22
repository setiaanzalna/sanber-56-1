describe('Test Login Website Luma', () => {
  beforeEach(() => {
    cy.visit('https://demowebshop.tricentis.com/register')
  })

  it('Failed Register - Empty Last Name', () => {
    cy.get(':nth-child(2) > .form-fields > :nth-child(1) > :nth-child(2)').click()
    cy.get('#FirstName').type('setia')
    cy.get('#Email').type('setia123@gmail.com')
    cy.get('#Password').type('setia123')
    cy.get('#ConfirmPassword').type('setia123')
    cy.get('#register-button').click()
    cy.get(':nth-child(3) > .field-validation-error > span').should('contain.text','Last name is required.')
  })

    it('Failed Register - Invalid Email', () => {
      cy.get(':nth-child(2) > .form-fields > :nth-child(1) > :nth-child(2)').click()
      cy.get('#FirstName').type('setia')
      cy.get('#LastName').type('anzalna')
      cy.get('#Email').type('setia123')
      cy.get('#Password').type('setia123')
      cy.get('#ConfirmPassword').type('setia123')
      cy.get('#register-button').click()
      cy.get('.field-validation-error > span').should('contain.text','Wrong email')
    })

      it('Failed Register - Invalid Confirm Password', () => {
        cy.get(':nth-child(2) > .form-fields > :nth-child(1) > :nth-child(2)').click()
        cy.get('#FirstName').type('setia')
        cy.get('#LastName').type('anzalna')
        cy.get('#Email').type('setia123@gmail.com')
        cy.get('#Password').type('setia123')
        cy.get('#ConfirmPassword').type('setia')
        cy.get('#register-button').click()
        cy.get('.field-validation-error > span').should('contain.text','The password and confirmation password do not match.')
      })

        it('Success Login', () => {
          cy.get(':nth-child(2) > .form-fields > :nth-child(1) > :nth-child(2)').click()
          cy.get('#FirstName').type('setia')
          cy.get('#LastName').type('anzalna')
          cy.get('#Email').type('setia123@gmail.com')
          cy.get('#Password').type('setia123')
          cy.get('#ConfirmPassword').type('setia123')
          cy.get('#register-button').click()
          cy.url().should('include','registerresult')
  })

})