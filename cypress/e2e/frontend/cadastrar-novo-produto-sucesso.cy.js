import loginPage from '../../pages/login-sucesso.page'
import cadastrarProdutoPage from '../../pages/cadastrar-produto.page'

describe('Product registration functionality', () => {
  it('should register a new product successfully', () => {
    const productName = `Produto ${Date.now()}`

    cy.createAdminUser().then((adminUser) => {
      loginPage.login(adminUser.email, adminUser.password)
      loginPage.assertLoginSuccess()

      cadastrarProdutoPage.clickCadastrarProdutoCard()
      cadastrarProdutoPage.fillNome(productName)
      cadastrarProdutoPage.fillPreco('100')
      cadastrarProdutoPage.fillDescricao('Lorem Ipsum Mimi')
      cadastrarProdutoPage.fillQuantidade('10')
      cadastrarProdutoPage.uploadImagem()
      cadastrarProdutoPage.clickCadastrar()

      cadastrarProdutoPage.assertRedirectToListaProdutos()
      cy.contains('Lista dos Produtos').should('be.visible')
    })
  })
})