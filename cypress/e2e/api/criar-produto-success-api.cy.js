describe('Products API', () => {
  it('should create a new product successfully with authorization', () => {
    const productName = `Produto API ${Date.now()}`

    cy.createAdminUser().then((user) => {
      cy.loginApi(user.email, user.password).then((token) => {
        cy.request({
          method: 'POST',
          url: 'https://serverest.dev/produtos',
          headers: {
            Authorization: token,
          },
          body: {
            nome: productName,
            preco: 100,
            descricao: 'Produto criado via teste automatizado de API',
            quantidade: 10,
          },
        }).then((response) => {
          expect(response.status).to.eq(201)
          expect(response.body.message).to.eq('Cadastro realizado com sucesso')
          expect(response.body).to.have.property('_id')
        })
      })
    })
  })
})