ngBoxFill
=========

[![Build Status](https://travis-ci.org/OpenServicesEU/ngBoxFill.svg?branch=master)](https://travis-ci.org/OpenServicesEU/ngBoxFill)
[![Bower version](https://badge.fury.io/bo/ngBoxFill.svg)](http://badge.fury.io/bo/ngBoxFill)

Angular.js directive that scales the content of the element it is applied on to
fill the box of the element itself. It works by transcluding the descendants of
the directive into a into an `inline` element, taking its `offsetWidth` and
`offsetHeight` and calculating a scaling factor to fill the original element.
The aspect ratio of the scaled content is kept intact all the time.

It should work on all browsers that support [2D transformation via
CSS](http://caniuse.com/#feat=transforms2d).

Resizing the browser window or changing the dimensions of the element with the
directive triggers a recaluclation of the scaling factor.

Unlike solutions like [ng-fi-text](https://github.com/leandropio/ng-fi-text),
[ng-FitText.js](https://github.com/patrickmarabeas/ng-FitText.js) or
[ng-FitTextDynamic](https://github.com/sgtpepper43/ng-FitTextDynamic) it does
not work by approximating the relative `font-size` but also scales content like
images and videos.

Getting started
---------------

 * Include the script on your page after the AngularJS tag:

        <script type='text/javascript' src='path/to/angular.min.js'></script>
        <script type='text/javascript' src='path/to/ng-boxfill.min.js'></script>

 * Ensure that your application module specifies ngBoxFill as a dependency:

        var app = angular.module('myApplication', ['ngBoxFill']);

* Use the directive on any element that should have its content scaled to fit
    its box:


        <style type="text/css">
            .fullscreen {
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                bottom:0;
                margin: 0 auto;
            }
        </style>
        <div class="fullscreen" ng-box-fill>
            <h1>Hello World!</h1>
            <div><img src="http://placehold.it/350x250"></div>
        </div>

License
-------

**ngBoxFill** is licensed under the MIT license. See the LICENSE file for more details.
