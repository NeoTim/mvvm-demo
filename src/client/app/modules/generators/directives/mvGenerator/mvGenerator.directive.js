;(function() {

    'use strict';

    angular
        .module('generators')
        .directive('mvGenerator', mvGenerator);

    /* @inject */
    function mvGenerator() {
        return {
            templateUrl: 'app/modules/generators/directives/mvGenerator/mvGenerator.template.html',
            require: '^mvCollection',
            restrict: 'E',
            scope: {
                generator: '=generator'
            },
            transclude: true,
            replace:true,
            link: link
        };

        ////////////////

        function link(scope, element, attrs, ctrl) {

            ///////////////////////////////

            scope.generator.view = 'app/modules/generators/views/' + scope.generator.name + '.view.html';

            element.on('click', function () {
                if (element.hasClass('isActive')) {

                    ctrl.children.removeClass('isActive');
                } else {

                    ctrl.children.removeClass('isActive');
                    element.toggleClass('isActive');
                }
            });

        }
    }

}).call(this);
