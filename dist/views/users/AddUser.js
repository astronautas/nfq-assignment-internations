"use strict";

define(['backbone', 'underscore', 'models/User', 'text!views/users/templates/AddUser.html'], function (Backbone, _, UserModel, AddUserTpl) {
  var AddUserView = Backbone.View.extend({
    template: _.template(AddUserTpl),

    initialize: function initialize() {
      _.bindAll(this, 'render');

      this.model = new UserModel();
      this.render();
    },

    render: function render() {
      this.$el.html(this.template({
        userAttrs: this.model.newUserAttrs()
      }));
    }
  });

  return AddUserView;
});