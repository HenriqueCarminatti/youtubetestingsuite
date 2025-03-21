
Given("que o usuário está na página inicial", function (){
  Runner.CallMethod("Utilidades.acessarYouTube");
});

When("clica em criar", function (){
  Runner.CallMethod("Utilidades.clicarEmCriar");
});

When("faz upload do arquivo de vídeo", function (){
  Runner.CallMethod("Utilidades.fazerUploadDoVideo", "c:\\videos"); 
});

Then("redireciona para a dialog de upload", function (){
  Runner.CallMethod("Utilidades.validarDialogUpload");
  Runner.CallMethod("Utilidades.fecharEditorVideo");
});
