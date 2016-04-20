angular.module('contatooh').controller('ContatoController', function($scope, $routeParams, Contato) {

  $scope.contato = new Contato();

  if ($routeParams.contatoId) {
    Contato.get({ id: $routeParams.contatoId },
      contato => { $scope.contato = contato; },
      erro => {
        $scope.mensagem = { texto: 'Não foi possível obter o contato.' };
        console.log(erro);
    });
  }

  $scope.salva = function() {
    $scope.contato.$save()
      .then(() => {
        $scope.mensagem = { texto: 'Salvo com sucesso.' };
        $scope.contato = new Contato();
      })
      .catch(erro => $scope.mensagem = { texto: 'Não foi possível salvar o contato.' });
  };

  Contato.query(contatos => $scope.contatos = contatos);

});
