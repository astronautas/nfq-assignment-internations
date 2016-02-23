"use strict";

define(['backbone', 'localstorage', 'models/Group'], function (Backbone, localstorage, GroupModel) {
  let GroupsCollection = Backbone.Collection.extend({
    model: GroupModel,
    localStorage: new Backbone.LocalStorage('Groups')
  });

  return GroupsCollection;
});