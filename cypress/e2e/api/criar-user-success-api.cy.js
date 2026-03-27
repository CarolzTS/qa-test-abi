describe('Users API', () => {
  it('should create a new user successfully', () => {
    const uniqueEmail = `api_user_${Date.now()}@teste.com`

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: {
        nome: 'Usuário API',
        email: uniqueEmail,
        password: '123456',
        administrador: 'true'
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq('Cadastro realizado com sucesso')
      expect(response.body).to.have.property('_id')
    })
  })
})