
var app = angular.module('app', []);  
app.controller('appCTRL', function($scope, $http)  
{  
    $http.get("Sitemap.xml",  
    {  
        transformResponse: function(cnv)  
        {  
            var x2js = new X2JS();  
            var aftCnv = x2js.xml_str2json(cnv);  
            return aftCnv;  
        }  
    }).success(function(response)  
    {  
        console.log(response);  
    });  
});   
