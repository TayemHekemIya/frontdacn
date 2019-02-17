rootApp.controller("search", function($scope,$http){
    $scope.results = [];
    $scope.callAPI = function(searchPlace, searchPriceF, searchPriceT) {
        if (searchPlace != undefined) {
            var searchName = "%"+searchPlace+"%";
        }
        var searchPriceFrom = searchPriceF;
        var searchPriceTo = searchPriceT;
        var req = {
            method: 'POST',
            url: 'http://localhost:8080/tours/search',
            headers: {
                'Content-Type': "application/json"
            },
            data: { name: searchName, priceFrom: searchPriceFrom, priceTo: searchPriceTo}
        }
        $http(req).then(function(data) {
            $scope.results = data.data;
            $scope.status = data.status;
            var result1 = [];
            var result2 = [];
            var result3 = [];
            console.log(data.data);
            for (var result in data.data) {
                if (data.data[result].websiteId == "1") {
                    result1.push(data.data[result]);
                    console.log(data.data[result]);
                } else if (data.data[result].websiteId == "2") {
                    result2.push(data.data[result]);
                    console.log(data.data[result]);
                } else if (data.data[result].websiteId == "3") {
                    result3.push(data.data[result]);
                    console.log(data.data[result]);
                }
            }
            $scope.r1 = result1;
            $scope.r2 = result2;
            $scope.r3 = result3;
        });
    }       
});