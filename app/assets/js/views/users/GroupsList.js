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
    }
  });

  return GroupsListView;
});