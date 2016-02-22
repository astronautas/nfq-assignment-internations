"use strict";

requirejs.config({
  baseUrl: 'assets/js_es6',
  paths: {
    'jquery'       : 'libs/jquery',
    'backbone'     : 'libs/backbone',
    'underscore'   : 'libs/underscore',
    'text'         : 'libs/text',
    'localstorage' : 'libs/backbone-localStorage'
  }
});

requirejs(['jquery', 'backbone', 'router'], function($, Backbone, Router) {
  $(document).ready(function() {
    var router = new Router();

    if (Backbone.history) {
      Backbone.history.start();
    }
  });
});