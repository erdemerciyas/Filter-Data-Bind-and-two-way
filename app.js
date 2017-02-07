
var app = angular.module('App', []);

app.controller('MainController', function($scope){
	
	$scope.uyeler = [
		{"model":"Mercedes","yil":2010},
		{"model":"BMW","yil":2015},
		{"model":"Audi","yil":2016}
	];

	$scope.YeniKullanici = function(){
		$scope.uyeler.push({
			model:$scope.model,
			yil:$scope.yil
		});
		$scope.model="";
		$scope.yil="";
		
		//alert(JSON.stringify($scope.uyeler));
	}

});