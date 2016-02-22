"use strict";

define(['backbone'], function(Backbone) {
  var UserModel = Backbone.Model.extend({
    defaults: {
      'name': ''
    }    
  });

  return UserModel;
});