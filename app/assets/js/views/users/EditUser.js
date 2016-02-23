"use strict";

define(['jquery', 'backbone', 'underscore', 'text!views/users/templates/EditUser.html'], function ($, Backbone, _, EditUserTpl) {
  var EditUser = Backbone.View.extend({
    template: _.template(EditUserTpl),

    events: {
      'click .js-close': 'close',
      'click .js-update': 'update',
      'click .js-delete-user': 'deleteWarning'
    },

    initialize: function initialize() {
      _.bindAll(this, 'close', 'update', 'render', 'deleteWarning');

      this.listenTo(this.model, 'invalid', this.invalidSubmit);

      this.groups = this.model.allGroups();
      this.groups.fetch({
        reset: true,
        success: this.render
      });
    },

    render: function render() {
      this.$el.html(this.template({
        name: this.model.get('name'),
        allGroups: this.groups.models,
        userGroups: this.model.get('groups')
      }));
    },

    deleteWarning: function deleteWarning(event) {
      if (event.currentTarget.checked) {
        alert('Are you sure you want to delete this user?');
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

    close: function close() {
      this.remove();
      $('.overlay').remove();
    },

    update: function update() {
      var _this = this;

      var $deleteUserInput = $('input[name=delete_user]');
      var that = this;

      if ($deleteUserInput.is(':checked')) {
        this.model.destroy({ success: that.close() });
      } else {
        (function () {
          var $inputs = $('input');
          var attrs = {};
          var groups = [];

          $inputs.each(function (index, input) {
            var $input = $(input);
            var inputVal = $.trim($input.val());

            if ($input.attr('name') === 'group' && $input.is(':checked')) {
              groups.push(inputVal);
            } else if ($input.attr('name') !== 'group') {
              var name = $input.attr('name');
              attrs[name] = inputVal;
            }
          }, _this);

          attrs.groups = groups;
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

  return EditUser;
});