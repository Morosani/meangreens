app.config(function ($stateProvider) {

    $stateProvider.state('email-edit', {
        url: '/email-edit',
        templateUrl: 'js/edit/email-edit/email-edit.html',
        controller: 'EmailEditCtrl'
    });

});

app.controller('EmailEditCtrl', function ($scope, AuthService, $state, $localStorage, AccountFactory) {

	// AuthService.getLoggedInUser().then(function (user){
		
	// 	//to display in edit form
	// 	// $scope.currentProperty = $localStorage.currentProperty
		
	// 	//populated from session
	// 	$scope.user = {};
	// 	$scope.user.tchoPayId = user.tchoPayId
	// 	$scope.user.email = user.email
		
	// 	//populated by edit form
	// 	$scope.user.password

	// 	//UNIQUE PROPERTY TO EDIT
	// 	$scope.user.email
	// 	$scope.user.property = "email"

	// 	//submit the edited account info
	// 	$scope.submitEditCard = function(){
	// 		AccountFactory.submitEditCard($scope.user, $scope)			
	// 	}

	// });

});