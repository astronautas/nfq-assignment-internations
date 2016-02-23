"use strict";

define(['backbone', 'underscore', 'views/users/EditUser'], function(Backbone, _, EditUserView) {
  let UserItemView = Backbone.View.extend({
    template  : _.template('<%= name %>'),
    tagName   : 'div',
    className : 'page-list__item',

    events: {
      'click' : 'edit'
    },

    initialize: function() {
      _.bindAll(this, 'render', 'edit', 'close');

      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.close);
      this.render();
    },

    render: function() {
      this.$el.html(this.template({
        name: this.model.get('name')
      }));
    },

    edit: function() {
      $('body').append('<div class="overlay"><div class="modal"></div></div>');
      new EditUserView({ model: this.model, el: '.modal' });
    },

    close: function() {
      this.remove();
    }
  });

  return UserItemView;
});