"use strict";

define(['jquery', 'backbone', 'underscore', 'collections/Users', 'text!views/templates/Add.html'], function ($, Backbone, _, UsersCollection, AddTpl) {
  var AddView = Backbone.View.extend({
    template: _.template(AddTpl),

    events: {
      'click .js-submit': 'add'
    },

    initialize: function initialize(options) {
      _.bindAll(this, 'render', 'add');

      this.collection = new options.collection();
      this.model = new options.model();

      this.listenTo(this.collection, 'invalid', this.invalidSubmit);
      this.listenTo(this.model, 'invalid', this.invalidSubmit);

      this.render();
    },

    render: function render() {
      this.$el.html(this.template({
        name: this.model.modelType,
        attrs: this.model.newItemAttrs()
      }));
    },

    invalidSubmit: function invalidSubmit(collection, errors) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = errors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var error = _step.value;

          alert(error);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
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

      this.collection.create(attrs, { wait: true, validate: true });
    },

    close: function close() {
      this.remove();
    }
  });

  return AddView;
});