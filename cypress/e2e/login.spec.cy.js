import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('template spec', () => {
 
  const selectorList = {
    
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    
    fristNameFied: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ",--close",
    submitButton: "[type='submit']"
  }

  it.only('user Info Update - Success', () => {
    
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
   
     dashboardPage.cheackDashboardPage()
   
     menuPage.accessMyInfo()

    cy.get(selectorList.fristNameFied).clear().type('FirstNameTest')
    cy.get(selectorList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorList.genericField).eq(3).clear().type('Nickname')
    cy.get(selectorList.genericField).eq(4).clear().type('Employee')
    cy.get(selectorList.genericField).eq(5).clear().type('OtherIdTest')
    //cy.get(selectorList.genericField).eq(6).clear().type('DrivresTest')
    cy.get(selectorList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectorList.genericField).eq(8).clear().type('ssNumberTest')
    //cy.get(selectorList.genericField).eq(9).type('sinNmberTest')
    cy.get(selectorList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Se ha actualizado correctamente')
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click() 
    
    
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentiaAlert)
  })
})