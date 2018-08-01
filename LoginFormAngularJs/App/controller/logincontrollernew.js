var app = angular.module("loginapp", ['ngRoute'])
app.controller('logincontrollernew', function ($scope, $location, $http, $window) {

    //initilize user data object  
    $scope.UserModel = {
        Email: '',
        Password: ''
    }
    $scope.msg = "";
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
            var httpreq = {
                url: '/Home/VerifyUser',
                method: 'POST',
                data: JSON.stringify($scope.UserModel),
                headers: { 'content-type': 'application/json' }
            }
            $http(httpreq).then(function (response) {
                if (response.data == undefined) {
                    alert("something went wrong");
                }
                else {
                    if (response.data == true) {
                        alert("Successfully Logined as : " + $scope.UserModel.Email);
                        //$location.path('~/Home/Contact');
                        $window.open('../../Home/Contact','_self');
                    } else {
                        alert("Invalid credential");
                    }
                }
            });
        }
    }    
}); 