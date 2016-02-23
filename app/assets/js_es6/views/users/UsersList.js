"use strict";

define(['backbone', 'underscore', 'collections/Users', 'views/users/UserItem'], 
function(Backbone, _, UsersCollection, UserItemView) {
  let UsersListView = Backbone.View.extend({
    initialize: function() {
      _.bindAll(this, 'addAll', 'addOne');
      this.collection = new UsersCollection();
      this.children   = [];

      this.listenTo(this.collection, 'reset', this.addAll);
      this.listenTo(this.collection, 'add', this.addOne);

      this.collection.fetch({ reset: true });
    },

    addAll: function() {
      for (let model of this.collection.models) {
        this.addOne(model);
      }
    },

    addOne: function(model) {
      let userItem = new UserItemView({ model: model });
      this.children.push(userItem);
      this.$el.append(userItem.$el);
    },

    close: function() {
      for (let child of this.children) {
        child.close ? child.close() : child.remove();
      }

      this.remove();
    }
  });

  return UsersListView;
});