'use strict';

angular.module('vizdea')
  .controller('NewVizions', [NewVizions]);


function NewVizions () {
  var vm = this;
  vm.title = 'Angular Template App';
  vm.subtitle = 'Welcome to Angular!';
  vm.submit = submit;

  function submit (who, why, what){
    console.log(who);
    console.log(why);
    console.log(what);
  }


}
