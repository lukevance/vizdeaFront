'use strict';

angular.module('vizdea')
	.controller('signup', ['authSRC', signup]);

function signup(authSRC) {

	var vm = this;

	vm.submit = submit;

	function submit(first, last, email, pword) {
		authSRC.newUser(first, last, email, pword)
			.then(function(data) {
				console.log(data.data.message);
			}).catch(function(err){
				console.log(err);
			});
	}//End of submit
}