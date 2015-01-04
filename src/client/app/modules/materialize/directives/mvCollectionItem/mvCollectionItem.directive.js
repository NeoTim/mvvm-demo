;(function() {

    'use strict';

    angular
        .module('materialize')
        .directive('mvCollectionItem', mvCollectionItem);

    /* @inject */
    function mvCollectionItem() {
        return {
            templateUrl: 'app/modules/materialize/directives/mvCollectionItem/mvCollectionItem.template.html',
            require: '^mvCollection',
            restrict: 'E',
            scope: true,
            transclude: true,
            replace:true,
            link: link

        };

        ////////////////

        function link(scope, element, attrs, ctrl) {

            element.on('click', function () {
                if (element.hasClass('isActive')) {

                    ctrl.children.removeClass('isActive');
                } else {
                    ctrl.children.removeClass('isActive');
                    element.toggleClass('isActive');
                }
            });

            ///////////////////////////////

            /**
             *      toggle
             *      @description
             *      @name  {Object}        description
             *      @return {Object}        description
             */
            function toggle (param) {}

        }
    }

}).call(this);
