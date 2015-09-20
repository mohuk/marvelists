(function(){
	
	'use strict';

	angular.module('marvelist')
		.filter('mvPagination', function () {
	 		return function (list, currentPage, recordsPerPage) {

	        	if (angular.isUndefined(list) || list.length <= 0)
	            	throw ("List either undefined or empty");

	        	if (angular.isUndefined(currentPage) || angular.isUndefined(recordsPerPage))
	            	throw ("Parameters for filter are not defined. [Param 1: current page, Param 2: records per page]");
	        
	        	currentPage = currentPage - 1;
	        	var startSelectionIndex, endSelectionIndex;
	        	startSelectionIndex = currentPage * recordsPerPage;
	        	endSelectionIndex = startSelectionIndex + recordsPerPage;

	        	return list.slice(startSelectionIndex, endSelectionIndex);
    		};
	});

}());