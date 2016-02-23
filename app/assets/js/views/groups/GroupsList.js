"use strict";

define(['backbone', 'underscore', 'collections/Groups', 'views/groups/GroupItem'], function (Backbone, _, GroupsCollection, GroupItemView) {
  var GroupsListView = Backbone.View.extend({
    initialize: function initialize() {
      _.bindAll(this, 'addAll', 'addOne');
      this.collection = new GroupsCollection();
      this.children = [];

      this.listenTo(this.collection, 'reset', this.addAll);
      this.listenTo(this.collection, 'add', this.addOne);

      this.collection.fetch({ reset: true });
    },

    addAll: function addAll() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.collection.models[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var model = _step.value;

          this.addOne(model);
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

    addOne: function addOne(model) {
      var groupItem = new GroupItemView({ model: model });
      this.children.push(groupItem);
      this.$el.append(groupItem.$el);
    },

    close: function close() {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var child = _step2.value;

          child.close ? child.close() : child.remove();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.remove();
    }
  });

  return GroupsListView;
});