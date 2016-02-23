"use strict";

define(['jquery', 'backbone', 'underscore', 'collections/Users', 'text!views/groups/templates/EditGroup.html'], 
($, Backbone, _, UsersCollection, EditGroupTpl) => {
  let EditGroup = Backbone.View.extend({
    template: _.template(EditGroupTpl),

    events: {
      'click .js-close'        : 'close',
      'click .js-update'       : 'update',
      'click .js-delete-group' : 'deleteWarning'
    },

    initialize: function() {
      let that = this;

      _.bindAll(this, 'close', 'update', 'deleteWarning');
      this.users = new UsersCollection();

      this.listenTo(this.model, 'invalid', this.invalidSubmit);

      this.users.fetch({ reset: true }).done(function() {
        that.render();
      });
    },

    render: function() {    
      this.$el.html(this.template({
        groupAttrs: this.model.attributes
      }));
    },

    deleteWarning: function(event) {
      if (event.currentTarget.checked) {
        if (this.noUsers(this.users, this.model.get('id'))) {
          alert('Are you sure you want to delete this group?');
        } else {
          alert('Group has users. It cannot be deleted!');
          event.currentTarget.checked = false;
        }
      }
    },

    invalidSubmit: function(model, errors) {
      for (let error of errors) {
        alert(error);
      }
    },

    noUsers: function(users, id) {
      for (let user of users.models) {
        if ( _.contains(user.get('groups'), id) ) {
          return false;
        }
      }

      return true;
    },

    close: function() {
      this.remove();
      $('.overlay').remove();
    },

    update: function() {
      let $deleteGroupInput = $('input[name=delete_group]');
      let that = this;

      if ($deleteGroupInput.is(':checked') && this.noUsers(this.users, this.model.get('id'))) {
        this.model.destroy({ success: that.close() });
      } else {
        let $inputs = $('input');
        let attrs   = {};

        $inputs.each(function(index, input) {
          let $input   = $(input);
          let inputVal = $.trim($input.val());
          let name    = $input.attr('name');
          attrs[name] = inputVal;
        }, this);

        this.model.save(attrs, {
          wait: true,
          success: function () {
            that.close();
          }
        });
      }
    }
  });

  return EditGroup;
});