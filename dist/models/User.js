"use strict";

define(['backbone'], function (Backbone) {
  var UserModel = Backbone.Model.extend({
    defaults: {
      'name': ''
    },

    // Returns array of attrs which have
    // to be rendered when adding new User
    newUserAttrs: function newUserAttrs() {
      return ['name'];
    }
  });

  return UserModel;
});