var app = angular.module("loginapp", ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "/Templates/HtmlPage.html" //Load a HTML template  
        })
        .when("/AboutNew", {
            templateUrl: "/Home/About",  //Redirect to action  
            controller: "Home"
        })
        .when("/Contact", {
            template: "<h2>Contact</h2><br/><div>Marimuthu Karuppaiah<br/>India</div>"   //Render custom design  
        })
        .otherwise({
            
            redirectTo: "/Home"
        });

    $locationProvider.hashPrefix('');
}]); 