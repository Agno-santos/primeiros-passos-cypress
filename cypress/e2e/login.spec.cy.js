import userData from '../fixtures/users/userData.json'
import DashBoardPage from '../pages/dashboardPage.js'
import LoginPage from '../pages/loginPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashBoardPage()


describe('Login Orange HRM Tests', () => {


  it('Login - Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWriterAnyUser((userData.userfail.username), (userData.userfail.password))
    loginPage.checkAcessInvalid()
  })
  it('Login - Sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWriterAnyUser((userData.userSucess.username), (userData.userSucess.password))
    dashboardPage.checkDashboarPage()
  })
})  