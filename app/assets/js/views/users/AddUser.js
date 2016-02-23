"use strict";

define(['jquery', 'backbone', 'underscore', 'models/User', 'collections/Users', 'text!views/users/templates/AddUser.html'], function ($, Backbone, _, UserModel, UsersCollection, AddUserTpl) {
  var AddUserView = Backbone.View.extend({
    template: _.template(AddUserTpl),

    events: {
      'click .js-submit': 'addUser'
    },

    initialize: function initialize() {
      _.bindAll(this, 'render', 'addUser');

      this.collection = new UsersCollection();
      this.model = new UserModel();

      this.render();
    },

    render: function render() {
      this.$el.html(this.template({
        userAttrs: this.model.newUserAttrs()
      }));
    },

    addUser: function addUser() {
      var userAttrs = {};

      // Collect input values
      // Determine attribute by name attribute of HTML element
      var $inputs = this.$el.find('input');

      $inputs.each(function (index, input) {
        var $input = $(input);
        userAttrs[$input.attr('name')] = $input.val();
      });

      this.collection.create(userAttrs);
    }
  });

  return AddUserView;
});