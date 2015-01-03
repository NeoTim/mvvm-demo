;(function() {

    'use strict';

    angular
        .module('messages')
        .controller('MessagesController', MessagesController);

    function MessagesController($scope, resolvedMessages, $storage) {

        this.messages = resolvedMessages;

        $storage.sync($scope, 'person');

        // $scope.person.name = {};
        // $scope.person.name.first = 'John';
        // $scope.person.name.last = 'Doe';
        // console.log(logTest());
    }

}).call(this);