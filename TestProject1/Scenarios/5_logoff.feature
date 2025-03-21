Feature: 5_logoff

  Scenario: Fazer logoff e remover conta
    Given que o usuário já esteja logado
    When feito o logoff
    Then remove a conta