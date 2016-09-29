var app = angular.module('dynamicTitleApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/')

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'home.html',
        data: {
            title: 'Code Detail'
        }
    });

    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'about.html',
        data: {
            title: 'Code Detail'
        }
    });

    $stateProvider.state('blog', {
        url: '/blog',
        templateUrl: 'blog.html',
        data: {
            title: 'Code Detail'
        }
    });

    $stateProvider.state('contact', {
        url: '/contact',
        templateUrl: 'contact.html',
        data: {
            title: 'Code Detail'
        }
    });
});
