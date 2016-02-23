"use strict";

define(['backbone', 'underscore', 'collections/Users', 'views/users/UserItem'], function (Backbone, _, UsersCollection, UserItemView) {
  var UsersListView = Backbone.View.extend({
    initialize: function initialize() {
      _.bindAll(this, 'addAll', 'addOne');
      this.collection = new UsersCollection();
      this.children = [];

      this.listenTo(this.collection, 'reset', this.addAll);
      this.listenTo(this.collection, 'add', this.addOne);

      this.collection.fetch();
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
      var userItem = new UserItemView({ model: model });
      this.children.push(userItem);
      this.$el.append(userItem.$el);
    }
  });

  return UsersListView;
});