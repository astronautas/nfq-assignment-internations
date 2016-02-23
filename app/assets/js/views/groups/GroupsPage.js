"use strict";

define(['jquery', 'backbone', 'underscore', 'views/Groups/GroupsList'], function ($, Backbone, _, GroupsListView) {
  var GroupsPageView = Backbone.View.extend({
    template: _.template('<h1 class="page-title">Groups</h1><div class="page-list js-groups"></div>'),

    initialize: function initialize() {
      _.bindAll(this, 'render');
      this.render();

      this.groupsList = new GroupsListView({ el: '.js-groups' });
      this.children = [this.groupsList];
    },

    render: function render() {
      this.$el.html(this.template);
    },

    close: function close() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var child = _step.value;

          child.close ? child.close() : child.remove();
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

      this.remove();
    }
  });

  return GroupsPageView;
});