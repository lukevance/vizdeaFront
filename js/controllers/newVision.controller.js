angular.module('vizdea')
  .controller('NewVizions', [NewVizions]);



function NewVizions () {
  var vm = this;
  vm.title = 'Angular Template App';
  vm.subtitle = 'Welcome to Angular!';
}
