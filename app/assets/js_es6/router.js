"use strict";

define(['jquery', 'backbone', 'views/users/UsersPage', 'views/groups/GroupsPage', 'views/Add', 'models/User', 'models/Group', 'collections/Users', 'collections/Groups'], 
function($, Backbone, UsersPageView, GroupsPageView, AddView, UserModel, GroupModel, UsersCollection, GroupsCollection) {
  let AppRouter = Backbone.Router.extend({
    routes: {
      '(/)'               : 'usersPage',
      '(/)users'          : 'usersPage',
      '(/)groups'         : 'groupsPage',
      '(/)add-user'       : 'addUser',
      '(/)add-group'      : 'addGroup',
    },

    initialize: function() {
      this.activeTab();
    },

    activeTab: function() {
      $('.main-navigation__item').first().addClass('clicked');

      $('.main-navigation__item').on('click', function() {
        let $items = $('.main-navigation__item');

        if ($items.hasClass('clicked')) {
          $items.removeClass('clicked');
        }

        $(this).addClass('clicked');
      });
    },

    usersPage: function() {
      this.loadPage(UsersPageView);
    },

    groupsPage: function() {
      this.loadPage(GroupsPageView);
    },
    
    addUser: function() {
      this.loadPage(AddView, { model: UserModel, collection: UsersCollection });
    },

    addGroup: function() {
      this.loadPage(AddView, { model: GroupModel, collection: GroupsCollection });
    },

    loadPage: function(View, options = {}) {

      // Destroy (dereference) old (current) view and its subviews
      // If the view has its own close function, call it. Otherwise, use remove
      if (this.view) {
        this.view.close ? this.view.close() : this.view.remove();
      }

      // Create app container, and use it as el for page view
      $('body').append('<div class="content js-app clearfix"></div>');

      // Create new view
      this.view = new View({ el: '.js-app', model: options.model, collection: options.collection });
    }
  });

  return AppRouter;
});