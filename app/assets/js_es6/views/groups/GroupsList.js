"use strict";

define(['backbone', 'underscore', 'collections/Groups', 'views/groups/GroupItem'], 
function(Backbone, _, GroupsCollection, GroupItemView) {
  let GroupsListView = Backbone.View.extend({
    initialize: function() {
      _.bindAll(this, 'addAll', 'addOne');
      this.collection = new GroupsCollection();
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
      let groupItem = new GroupItemView({ model: model });
      this.children.push(groupItem);
      this.$el.append(groupItem.$el);
    },

    close: function() {
      for (let child of this.children) {
        child.close ? child.close() : child.remove();
      }

      this.remove();
    }
  });

  return GroupsListView;
});