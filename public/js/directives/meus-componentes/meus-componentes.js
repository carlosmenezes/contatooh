angular.module('meusComponentes', [])
  .directive('meuPainel', () => {
    var directive = {};
    directive.restrict = "EA";
    directive.scope = { titulo: "@" };
    directive.transclude = true;
    directive.templateUrl = 'js/directives/meus-componentes/meu-painel.html';

    return directive;
  })
  .directive('meuBotaoAviso', () => {
    var directive = {};

    directive.restrict = "E";
    directive.scope = {
      nome: '@',
      acao: '&'
    };
    directive.template =
      '<button ng-click="acao()" class="btn btn-warning">' +
      ' {{nome}}' +
      '</button>';

    return directive;
  })
  .directive('meuFocus', () => {
    var directive = {};

    directive.restrict = "A";
    directive.scope = {
      evento: '@'
    };

    directive.link = (scope, element) => {
      scope.$on(scope.evento, () => {
        element[0].focus();
      });
    };

    return directive;
  });
