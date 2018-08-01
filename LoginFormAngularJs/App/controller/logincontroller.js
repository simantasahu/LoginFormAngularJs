var app = angular.module("loginapp", [])
angular.module('loginapp').controller('logincontroller', function ($scope, LoginService, $location) {

    //initilize user data object  
    $scope.UserModel = {
        Email: '',
        Password: ''
    }
    $scope.msg = "Hii";
    $scope.Submited = false;
    $scope.IsLoggedIn = false;
    $scope.IsFormValid = false;

    //Check whether the form is valid or not using $watch  
    $scope.$watch("myForm.$valid", function (TrueOrFalse) {
        $scope.IsFormValid = TrueOrFalse;   //returns true if form valid  
    });

    $scope.LoginCheck = function () {
        $scope.Submited = true;
        if ($scope.IsFormValid) {
            LoginService.getUserDetails($scope.UserModel).then(function (d) {
                debugger;
                if (d.data) {
                    $scope.IsLoggedIn = true;
                    $scope.msg = "You successfully Loggedin : " + $scope.UserModel.Email;
                }
                else {
                    alert("Invalid credentials! please try again");
                }
                
            });
        }
    }
})
    .factory("LoginService", function ($http) {
        //initilize factory object.  
        var fact = {};
        fact.getUserDetails = function (d) {
            debugger;
            return $http({
                url: '/Home/VerifyUser1',  
                method: 'POST',
                data: JSON.stringify(d),
                headers: { 'content-type': 'application/json' }
            });
        };
        return fact;
    }); 