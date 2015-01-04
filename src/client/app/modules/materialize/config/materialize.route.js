;(function() {

    'use strict';

    angular
        .module('materialize')
        .config(Materialize);

    /* @ngInject */
    function Materialize ($stateProvider) {

        $stateProvider
            .state('materialize', {
                url: '/materialize',
                templateUrl: 'app/modules/materialize/views/materialize.view.html',
                controller:  'MaterializeController as vm',
                resolve:     {
                    resolvedUsers: resolvedUsers
                },
                navbar: {
                    color:'indigo',
                    links:'white-text',
                    logo:'white-text',
                }
            });

        ////////////////////////

        function resolvedUsers (User) {
            return User.all()
                .then(function (response) {
                    return response.data;
                })
                .catch(function (error) {

                    console.error(error);
                });
        }
    }

}).call(this);