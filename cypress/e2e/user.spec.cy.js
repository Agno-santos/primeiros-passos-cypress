import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashBoardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashBoardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {

    
    
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: '.oxd-input--active',
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    genericComboBoxField: '.oxd-select-text--arrow',
    secondItemComboBox: '.oxd-select-dropdown > :nth-child(5)',
    thirdItemComboBox: '.oxd-select-dropdown > :nth-child(2)'
  }


  it.only('User Info Update - sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWriterAnyUser((userData.userSucess.username), (userData.userSucess.password))
    dashboardPage.checkDashboarPage()
    menuPage.acessMyInfo()

    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    //cy.get(selectorsList.genericField).eq(3).clear().type("NickNameTest")
    cy.get(selectorsList.genericField).eq(3).clear().type("Employee")
    cy.get(selectorsList.genericField).eq(4).clear().type("OtherIdTest")
    cy.get(selectorsList.genericField).eq(5).clear().type("DriversLicenseNumberTest")
    cy.get(selectorsList.genericField).eq(6).clear().type("2025-06-10")
    cy.get(selectorsList.dateCloseButton).click()
    // cy.get(selectorsList.genericField).eq(8).clear().type("ssn numbeber test")
    //cy.get(selectorsList.genericField).eq(9).clear().type("sin number test")
    cy.get(selectorsList.submitButton).eq(0).click({ force: true })
    //cy.get('body').should('contain', 'Sucessfully Updated')
    cy.get('.oxd-toast-close')
    cy.get(selectorsList.genericComboBoxField).eq(0).click()
    cy.get(selectorsList.secondItemComboBox).click()
    cy.get(selectorsList.genericComboBoxField).eq(1).click()
    cy.get(selectorsList.thirdItemComboBox).click()

  })
  it('Login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Test')
    cy.get(selectorsList.passwordField).type('test123')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})  