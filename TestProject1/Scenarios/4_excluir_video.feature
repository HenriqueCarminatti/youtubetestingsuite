Feature: 4_excluir_video

  Scenario: Exclusão de vídeo
    Given que exista ao menos um vídeo publicado
    When seleciona um vídeo
    Then exclui o vídeo