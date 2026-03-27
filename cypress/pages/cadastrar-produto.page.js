class CadastrarProdutoPage {
  clickCadastrarProdutoCard() {
    cy.contains('Cadastrar Produtos')
      .parent()
      .contains('Cadastrar')
      .click()
  }

  fillNome(nome) {
    cy.get('input[name="nome"]').type(nome)
  }

  fillPreco(preco) {
    cy.get('input[name="price"]').type(preco)
  }

  fillDescricao(descricao) {
    cy.get('textarea[name="description"]').type(descricao)
  }

  fillQuantidade(qtd) {
    cy.get('input[name="quantity"]').type(qtd)
  }

  uploadImagem() {
    cy.get('input[type="file"]').selectFile('cypress/fixtures/images/kittycat.jpg')
  }

  clickCadastrar() {
    cy.contains('button', 'Cadastrar').click()
  }

  assertRedirectToListaProdutos() {
    cy.url().should('eq', 'https://front.serverest.dev/admin/listarprodutos')
  }
}

export default new CadastrarProdutoPage()