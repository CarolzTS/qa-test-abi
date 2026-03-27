describe('Login API', () => {
  it('should login successfully and return an authorization token', () => {
    cy.createAdminUser().then((user) => {
      cy.loginApi(user.email, user.password)
    })
  })
})