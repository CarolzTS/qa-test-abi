describe('Products API', () => {
  it('should create a new product successfully with authorization', () => {

    cy.fixture('user-login-creds').then((user) =>{
    
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        email: user.email,
        password: user.password
      }
    }).then((loginResponse) => {
      const token = loginResponse.body.authorization
      const productName = `Produto API ${Date.now()}`

      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/produtos',
        headers: {
          Authorization: token
        },
        body: {
          nome: productName,
          preco: 100,
          descricao: 'Produto criado via teste automatizado de API',
          quantidade: 10
        }
      }).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body.message).to.eq('Cadastro realizado com sucesso')
        expect(response.body).to.have.property('_id')
                })
            })
        })
    })
})