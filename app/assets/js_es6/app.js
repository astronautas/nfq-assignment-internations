"use strict";

requirejs.config({
  paths: {
    'jquery'        : 'https://code.jquery.com/jquery-1.12.0.min',
    'backbone'      : 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min',
    'underscore'    : 'libs/underscore',
    'text'          : 'libs/text',
    'localstorage'  : 'https://cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.1.16/backbone.localStorage-min',
    'backbone-judge' : 'libs/backbone-judge.min'
  },
});

requirejs(['jquery', 'backbone', 'router'], function($, Backbone, Router) {
  $(document).ready(function() {
    var router = new Router();

    if (Backbone.history) {
      Backbone.history.start();
    }
  });
});