import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('template spec', () => {
 
  it('user Info Update - Success', () => {
    
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
   
     dashboardPage.cheackDashboardPage()

     menuPage.accessMyInfo()
     
     myInfoPage.fillPersonalDetails('Lucas', 'Duque', 'DelDuque')
     myInfoPage.fillEmployeeDetails('employeId', 'otherId', '2025-07-29', '1234211')
     myInfoPage.saveForm()
     
    
  })
  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
})