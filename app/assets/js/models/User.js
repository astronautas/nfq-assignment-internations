"use strict";

define(['backbone', 'collections/Groups', 'backbone-judge'], function (Backbone, GroupsCollection) {
  var UserModel = Backbone.Model.extend({
    validations: {
      'name': [{ fn: 'presence', val: true, msg: 'Name cannot be empty!' }]
    },

    defaults: {
      'name': '',

      // Saved in format [{name: groupname, id: groupid}, ...]
      'groups': ''
    },

    modelType: 'user',

    // Returns array of attrs which have
    // to be rendered when adding new User
    newItemAttrs: function newItemAttrs() {
      return ['name'];
    },

    allGroups: function allGroups() {
      var groups = new GroupsCollection();
      return groups;
    }
  });

  return UserModel;
});