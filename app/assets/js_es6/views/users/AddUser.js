"use strict";

define(['backbone', 'underscore', 'models/User'], function(Backbone, _, UserModel) {
  var AddUserView = Backbone.View.extend({
    initialize: function() {
      _.bindAll(this, this.render);
      
      this.model = new UserModel();
      this.render();
    },

    render: function() {
      this.$el.html(this.template({
        userAttrs: this.model.attributes
      }));
    }
  });

  return AddUserView;
});