(function(){
	
	'use strict';

	angular.module('marvelist', ['ui.bootstrap'])
		.controller('Chars', Chars);

	function Chars($http){	

		$http.get('./marvel.json')
			.then(function(res){
				this.chars = res.data;
			}.bind(this));

	}

}());