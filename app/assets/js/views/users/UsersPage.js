"use strict";

define(['jquery', 'backbone', 'underscore', 'views/users/UsersList'], function ($, Backbone, _, UsersListView) {
  var UsersPageView = Backbone.View.extend({
    template: _.template('<h1>Users</h1><div class="js-users"></div>'),

    initialize: function initialize() {
      _.bindAll(this, 'render');

      this.usersList = new UsersListView();
      this.children = [this.usersList];

      this.render();
    },

    render: function render() {
      this.$el.html(this.template);
    },

    close: function close() {
      this.remove();
    }
  });

  return UsersPageView;
});