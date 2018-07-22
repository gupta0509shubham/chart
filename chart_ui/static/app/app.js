var chartApp = angular.module('chartApp',
    [

    'ui.router',
    'chartApp.chart'

    ]);

chartApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/chart');

    $stateProvider

        .state('chart', {
            url: '/chart',
            views: {
                "" : {
                    "templateUrl" : '/static/app/components/chart/views/chart.html',
                    "controller": 'chartController',
                    "controllerAs": '$chartCtrl'
                }
            }
        })
});
