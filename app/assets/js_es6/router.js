"use strict";

define(['jquery', 'backbone', 'views/users/UsersPage', 'views/users/AddUser'], 
function($, Backbone, UsersPageView, AddUserView) {
  let AppRouter = Backbone.Router.extend({
    routes: {
      '(/)'              : 'usersPage',
      '(/)users'         : 'usersPage',
      '(/)groups'        : 'groupsPage',
      '(/)add-user'      : 'addUser',
      '(/)user/edit/:id' : 'editUser',
      '(/)group/edit:id' : 'editGroup',
      '(/)user'          : 'showUser',
      '(/)group'         : 'showGroup'
    },

    usersPage: function() {
      this.loadPage(UsersPageView);
    },

    // groupsPage: function() {
    //   this.loadPage(GroupsPageView);
    // },
    
    addUser: function() {
      this.loadPage(AddUserView);
    },

    editUser: function(id) {
    },

    editGroup: function(id) {
    },

    showUser: function(id) {
    },

    showGroup: function(id) {
    },

    loadPage: function(View) {
      // Destroy (dereference) old (current) view and its subviews
      // If the view has its own close function, call it. Otherwise, use remove
      if (this.view) {
        this.view.close ? this.view.close() : this.view.remove();
      }

      // Create app container, and use it as el for page view
      $('body').append('<div class="content js-app clearfix"></div>');

      // Create new view
      this.view = new View({ el: '.js-app'});
    }
  });

  return AppRouter;
});