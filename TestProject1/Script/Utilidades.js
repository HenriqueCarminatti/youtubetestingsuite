
function login() {
  OCR.Recognize(Aliases.browser.BrowserWindow.Chrome_RenderWidgetHostHWND).BlockByText("Fazer", spRightMost).Click();
  Delay(2000); 
  Aliases.browser.BrowserWindow.Keys("usercenariosdetesteyt@gmail.com");
  Aliases.browser.BrowserWindow.Keys("[Enter]");
  Delay(5000);
  Aliases.browser.BrowserWindow.Keys("A112233445566");
  Aliases.browser.BrowserWindow.Keys("[Enter]");
  
};

function logoff(){
  Log.Message("Realizando logoff");
  Aliases.browser.pageYoutube.buttonMenuDaConta.ClickButton();
  Aliases.browser.pageYoutube.linkEndpoint24.textnodeLabel.Click();
};

function removerConta(){
  Log.Message("Removendo conta");
  Aliases.browser.pageYoutube.linkFazerLogin.panel.Click();
  Aliases.browser.pageYoutube2.sectionCenariostesteyoutube.textnodeCenariostesteyoutube.textnodeRemoverUmaConta.panelRemoverUmaConta.Click();
  Aliases.browser.pageYoutube2.textnodeYdmh0d.Keys("[Tab]");
  Aliases.browser.pageYoutube2.sectionCenariostesteyoutube.buttonConcluDo.Keys("[Tab]");
  Aliases.browser.pageYoutube2.footerPortuguSBrasil.panelPortuguSBrasil.Keys("[Tab]");
  Aliases.browser.pageYoutube2.footerPortuguSBrasil.textnodeAjuda.textnodeAjuda2.linkAjuda.Keys("[Tab]");
  Aliases.browser.pageYoutube2.footerPortuguSBrasil.textnodeAjuda.textnodePrivacidade.linkPrivacidade.Keys("[Tab]");
  Aliases.browser.pageYoutube2.footerPortuguSBrasil.textnodeAjuda.textnodeTermos.linkTermos.Keys("[Tab]");
  Aliases.browser.pageYoutube2.textnodeYdmh0d.Keys("[Tab][Tab][Tab][Tab]");
  Aliases.browser.pageYoutube2.sectionCenariostesteyoutube.textnodeCenariostesteyoutube.textnodeCenariostesteyoutube2.panelCenariostesteyoutube.Keys("[Enter]"); 
  Aliases.browser.pageYoutube2.Wait();
  Aliases.browser.pageYoutube2.buttonSimRemover.Keys("[Enter]");
  Runner.CallMethod("Utilidades.fecharNavegador");
  Runner.CallMethod("Utilidades.acessarYoutube");
  Log.Message("Verifica se a sessão foi encerrada");
  aqObject.CheckProperty(Aliases.browser.pageYoutube.buttonMenuDaConta, "Exists", cmpEqual, false);
  Runner.CallMethod("Utilidades.fecharNavegador");  
};

function acessarYouTube() {
  Log.Message("Acessando o Youtube");  
  Browsers.Item(btChrome).Navigate("https://www.youtube.com/");
};

function SelecionaCaminhoWinExplorer() {
  Log.Message("Selecionando caminho do arquivo");
  Aliases.browser.dlgAbrir.cbxNome.ComboBox.Edit.Keys("[Tab]");  
  Aliases.browser.dlgAbrir.cbxTipo.Keys("[Tab]");  
  Aliases.browser.dlgAbrir.btnAbrir.Keys("[Tab]");  
  Aliases.browser.dlgAbrir.btnCancelar.Keys("[Tab]");
  Aliases.browser.dlgAbrir.WorkerW.ReBarWindow32.UpBand.toolbarFaixaParaCima.Keys("[Tab]");
  Aliases.browser.dlgAbrir.WorkerW.ReBarWindow32.AddressBandRoot.progress.BreadcrumbParent.toolbarEndere_oCVideos.Keys("[Enter]");
};

function clicarEmCriar() {
    Log.Message("Clicando em 'Criar'");
    Aliases.browser.pageYoutube.buttonCriar.ClickButton();
    Aliases.browser.pageYoutube.linkEndpoint.textnodeEnviarVDeo.Click();
}

function fazerUploadDoVideo(caminhoArquivo) {  
    Log.Message("Selecionando arquivo de vídeo e fazendo o upload no youtube");
    Delay(1000);
    Aliases.browser.pageConteDoDoCanalYoutubeStudio3.textnodeDialog.Keys("[Tab]");
    Aliases.browser.pageConteDoDoCanalYoutubeStudio3.textnodeEnviarFeedback.Keys("[Tab]");
    Aliases.browser.pageConteDoDoCanalYoutubeStudio3.textnodeFechar.Keys("[Tab]");
    Aliases.browser.pageConteDoDoCanalYoutubeStudio3.buttonSelecionarArquivos.Keys("[Enter]");
    Delay(1000);
    Runner.CallMethod("Utilidades.SelecionaCaminhoWinExplorer");
    Delay(1000);
    Log.Message("Inserindo caminho do arquivo desejado");
    Aliases.browser.dlgAbrir.WorkerW.ReBarWindow32.AddressBandRoot.progress.comboBox.SetText(caminhoArquivo);
    Aliases.browser.dlgAbrir.cbxNome.ComboBox.Edit.SetText("teste.mkv");
    Aliases.browser.dlgAbrir.cbxNome.ComboBox.Edit.Keys("[Enter]");
}

function validarDialogUpload() {
    Log.Message("Validando se o nome do vídeo upado confere com o arquivo desejado");
    Delay(5000);
    Aliases.browser.pageConteDoDoCanalYoutubeStudio3.FindElement("//ytcp-animatable[contains(., 'teste')]");
};

function fecharEditorVideo() {
  Log.Message("Fechando janela de editor");
  Aliases.browser.pageConteDoDoCanalYoutubeStudio3.textnode.Click();
  Delay(5000);  
};

function abrirEditorVideo() {
  Log.Message("Abrindo janela de editor");
  if (Aliases.browser.pageConteDoDoCanalYoutubeStudio.panelCheckboxContainer.Exists){
    Aliases.browser.pageConteDoDoCanalYoutubeStudio3.panelCheckboxContainer.Click();
    Aliases.browser.pageConteDoDoCanalYoutubeStudio3.buttonEditarRascunho.ClickButton();
  }
  else{
    Aliases.browser.BrowserWindow.Keys("[F5]");
    Delay(50000);
    if(Aliases.browser.pageConteDoDoCanalYoutubeStudio3.buttonEditarRascunho.Exists) {
      Aliases.browser.pageConteDoDoCanalYoutubeStudio3.buttonEditarRascunho.ClickButton();
    }
    else{
      
    }
  }
  
};

function editarForm(titulo, descricao) {
   var titulo, descricao    
  Log.Message("Editando informações de formulário");
  Aliases.browser.pageConteDoDoCanalYoutubeStudio3.panelAdicioneUmTTuloQueDescreva.Click();
  Aliases.browser.pageConteDoDoCanalYoutubeStudio3.panelAdicioneUmTTuloQueDescreva.Keys("^a");
  Log.Message("Edita informação de título");
  Aliases.browser.pageConteDoDoCanalYoutubeStudio3.panelAdicioneUmTTuloQueDescreva.Keys(titulo);
  Aliases.browser.pageConteDoDoCanalYoutubeStudio3.panelAdicioneUmTTuloQueDescreva.Keys("[Tab]");
  Aliases.browser.pageConteDoDoCanalYoutubeStudio3.panelAdicioneUmTTuloQueDescreva.Keys("[Tab]");
  Log.Message("Edita informação de descrição");
  Aliases.browser.pageConteDoDoCanalYoutubeStudio3.panelFaleSobreSeuVDeoParaOs.Keys(descricao);
  Aliases.browser.pageConteDoDoCanalYoutubeStudio3.buttonPrXimo.ClickButton();
  Log.Message("Definindo público para adultos");
  Aliases.browser.pageConteDoDoCanalYoutubeStudio3.panelOffradio.Click();
  Aliases.browser.pageConteDoDoCanalYoutubeStudio3.buttonPrXimo.ClickButton(); 
  Aliases.browser.pageConteDoDoCanalYoutubeStudio3.buttonPrXimo.ClickButton(); 
  Aliases.browser.pageConteDoDoCanalYoutubeStudio3.buttonPrXimo.ClickButton();
  Log.Message("Publicando como 'não listado'");
  Aliases.browser.pageConteDoDoCanalYoutubeStudio3.panelOffradio.Click();
  Log.Message("Salva as alterações"); 
  Aliases.browser.pageConteDoDoCanalYoutubeStudio3.buttonSalvar.ClickButton();
};

function selecionaVideo(){
  Log.Message("Selecionando vídeo");
  Aliases.browser.pageConteDoDoCanalYoutubeStudio3.panelCheckboxContainer.Click();
  Aliases.browser.pageConteDoDoCanalYoutubeStudio3.panel.Click();
};

function  excluiVideo() {
  Log.Message("Excluindo vídeo");
  Aliases.browser.pageConteDoDoCanalYoutubeStudio3.textnodeExcluirParaSempre.Click(); 
  Aliases.browser.pageConteDoDoCanalYoutubeStudio3.labelEntendoQueAExclusO.textnodeEntendoQueAExclusO.Click();
  Aliases.browser.pageConteDoDoCanalYoutubeStudio3.buttonExcluirParaSempre.ClickButton();
};
  
function fecharNavegador() {
  Log.Message("Fechando navegador");
  Aliases.browser.BrowserWindow.Close();
};  

function acessaCanal() {
  Aliases.browser.pageYoutube.buttonMenuDaConta.ClickButton();
  Aliases.browser.pageYoutube.linkAcessarSeuCanal.Click();
  Aliases.browser.pageCenariostesteyoutubeYoutube.linkGerenciarVDeos.panel.Click();
};