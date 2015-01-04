;(function() {

    'use strict';

    angular
        .module('generators')
        .controller('GeneratorsController', GeneratorsController);

    /* @ngInject */
    function GeneratorsController() {

        this.generators = [
            {
                name:'api',
                command: 'mvvm make api',
                options: ['--service', '--factory'],
                description:'Create a new RESTful API Service'
            },
            {
                name:'config',
                command: 'mvvm make config',
                options: ['-f, --functions', '-p, --providers', '-m, --module'],
                description:'Create a new AngularJS Config block.'
            },
            {
                name:'controller',
                command: 'mvvm make controller',
                options: ['-f, --functions', '-p, --providers', '-m, --module'],
                description:'Create a new AngularJS Controller.'
            },
            {
                name:'directive',
                command: 'mvvm make directive',
                options: ['-f, --functions', '-p, --providers', '-m, --module'],
                description:'Create a new AngularJS Directive.'
            },
            {
                name:'service',
                command: 'mvvm make service',
                options: ['-f, --functions', '-p, --providers', '-m, --module'],
                description:'Create a new AngularJS Service.'
            },
            {
                name:'factory',
                command: 'mvvm make factory',
                options: ['-f, --functions', '-p, --providers', '-m, --module'],
                description:'Create a new AngularJS Factory.'
            },
            {
                name:'provider',
                command: 'mvvm make provider',
                options: ['-f, --functions', '-p, --providers', '-m, --module'],
                description:'Create a new AngularJS Provider.'
            },
            {
                name:'test',
                command: 'mvvm make test',
                description:'Create a new AngularJS Factory.'
            },
            {
                name:'styles',
                options:['--styl', '--sass', '--less'],
                command: 'mvvm make styles',
                description:'Create a new Styles file.'
            },
            {
                name:'view',
                options:['--jade'],
                command: 'mvvm make view',
                description:'Create a new view.'
            }
        ];
    }

}).call(this);