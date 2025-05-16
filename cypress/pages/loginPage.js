class LoginPage {
    selectorList () {
        const selector = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentiaAlert: ".oxd-alert",
        }

        return selector
    }

    accessLoginPage(){
        cy.visit('/auth/login')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()
    }
}

export default LoginPage