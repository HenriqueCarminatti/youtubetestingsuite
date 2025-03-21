﻿Given("que exista ao menos um vídeo publicado", function (){
  Delay(2000);
  Runner.CallMethod("Utilidades.fecharNavegador");
  Runner.CallMethod("Utilidades.acessarYouTube");
  Runner.CallMethod("Utilidades.acessaCanal");
});

When("seleciona um vídeo", function (){
  Runner.CallMethod("Utilidades.selecionaVideo");
  
});

Then("exclui o vídeo", function (){
  Runner.CallMethod("Utilidades.excluiVideo");
});
