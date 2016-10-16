var app = angular.module('dynamicTitleApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/')

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'home.html',
        data: {
            title: 'Home Page'
        }
    });

    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'about.html',
        data: {
            title: 'About Me'
        }
    });

    $stateProvider.state('blog', {
        url: '/blog',
        templateUrl: 'blog.html',
        data: {
            title: 'Personal Blog'
        }
    });

    $stateProvider.state('contact', {
        url: '/contact',
        templateUrl: 'contact.html',
        data: {
            title: 'Contact Me'
        }
    });
});

app.run(['$rootScope', '$state',
        function ($rootScope, $state) {
            $rootScope.$on('$stateChangeSuccess', function () {
                $rootScope.title = $state.current.data.title;
            });
        }
    ]
);


