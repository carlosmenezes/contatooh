angular.module('contatooh').controller('ContatosController', function($scope, Contato) {

  $scope.contatos = [];
  $scope.filtro = '';
  $scope.mensagem = { texto: '' };

  function buscaContatos() {
    Contato.query(
      contatos => {
        $scope.contatos = contatos;
        $scope.mensagem = {};
      },
      erro => {
        $scope.mensagem = { texto: "Não foi possível obter a lista da contatos." };
        console.log(erro);
    });
  }

  buscaContatos();

  $scope.remove = function(contato) {
    Contato.delete({ id: contato._id },
      buscaContatos,
      erro => {
        $scope.mensagem = { texto: "Não foi possível remover o contato" };
        console.log(erro);
    });
  };

});
