class CadastrarUsuarioPage {
  clickCadastrarUsuarioCard() {
    cy.contains('.card', 'Cadastrar Usuários')
      .contains('a, button', 'Cadastrar')
      .click()
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