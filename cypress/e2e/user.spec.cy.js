import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashBoardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'
const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashBoardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()


describe('Orange HRM Tests', () => {

  it('User Info Update - sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWriterAnyUser((userData.userSucess.username), (userData.userSucess.password))
    dashboardPage.checkDashboarPage()
    menuPage.acessMyInfo()
    myInfoPage.fillPersonalDetails(chance.first(),chance.last())
    myInfoPage.fillEmployeeDetails("employId","otherId","123456","2025-29-06")
    myInfoPage.fillStatus()
    myInfoPage.saveForm()    

  })

})  