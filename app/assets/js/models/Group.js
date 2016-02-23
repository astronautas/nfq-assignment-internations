"use strict";

define(['backbone', 'backbone-judge'], function (Backbone) {
  var GroupModel = Backbone.Model.extend({
    validations: {
      'name': [{ fn: 'presence', val: true, msg: 'Name cannot be empty!' }]
    },

    defaults: {
      'name': ''
    },

    modelType: 'group',

    // Returns array of attrs which have
    // to be rendered when adding new User
    newItemAttrs: function newItemAttrs() {
      return ['name'];
    },

    initialize: function initialize() {}
  });

  return GroupModel;
});