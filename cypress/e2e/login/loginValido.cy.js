/// <reference types="cypress" />

describe('Acesso ao site', () => {
  beforeEach(() => {
    //Acessar o site do consorcio
    cy.visit("https://consorcio-parana.b2ml.com.br/");
  });


  //Cenario1: Sucesso no login de usuario
  //Usuario deve preencher os dados corretos para ter acesso a pagina principal
  it("Login valido", () => {
    //Caso de teste 1: 
    
    // Dado que o usuario digitou o seu usuario e sua senha validos
    // E clicou no botão "Login"
    //Então o usuario é levado para a pagina principal
    cy.get("#usuario").type("admin.b2ml");
    cy.get("#senha").type("123123");
    cy.get(".sc-dacFVT").click();
  });


})