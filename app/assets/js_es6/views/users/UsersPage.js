"use strict";

define(['jquery', 'backbone', 'underscore', 'views/users/UsersList'], 
function($, Backbone, _, UsersListView) {
  var UsersPageView = Backbone.View.extend({
    template: _.template('<h1 class="page-title">Users</h1><div class="page-list js-users"></div>'),

    initialize: function() {
      _.bindAll(this, 'render');

      this.usersList = new UsersListView();
      this.children  = [this.usersList];

      this.render();
    },

    render: function() {
      this.$el.html(this.template);
    },

    close: function() {
      this.remove();
    }
  });

  return UsersPageView;
});