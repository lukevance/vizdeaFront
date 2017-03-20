'use strict';

angular.module('vizdea')
	.service('authSRC', ['$http', authSRC]);

function authSRC($http) {

//POST for sign in
	this.signInSRC = function(userEmail, userPassword) {
		return $http({
			method : 'POST',
			url : 'http://localhost:3000/users/signin',
			data : {
				email : userEmail,
				password : userPassword
			}
		});
	};

	this.newUser = function(first, last, email, pword) {
		return $http({
			method : 'POST',
			url : 'http://localhost:3000/users/new',
			data : {
				firstName : first,
				lastName : last,
				email : email,
				password : pword
			}
		});
	};

}