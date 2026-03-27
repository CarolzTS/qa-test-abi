import loginPage from '../../pages/login-sucesso.page'
import cadastrarUsuarioPage from '../../pages/cadastrar-usuario.page'

describe('User registration functionality', () => {
  it('should register a new user successfully', () => {
    const uniqueEmail = `user_${Date.now()}@teste.com`

    cy.createAdminUser().then((adminUser) => {
      loginPage.login(adminUser.email, adminUser.password)
      loginPage.assertLoginSuccess()

      cadastrarUsuarioPage.clickCadastrarUsuarioCard()
      cadastrarUsuarioPage.fillNome('Usuário Teste')
      cadastrarUsuarioPage.fillEmail(uniqueEmail)
      cadastrarUsuarioPage.fillSenha('123456')
      cadastrarUsuarioPage.clickCadastrar()

      cadastrarUsuarioPage.assertRedirectToListaUsuarios()
      cy.contains('Lista dos usuários').should('be.visible')
    })
  })
})