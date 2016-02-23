"use strict";

define(['jquery', 'backbone', 'underscore', 'text!views/users/templates/EditUser.html'], 
($, Backbone, _, EditUserTpl) => {
  let EditUser = Backbone.View.extend({
    template: _.template(EditUserTpl),

    events: {
      'click .js-close'       : 'close',
      'click .js-update'      : 'update',
      'click .js-delete-user' : 'deleteWarning'
    },

    initialize: function() {
      _.bindAll(this, 'close', 'update', 'render', 'deleteWarning');

      this.listenTo(this.model, 'invalid', this.invalidSubmit);

      this.groups = this.model.allGroups();
      this.groups.fetch({
        reset: true,
        success: this.render
      });
    },

    render: function() { 
      this.$el.html(this.template({
        name       : this.model.get('name'),
        allGroups  : this.groups.models,
        userGroups : this.model.get('groups')
      }));
    },

    deleteWarning: function(event) {
      if (event.currentTarget.checked) {
        alert('Are you sure you want to delete this user?');
      }
    },

    invalidSubmit: function(model, errors) {
      for (let error of errors) {
        alert(error);
      }
    },

    close: function() {
      this.remove();
      $('.overlay').remove();
    },

    update: function() {
      let $deleteUserInput = $('input[name=delete_user]');
      let that = this;

      if ($deleteUserInput.is(':checked')) {
        this.model.destroy({ success: that.close() });
      } else {
        let $inputs = $('input');
        let attrs   = {};
        let groups  = [];

        $inputs.each(function(index, input) {
          let $input   = $(input);
          let inputVal = $.trim($input.val());

          if ($input.attr('name') === 'group' && $input.is(':checked')) {
            groups.push(inputVal);
          } else if ($input.attr('name') !== 'group') {
            let name    = $input.attr('name');
            attrs[name] = inputVal;          
          }
        }, this);

        attrs.groups = groups;
        this.model.save(attrs, {
          wait: true,
          success: function () {
            that.close();
          }
        });      
      }
    }
  });

  return EditUser;
});