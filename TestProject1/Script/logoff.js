﻿Given("que o usuário já esteja logado", function (){
  Runner.CallMethod("Utilidades.acessarYoutube");
  Delay(2000);
});

When("feito o logoff", function (){
  Runner.CallMethod("Utilidades.logoff");
  Delay(2000);
});

Then("remove a conta", function (){
  Runner.CallMethod("Utilidades.removerConta");
});
