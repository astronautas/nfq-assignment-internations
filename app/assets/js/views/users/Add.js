"use strict";

define(['jquery', 'backbone', 'underscore', 'collections/Users', 'text!views/users/templates/Add.html'], function ($, Backbone, _, UsersCollection, AddTpl) {
  var AddView = Backbone.View.extend({
    template: _.template(AddTpl),

    events: {
      'click .js-submit': 'add'
    },

    initialize: function initialize(options) {
      _.bindAll(this, 'render', 'add');

      this.collection = new options.collection();
      this.model = new options.model();
      this.render();
    },

    render: function render() {
      this.$el.html(this.template({
        name: this.model.modelType,
        attrs: this.model.newItemAttrs()
      }));
    },

    add: function add() {
      var attrs = {};

      // Collect input values
      // Determine attribute by name attribute of HTML element
      var $inputs = this.$el.find('input');

      $inputs.each(function (index, input) {
        var $input = $(input);
        attrs[$input.attr('name')] = $input.val();
      });

      this.collection.create(attrs);
    }
  });

  return AddView;
});