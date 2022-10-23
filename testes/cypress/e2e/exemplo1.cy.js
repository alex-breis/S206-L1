/// <reference types="cypress"/>

describe("Cenário de teste para o site globalsqa", ()=>{

  it.skip('Caso de teste: Registrando um usuário no site com sucesso', ()=>{
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type("Alex")
    cy.get('#Text1').type("Borges")
    cy.get('#username').type("Alex")
    cy.get('#password').type("Alex")
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text','Registration successful')

  })

  it('Caso de teste: Registrando um usuário com falha(faltando senha)', ()=>{
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register')
    cy.get('#firstName').type("Alex")
    cy.get('#Text1').type("Borges")
    cy.get('#username').type("Alex")
    cy.get('#password').type("Alex")
    cy.get('#password').clear()
    cy.get('.has-error > .help-block').should('be.visible')
    cy.get('.btn-primary').should('be.disabled')

  })

  it('Caso de teste: Realizando login com sucesso', ()=>{
    let info = crairUsuario()
    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('contain.text',info[0])

  })

})

function crairUsuario(){
  let horas = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let seg = new Date().getSeconds().toString()
  let user = horas + minutos + seg + 'ID'
  let senha = horas + minutos + seg + 'Senha'
  let userInfo = [user, senha]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(user)
  cy.get('#Text1').type(user)
  cy.get('#username').type(user)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('contain.text','Registration successful')

  return userInfo
}