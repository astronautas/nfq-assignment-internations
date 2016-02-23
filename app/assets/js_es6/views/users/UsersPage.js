"use strict";

define(['jquery', 'backbone', 'underscore', 'views/users/UsersList'], 
function($, Backbone, _, UsersListView) {
  let UsersPageView = Backbone.View.extend({
    template: _.template('<h1 class="page-title">Users</h1><div class="page-list js-users"></div>'),

    initialize: function() {
      _.bindAll(this, 'render');
      this.render();

      this.usersList = new UsersListView({ el: '.js-users' });
      this.children  = [this.usersList];
    },

    render: function() {
      this.$el.html(this.template);
    },

    close: function() {
      for (let child of this.children) {
        child.close ? child.close() : child.remove();
      }

      this.remove();
    }
  });

  return UsersPageView;
});