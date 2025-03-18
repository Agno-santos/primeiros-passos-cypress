class MyInfoPage {
    selectorsList() {
        const selectors = {
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
        return selectors
    }
    fillPersonalDetails(firstName,lastName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        //cy.get(this.selectorsList().genericField).eq(3).clear().type("NickNameTest")
   }
   fillEmployeeDetails(employeeId,otherId,driversLicenseNumber,experyDate){
    cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
    cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
    cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
    cy.get(this.selectorsList().genericField).eq(6).clear().type(experyDate)
    // cy.get(this.selectorsList().dateCloseButton).click()
    // cy.get(this.selectorsList().genericField).eq(8).clear().type(ssnNumber)
    //cy.get(this.selectorsList().genericField).eq(9).clear().type(sinNumber)
   }
   saveForm(){
    cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
    //cy.get('body').should('contain', 'Sucessfully Updated')
    cy.get('.oxd-toast-close')
   }
   fillStatus(){
    
   }
   
}
export default MyInfoPage