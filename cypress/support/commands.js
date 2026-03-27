Cypress.Commands.add('createAdminUser', () => {
  const user = {
    nome: `Admin User ${Date.now()}`,
    email: `admin_${Date.now()}@teste.com`,
    password: '123456',
    administrador: 'true',
  }

  return cy
    .request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: user,
    })
    .then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq('Cadastro realizado com sucesso')
      expect(response.body).to.have.property('_id')

      return cy.wrap({
        email: user.email,
        password: user.password,
        nome: user.nome,
      })
    })
})

Cypress.Commands.add('loginApi', (email, password) => {
  return cy
    .request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        email,
        password,
      },
    })
    .then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('Login realizado com sucesso')
      expect(response.body).to.have.property('authorization')
      expect(response.body.authorization)
        .to.be.a('string')
        .and.not.be.empty

      return cy.wrap(response.body.authorization)
    })
})