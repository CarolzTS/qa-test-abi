describe('Login API', () => {
  it('should login successfully and return an authorization token', () => {

    cy.fixture('user-login-creds').then((user) => {

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        email: user.email,
        password: user.password
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('Login realizado com sucesso')
      expect(response.body).to.have.property('authorization')
      expect(response.body.authorization).to.be.a('string').and.not.be.empty
            })
        })
    })
})