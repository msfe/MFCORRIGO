var earlierProjectsView = function($rootScope) {
    for(var jsonObject in $rootScope.data) {
        new buildingsView(jsonList[jsonObject], jsonObject%3);
    }
}