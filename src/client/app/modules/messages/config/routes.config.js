;(function() {

    'use strict';

    angular
        .module('messages')
        .config(Messages);

    /* @ngInject */
    function Messages ($stateProvider) {

        $stateProvider
            .state('messages', {
                url: '/messages',
                templateUrl: 'app/modules/messages/views/messages.view.html',
                controller:  'MessagesController as vm',
                resolve:     {
                    resolvedUsers: resolvedUsers
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