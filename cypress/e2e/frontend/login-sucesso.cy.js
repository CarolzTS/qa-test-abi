import loginPage from '../../pages/login-sucesso.page'

describe('Login functionality', () => {
  it('should login successfully with a newly created valid admin user', () => {
    cy.createAdminUser().then((user) => {
      loginPage.login(user.email, user.password)
      loginPage.assertLoginSuccess()
    })
  })
})