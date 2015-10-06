angular.module('appArray', []).controller('appCtrl', function($scope) {
	$scope.filterBy = {category:"", limit:12, order:"", role:"", tags:"", search: false};
	$scope.reverse = false;
	$scope.modifier = "";
	$scope.current = page;
	$scope.apps = apps;
	$scope.categories = [
		{title:'Academics', category:'Academics', limit:28, search:true},
		{title:'Administrative', category:'Administrative', limit:28, search:true},
		{title:'Admissions', category:'Admissions', limit:28, search:true},
		{title:'Campus Life', category:'Campus Life', limit:28, search:true},
		{title:'Employee Benefits', category:'Employee Benefits', limit:28, search:true},
		{title:'Faculty Services', category:'Faculty Services', limit:28, search:true},
		{title:'Finances', category:'Finances', limit:28, search:true},
		{title:'Housing and Dining', category:'Housing and Dining', limit:28, search:true},
		{title:'IT Services', category:'IT Services', limit:28, search:true},
		{title:'Library', category:'Library', limit:28, search:true},
		{title:'Orientation', category:'Orientation', limit:28, search:true},
		{title:'All Apps', category:'', limit:28, search:true},
	];
	$scope.tags = [
		{name: 'apple'},
		{name: 'banana'},
		{name: 'cupcake'},
		{name: 'dates'},
		{name: 'eggs'},
		{name: 'figs'},
		{name: 'grapes'},
		{name: 'honey'},
		{name: 'ilama'},
		{name: 'jujube'},
		{name: 'kiwi'},
		{name: 'lime'},
		{name: 'mango'},
		{name: 'nectorine'},
		{name: 'orange'},
		{name: 'pear'},
		{name: 'quandong'},
		{name: 'raspberries'},
		{name: 'strawberry'},
		{name: 'tangerine'},
		{name: 'ugni'},
		{name: 'vanilla'},
		{name: 'watermelon'},
		{name: 'xygberry'},
		{name: 'yumberry'},
		{name: 'zwetschge'},
	];
});