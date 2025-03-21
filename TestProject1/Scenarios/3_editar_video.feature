Feature: editar_video

  Scenario: editar vídeo
    Given que o usuário já upou um vídeo
    When preenche detalhes do vídeo
    And edita detalhes do vídeo
    Then publica vídeo