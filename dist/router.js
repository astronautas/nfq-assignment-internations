"use strict";

define(['jquery', 'backbone', 'views/users/UsersPage', 'views/users/AddUser'], function ($, Backbone, UsersPageView, AddUserView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '(/)': 'usersPage',
      '(/)users': 'usersPage',
      '(/)groups': 'groupsPage',
      '(/)add-user': 'addUser',
      '(/)user/edit/:id': 'editUser',
      '(/)group/edit:id': 'editGroup',
      '(/)user': 'showUser',
      '(/)group': 'showGroup'
    },

    usersPage: function usersPage() {
      this.loadPage(UsersPageView);
    },

    // groupsPage: function() {
    //   this.loadPage(GroupsPageView);
    // },

    addUser: function addUser() {
      this.loadPage(AddUserView);
    },

    editUser: function editUser(id) {},

    editGroup: function editGroup(id) {},

    showUser: function showUser(id) {},

    showGroup: function showGroup(id) {},

    loadPage: function loadPage(View) {
      // Destroy (dereference) old (current) view and its subviews
      // If the view has its own close function, call it. Otherwise, use remove
      if (this.view) {
        this.view.close ? this.view.close() : this.view.remove();
      }

      // Create app container, and use it as el for page view
      $('body').append('<div class="content js-app clearfix"></div>');

      // Create new view
      this.view = new View({ el: '.js-app' });
    }
  });

  return AppRouter;
});