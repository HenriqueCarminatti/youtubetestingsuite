Given("que usuário acessou o youtube", function (){
  
Runner.CallMethod("Utilidades.acessarYouTube");
});

When("insere usuário e senha", function (){
  Log.Message("Verificando se há login");
  if (aqObject.CheckProperty(Aliases.browser.pageYoutube.buttonMenuDaConta, "Exists", cmpEqual, false)) {
    Runner.CallMethod("Utilidades.login");
  };
});

Then("login é efetuado", function (){
  Delay(5000);
  Runner.CallMethod("Utilidades.fecharNavegador");
  Runner.CallMethod("Utilidades.acessarYouTube");  
  aqObject.CheckProperty(Aliases.browser.pageYoutube.buttonMenuDaConta, "Exists", cmpEqual, true);
  Log.Message("Login realizado");
});
