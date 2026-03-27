import loginPage from '../../pages/login-sucesso.page'
import cadastrarUsuarioPage from '../../pages/cadastrar-usuario.page'

describe('User registration functionality', () => {
  it('should register a new user successfully', () => {
    cy.fixture('user-login-creds').then((user) => {
      const uniqueEmail = `user_${Date.now()}@teste.com`

      // Precondition - be logged in
      loginPage.visit()
      loginPage.fillEmail(user.email)
      loginPage.fillPassword(user.password)
      loginPage.clickLogin()
      loginPage.assertLoginSuccess()

      // main functionality
      cadastrarUsuarioPage.clickCadastrarUsuarioCard()
      cadastrarUsuarioPage.fillNome('Usuário Teste')
      cadastrarUsuarioPage.fillEmail(uniqueEmail)
      cadastrarUsuarioPage.fillSenha('123456')
      cadastrarUsuarioPage.clickCadastrar()

      // validation for functionality
      cadastrarUsuarioPage.assertRedirectToListaUsuarios()
      cy.contains('Lista dos usuários').should('be.visible')
    })
  })
})