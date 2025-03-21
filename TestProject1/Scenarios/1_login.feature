Feature: 1_login

  Scenario: Entrar na conta do youtube
    Given que usuário acessou o youtube
    When insere usuário e senha
    Then login é efetuado