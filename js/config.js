'use strict';

angular.module('vizdea')
  .config(['cfpLoadingBarProvider', config]);

  function config(cfpLoadingBarProvider) {

  	cfpLoadingBarProvider.includeSpinner = true;
    cfpLoadingBarProvider.includeBar = true;

  }