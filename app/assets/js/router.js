"use strict";

define(['jquery', 'backbone', 'views/users/UsersPage', 'views/groups/GroupsPage', 'views/Add', 'models/User', 'models/Group', 'collections/Users', 'collections/Groups'], function ($, Backbone, UsersPageView, GroupsPageView, AddView, UserModel, GroupModel, UsersCollection, GroupsCollection) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '(/)': 'usersPage',
      '(/)users': 'usersPage',
      '(/)groups': 'groupsPage',
      '(/)add-user': 'addUser',
      '(/)add-group': 'addGroup'
    },

    initialize: function initialize() {
      this.activeTab();
    },

    activeTab: function activeTab() {
      $('.main-navigation__item').first().addClass('clicked');

      $('.main-navigation__item').on('click', function () {
        var $items = $('.main-navigation__item');

        if ($items.hasClass('clicked')) {
          $items.removeClass('clicked');
        }

        $(this).addClass('clicked');
      });
    },

    usersPage: function usersPage() {
      this.loadPage(UsersPageView);
    },

    groupsPage: function groupsPage() {
      this.loadPage(GroupsPageView);
    },

    addUser: function addUser() {
      this.loadPage(AddView, { model: UserModel, collection: UsersCollection });
    },

    addGroup: function addGroup() {
      this.loadPage(AddView, { model: GroupModel, collection: GroupsCollection });
    },

    loadPage: function loadPage(View) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];


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