// function LoadModel($scope, $http, $rootScope) {

// 	$scope.init = function() {

// 		$scope.url = 'php/getDbData.php'; // The url of the php-request
//         $http.post($scope.url, {}) // Create the http post request
//         .success(function(data, status) {
//         	$scope.status = status;
//         	$rootScope.data = data;
//         	if($scope.data.indexOf("mysqli_connect()") != -1){
//         		console.log("Failed to connect to DB, faking model");
//                 $rootScope.data = fakeModel();
//            }
//        })
//         .error(function(data, status) {
//            console.log("No PHP-service found, faking model");
//              $rootScope.data = fakeModel();
//              $scope.status = status;         
//          });
//     }

//     function fakeModel() {
//         var data = [
//         {
//             "id": "1",
//             "name": "byggnader1",
//             "type": "byggnader",
//             "year": null,
//             "imgrefr": "betonghus1",
//             "imgrefr2": "betonghus2",
//             "imgrefr3": null,
//             "imgrefr4": null,
//             "imgrefr5": null,
//             "about": "Ett betonghus byggt med prefabricerade sandwich betongelement, sidobyggnad klädd med cortenplåt. Villan var med i TV8 programmet \"Hustoppen\" och fick 23 poäng"
//         },
//         {
//            "id": "2",
//            "name": "bathroom1",
//            "type": "bathroom",
//            "year": null,
//            "imgrefr": "exbild1",
//            "imgrefr2": "betonghus2",
//            "imgrefr3": null,
//            "imgrefr4": null,
//            "imgrefr5": null,
//            "about": "Ett betonghus byggt med prefabricerade sandwich betongelement, sidobyggnad klädd med cortenplåt. Villan var med i TV8 programmet \"Hustoppen\" och fick 23 poäng"
//        },
//        {
//            "id": "3",
//            "name": "interiours1",
//            "type": "interiours",
//            "year": null,
//            "imgrefr": "exbild2",
//            "imgrefr2": "betonghus2",
//            "imgrefr3": null,
//            "imgrefr4": null,
//            "imgrefr5": null,
//            "about": "Ett betonghus byggt med prefabricerade sandwich betongelement, sidobyggnad klädd med cortenplåt. Villan var med i TV8 programmet \"Hustoppen\" och fick 23 poäng"
//        },
//        {
//            "id": "4",
//            "name": "byggnader2",
//            "type": "byggnader",
//            "year": null,
//            "imgrefr": "exbild3",
//            "imgrefr2": "betonghus2",
//            "imgrefr3": null,
//            "imgrefr4": null,
//            "imgrefr5": null,
//            "about": "Ett betonghus byggt med prefabricerade sandwich betongelement, sidobyggnad klädd med cortenplåt. Villan var med i TV8 programmet \"Hustoppen\" och fick 23 poäng"
//        },
//        {
//            "id": "5",
//            "name": "fromConstruction1",
//            "type": "fromConstruction",
//            "year": null,
//            "imgrefr": "exbild4",
//            "imgrefr2": "betonghus2",
//            "imgrefr3": null,
//            "imgrefr4": null,
//            "imgrefr5": null,
//            "about": "Ett betonghus byggt med prefabricerade sandwich betongelement, sidobyggnad klädd med cortenplåt. Villan var med i TV8 programmet \"Hustoppen\" och fick 23 poäng"
//        },
//        {
//            "id": "6",
//            "name": "bathrooms2",
//            "type": "bathrooms",
//            "year": null,
//            "imgrefr": "exbild5",
//            "imgrefr2": "betonghus2",
//            "imgrefr3": null,
//            "imgrefr4": null,
//            "imgrefr5": null,
//            "about": "Ett betonghus byggt med prefabricerade sandwich betongelement, sidobyggnad klädd med cortenplåt. Villan var med i TV8 programmet \"Hustoppen\" och fick 23 poäng"
//        },
//        {
//            "id": "6",
//            "name": "bathrooms3",
//            "type": "bathrooms",
//            "year": null,
//            "imgrefr": "exbild6",
//            "imgrefr2": "betonghus2",
//            "imgrefr3": null,
//            "imgrefr4": null,
//            "imgrefr5": null,
//            "about": "Ett betonghus byggt med prefabricerade sandwich betongelement, sidobyggnad klädd med cortenplåt. Villan var med i TV8 programmet \"Hustoppen\" och fick 23 poäng"
//        },

//        {
//            "id": "7",
//            "name": "buildings3",
//            "type": "buildings",
//            "year": null,
//            "imgrefr": "exbild7",
//            "imgrefr2": "betonghus2",
//            "imgrefr3": null,
//            "imgrefr4": null,
//            "imgrefr5": null,
//            "about": "Ett betonghus byggt med prefabricerade sandwich betongelement, sidobyggnad klädd med cortenplåt. Villan var med i TV8 programmet \"Hustoppen\" och fick 23 poäng."
//        }
//        ];
//        return data;
//    }


// }