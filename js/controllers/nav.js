'use strict'; 

angular.module('vizdea')
	.controller('nav', ['authSRC', nav]);

function nav(authSRC) {

	var vm = this;

	vm.signIn = signIn;

	function signIn(email, password){
			authSRC.signInSRC(email, password)
			.then(function(res) {
				vm.user = res.data;
				console.log(vm.user);
			}).catch(function(err) {
				console.log(err);
			});
		}//End of signIn

}//End of nav