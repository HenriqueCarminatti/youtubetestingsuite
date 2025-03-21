# youtubetestingsuite
Projeto de cenários de automação de testes na ferramenta Youtube.
 Esse projeto executa 5 cenários na aplicação:

 1)Login no Youtube

    É utilizada uma conta google já configurada para realizar os testes como canal de youtube.

 2)Upload de vídeo

    Realizado upload de arquivo de vídeo definido nas configurações do projeto.

 3)Edição do vídeo

    Inserções e mudanças no formulário que define informações de título, descrição e SafeContent do vídeo.

 4)Exclusão do vídeo

    Verifica se o vídeo foi publicado e, em seguida, exclui o material permanentemente.

 5)Logoff

    Realiza o logoff da conta, em seguida a remoção da conta do google para deixar o ambiente em condições de rodar novamente os testes.

# Passo a passo para configurar ambiente de testes:
 
 - google chrome atualizado (v134.0.6998.89);
 
 - desabilitar a opção "exibir na inicialização" caso o chrome mostre a tela "quem está usando o chrome" na sua inicialização;

   *Os testes já utilizam uma conta do google própria e configurada, portanto se há alguma outra conta conectada ao chrome, a sua remoção garante o funcionamento adequado dos testes.

 - utilizar um arquivo de vídeo com o nome teste.mkv no diretório c:\videos do computador (nome do vídeo e diretório podem ser trocados dentro do projeto caso necessário).
