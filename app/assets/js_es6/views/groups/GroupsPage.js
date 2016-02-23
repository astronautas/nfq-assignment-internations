"use strict";

define(['jquery', 'backbone', 'underscore', 'views/Groups/GroupsList'], 
function($, Backbone, _, GroupsListView) {
  var GroupsPageView = Backbone.View.extend({
    template: _.template('<h1 class="page-title">Groups</h1><div class="page-list js-groups"></div>'),

    initialize: function() {
      _.bindAll(this, 'render');
      this.render();

      this.groupsList = new GroupsListView({ el: '.js-groups' });
      this.children  = [this.groupsList];
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

  return GroupsPageView;
});