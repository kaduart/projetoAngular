

var myApp =
  angular.module('myApp', ['ngResource']);

const api = 'http://www.mocky.io/v2/5e76797e2f0000f057986099';

myApp.config(['$routeProvider',
  function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/resgatar-investimento', {
        templateUrl: 'views/resgatar-investimento',
        controller: 'InvestimentosController'
      })

      .otherwise({ redirectTo: '/index.html' });
  }]);

myApp.factory('servicoInvestimento', function () {

  resource.get({ id: 1 }, function (data) {
    $scope.investidores = data;
  });

  resource.delete({ id: id });

  resource.save(data);

  return $resource('/api/investimento/id');

});

myApp.controller('InvestimentosController', ['$scope', 'servicoInvestimento', function ($scope, servicoInvestimento) {

  $scope.investidores;
  servicoInvestimento.query(function (data) {
    $scope.investidores = data;
  });

  $scope.investidores = { nome: '', objetivo: '', saldoT: '' };

}]);



