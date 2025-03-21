Feature: upload_video

  Scenario: upload de vídeo
    Given que o usuário está na página inicial
    When clica em criar
    And faz upload do arquivo de vídeo
    Then redireciona para a dialog de upload