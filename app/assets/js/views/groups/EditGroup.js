"use strict";

define(['jquery', 'backbone', 'underscore', 'collections/Users', 'text!views/groups/templates/EditGroup.html'], function ($, Backbone, _, UsersCollection, EditGroupTpl) {
  var EditGroup = Backbone.View.extend({
    template: _.template(EditGroupTpl),

    events: {
      'click .js-close': 'close',
      'click .js-update': 'update',
      'click .js-delete-group': 'deleteWarning'
    },

    initialize: function initialize() {
      var that = this;

      _.bindAll(this, 'close', 'update', 'deleteWarning');
      this.users = new UsersCollection();

      this.listenTo(this.model, 'invalid', this.invalidSubmit);

      this.users.fetch({ reset: true }).done(function () {
        that.render();
      });
    },

    render: function render() {
      this.$el.html(this.template({
        groupAttrs: this.model.attributes
      }));
    },

    deleteWarning: function deleteWarning(event) {
      if (event.currentTarget.checked) {
        if (this.noUsers(this.users, this.model.get('id'))) {
          alert('Are you sure you want to delete this group?');
        } else {
          alert('Group has users. It cannot be deleted!');
          event.currentTarget.checked = false;
        }
      }
    },

    invalidSubmit: function invalidSubmit(model, errors) {
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

    noUsers: function noUsers(users, id) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = users.models[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var user = _step2.value;

          if (_.contains(user.get('groups'), id)) {
            return false;
          }
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

      return true;
    },

    close: function close() {
      this.remove();
      $('.overlay').remove();
    },

    update: function update() {
      var _this = this;

      var $deleteGroupInput = $('input[name=delete_group]');
      var that = this;

      if ($deleteGroupInput.is(':checked') && this.noUsers(this.users, this.model.get('id'))) {
        this.model.destroy({ success: that.close() });
      } else {
        (function () {
          var $inputs = $('input');
          var attrs = {};

          $inputs.each(function (index, input) {
            var $input = $(input);
            var inputVal = $.trim($input.val());
            var name = $input.attr('name');
            attrs[name] = inputVal;
          }, _this);

          _this.model.save(attrs, {
            wait: true,
            success: function success() {
              that.close();
            }
          });
        })();
      }
    }
  });

  return EditGroup;
});