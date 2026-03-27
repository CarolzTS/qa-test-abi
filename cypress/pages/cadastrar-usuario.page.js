class CadastrarUsuarioPage {
  clickCadastrarUsuarioCard() {
    cy.contains('div.card, div', 'Cadastrar Usuários')
    cy.contains('button, a', 'Cadastrar').first().click()
  }

  fillNome(nome) {
    cy.get('input[name="nome"]').type(nome)
  }

  fillEmail(email) {
    cy.get('input[name="email"]').type(email)
  }

  fillSenha(senha) {
    cy.get('input[name="password"]').type(senha)
  }

  clickCadastrar() {
    cy.contains('button', 'Cadastrar').click()
  }

  assertRedirectToListaUsuarios() {
    cy.url().should('eq', 'https://front.serverest.dev/admin/listarusuarios')
  }
}

export default new CadastrarUsuarioPage()