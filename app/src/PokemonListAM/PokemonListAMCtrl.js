'use strict';

pokemonApp.controller('PokemonListAMCtrl', function($scope, $routeParams, PokemonsService) {

  $scope.pokemons = PokemonsService.query();

});
