class LoginPage{
    visit(){
        cy.visit('/')
    }

    fillEmail(email){
        cy.get('input[type = "email"]').type(email)
    }

    fillPassword(password){
        cy.get('input[type = "password"]').type(password)
    }

    clickLogin(){
        cy.contains('button', 'Entrar').click()
    }
    
    assertLoginSuccess(){
        cy.contains('Bem Vindo').should('be.visible')
    }
}
export default new LoginPage()