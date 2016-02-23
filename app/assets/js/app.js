"use strict";

requirejs.config({
  paths: {
    'jquery': 'libs/jquery',
    'backbone': 'libs/backbone',
    'underscore': 'libs/underscore',
    'text': 'libs/text',
    'localstorage': 'libs/backbone-localStorage',
    'backbone-judge': 'libs/backbone-judge.min'
  }
});

requirejs(['jquery', 'backbone', 'router'], function ($, Backbone, Router) {
  $(document).ready(function () {
    var router = new Router();

    if (Backbone.history) {
      Backbone.history.start();
    }
  });
});