"use strict";

define(['backbone', 'underscore', 'views/groups/EditGroup'], function (Backbone, _, EditGroupView) {
  var GroupItemView = Backbone.View.extend({
    template: _.template('<%= name %>'),
    tagName: 'div',
    className: 'page-list__item',

    events: {
      'click': 'edit'
    },

    initialize: function initialize() {
      _.bindAll(this, 'render', 'close');

      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.close);

      this.render();
    },

    render: function render() {
      this.$el.html(this.template({
        name: this.model.get('name')
      }));
    },

    edit: function edit() {
      $('body').append('<div class="overlay"><div class="modal"></div></div>');
      new EditGroupView({ model: this.model, el: '.modal' });
    },

    close: function close() {
      this.remove();
    }
  });

  return GroupItemView;
});