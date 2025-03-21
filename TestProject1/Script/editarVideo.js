
Given("que o usuário já upou um vídeo", function (){
  Aliases.browser.BrowserWindow.Keys("[F5]"); 
});

When("preenche detalhes do vídeo", function (){
  Runner.CallMethod("Utilidades.abrirEditorVideo");
});

Then("publica vídeo", function (){
  Runner.CallMethod("Utilidades.editarForm", "cenario de teste", "descricao cenario de teste");
});


  
 
  