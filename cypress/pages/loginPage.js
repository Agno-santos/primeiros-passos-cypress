class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: '.oxd-button',
            wrongCredentialAlert: '.oxd-alert',
        }
        return selectors
    }
    acessLoginPage(){
        cy.visit('/auth/login')
    }
    loginWriterAnyUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
}
export default LoginPage