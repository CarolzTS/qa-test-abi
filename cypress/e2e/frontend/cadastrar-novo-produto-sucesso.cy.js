import loginPage from '../../pages/login-sucesso.page'
import cadastrarProdutoPage from '../../pages/cadastrar-produto.page'

describe('Product registration functionality', () => {
  it('should register a new product successfully', () => {

    cy.fixture('user-login-creds').then((user) => {

      const productName = `Produto ${Date.now()}`

      // Precondition - be logged in
      loginPage.visit()
      loginPage.fillEmail(user.email)
      loginPage.fillPassword(user.password)
      loginPage.clickLogin()
      loginPage.assertLoginSuccess()

      // main functionality
      cadastrarProdutoPage.clickCadastrarProdutoCard()
      cadastrarProdutoPage.fillNome(productName)
      cadastrarProdutoPage.fillPreco('100')
      cadastrarProdutoPage.fillDescricao('Lorem Ipsum Mimi')
      cadastrarProdutoPage.fillQuantidade('10')
      cadastrarProdutoPage.uploadImagem()
      cadastrarProdutoPage.clickCadastrar()

      // validation for functionality
      cadastrarProdutoPage.assertRedirectToListaProdutos()
      cy.contains('Lista dos Produtos').should('be.visible')
    })
  })
})