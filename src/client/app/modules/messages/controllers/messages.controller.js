;(function() {

    'use strict';

    angular
        .module('messages')
        .controller('MessagesController', MessagesController);

    function MessagesController($scope, resolvedUsers, $storage) {

        this.users = resolvedUsers;

        // $scope.person.name = {};
        // $scope.person.name.first = 'John';
        // $scope.person.name.last = 'Doe';
        // console.log(logTest());
    }

}).call(this);