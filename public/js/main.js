angular.module('contatooh', ['ngRoute', 'ngResource', 'meusComponentes'])
  .config(function($routeProvider) {

    $routeProvider.when('/contatos', {
      templateUrl: 'partials/contatos.html',
      controller: 'ContatosController'
    })
    .when('/contato/:contatoId', {
      templateUrl: 'partials/contato.html',
      controller: 'ContatoController'
    })
    .when('/contato', {
      templateUrl: 'partials/contato.html',
      controller: 'ContatoController'
    })
    .otherwise({ redirectTo: '/contatos' });
  });
