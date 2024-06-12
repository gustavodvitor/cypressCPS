/// <reference types="cypress" />

describe("Acesso ao site", () => {
  beforeEach(() => {
    //Acessar o site do consorcio
    cy.visit("https://consorcio-parana.b2ml.com.br/");
  });

  //Cenario 1 : Falha no login de usuario
  //Se o usuario preencher os dados de login com informações incorretas o sistema deve negar seu acesso

  //Caso de teste 1:
  it("Usuario invalido", () => {
    // Dado que o usuario digitou o seu usuario e sua senha, mas o usuario não esta cadastrado
    // E clicou no botão "Login"
    //Então o sistema deve retornar um alerta contendo a informação "Login ou senha incorreta"
    cy.get("#usuario").type("admin.b2l");
    cy.get("#senha").type("123123");
    cy.get(".sc-dacFVT").click();
    cy.get(".Toastify__toast-body > :nth-child(2)").should(
      "contain",
      "Login ou senha incorreta"
    );
  });

  //Caso de teste 2:
  it("Senha invalida", () => {
    // Dado que o usuario digitou o seu usuario corretamente e sua senha não
    // E clicou no botão "Login"
    //Então o sistema deve retornar um alerta contendo a informação "Login ou senha incorreta"
    cy.get("#usuario").type("admin.b2ml");
    cy.get("#senha").type("12312");
    cy.get(".sc-dacFVT").click();
    cy.get(".Toastify__toast-body > :nth-child(2)").should(
      "contain",
      "Login ou senha incorreta"
    );
  });

  //Caso de teste 3:
  it("Login sem informações", () => {
    // Dado que o usuario clicou no botão "Login"

    //E não preencheu os dados de Usuario e senha

    //Então o sistema deve retornar um alerta contendo a informação "O login é obrigatório" e " A senha é obrigatória"

    cy.get(".sc-dacFVT").click();
    cy.get("#usuario-helper-text").should("contain", "O login é obrigatório");
    cy.get("#senha-helper-text").should("contain", "A senha é obrigatória");
  });

  //Caso de teste 4:

  //Dado que o usuario digite um usuario e senha incorretos
  //E clique varias vezes no botão "Login"
  //Então, o sistema deve retornar o toast "Login ou senha incorreta" ( O ideal seria que o toast aparecesse somente uma vez)
  it("Varios cliques no botão", () => {
    cy.get("#usuario").type("admin.b2m");
    cy.get("#senha").type("1231");

    for (let a = 0; a < 50; a++) {
      cy.get(".sc-dacFVT").click();
    }
    cy.get(".Toastify__toast-body > :nth-child(2)").should(
      "contain",
      "Login ou senha incorreta"
    );
  });
});
