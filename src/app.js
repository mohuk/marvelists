(function(){
	
	'use strict';

	angular.module('marvelist', ['ui.bootstrap'])
		.controller('Chars', Chars);

	function Chars($http){	

		this.chars = [];

		this.paginationSettings = {
			currentPage: 1,
			recordsPerPage: 10
		};

		$http.get('./marvel.json')
			.then(function(res){
				this.chars = res.data;
			}.bind(this));

	}

}());