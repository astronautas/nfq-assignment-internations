"use strict";

define(['backbone', 'underscore'], function(Backbone, _) {
  let UserItemView = Backbone.View.extend({
    template  : _.template('<%= name %>'),
    tagName   : 'div',
    className : 'page-list__item',

    initialize: function() {
      _.bindAll(this, 'render');

      this.listenTo(this.model, 'change', this.render);
      this.render();
    },

    render: function() {
      this.$el.html(this.template({
        name: this.model.get('name')
      }));
    }
  });

  return UserItemView;
});