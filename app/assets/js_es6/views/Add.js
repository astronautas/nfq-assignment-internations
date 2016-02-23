"use strict";

define(['jquery', 'backbone', 'underscore', 'collections/Users', 'text!views/templates/Add.html'], 
function($, Backbone, _, UsersCollection, AddTpl) {
  let AddView = Backbone.View.extend({
    template: _.template(AddTpl),

    events: {
      'click .js-submit': 'add'
    },

    initialize: function(options) {
      _.bindAll(this, 'render', 'add');
      
      this.collection = new options.collection();
      this.model      = new options.model();

      this.listenTo(this.collection, 'invalid', this.invalidSubmit);
      this.listenTo(this.model, 'invalid', this.invalidSubmit);

      this.render();
    },

    render: function() {
      this.$el.html(this.template({
        name  : this.model.modelType,
        attrs : this.model.newItemAttrs()
      }));
    },

    invalidSubmit: function(collection, errors) {
      for (let error of errors) {
        alert(error);
      }
    },

    add: function() {
      let attrs = {};

      // Collect input values
      // Determine attribute by name attribute of HTML element
      let $inputs = this.$el.find('input');

      $inputs.each(function(index, input) {
        let $input = $(input);
        attrs[$input.attr('name')] = $input.val();
      });

      this.collection.create(attrs, { wait: true, validate: true });   
    },

    close: function() {
      this.remove();
    }
  });

  return AddView;
});