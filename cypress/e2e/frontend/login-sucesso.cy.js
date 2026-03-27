import loginPage from '../../pages/login-sucesso.page'

describe('Login functionality', () => {
    it('should login successfully with valid credentials', () => {
        /* Precondition - user has signed up and selected to be admin 
            Below is main functionality for this test case
        */
        cy.fixture('user-login-creds').then((user) => {
            loginPage.visit()
            loginPage.fillEmail(user.email)
            loginPage.fillPassword(user.password)
            loginPage.clickLogin()
            loginPage.assertLoginSuccess()
        })
    })
})