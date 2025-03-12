import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

    const selectorsList = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      loginButton: '.oxd-button',
      sectionTitleTopBar: ".oxd-text.oxd-topbar-header-breadcrumb-module",
      wrongCredentialAlert: '.oxd-alert',
      myInfoButton:"[href='/web/index.php/pim/viewMyDetails']",
      firstNameField:"[name='firstName']",
      lastNameField:"[name='lastName']",
      genericField:'.oxd-input--active',
      dateField:"[placeholder='yyyy-dd-mm']",
      dateCloseButton:".--close",
      submitButton:"[type='submit']"
    }
    

  it.only('User Info Update - sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    //cy.get(selectorsList.genericField).eq(3).clear().type("NickNameTest")
    cy.get(selectorsList.genericField).eq(3).clear().type("Employee")
    cy.get(selectorsList.genericField).eq(4).clear().type("OtherIdTest")
    cy.get(selectorsList.genericField).eq(5).clear().type("DriversLicenseNumberTest")
    cy.get(selectorsList.genericField).eq(6).clear().type("2025-06-10")
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    //cy.get('body').should('contain', 'Sucessfully Updated')
    cy.get('.oxd-toast-close')

  })
  it('Login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Test')
    cy.get(selectorsList.passwordField).type('test123')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})  