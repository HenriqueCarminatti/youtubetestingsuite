﻿Given("que usuário acessou o youtube", function (){
  Runner.CallMethod("Utilidades.acessarYouTube");
});

When("insere usuário e senha", function (){
  Runner.CallMethod("Utilidades.login");
});

Then("login é efetuado", function (){
  Delay(2000);
});
