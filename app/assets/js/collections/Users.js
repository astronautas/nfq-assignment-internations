"use strict";

define(['backbone', 'localstorage', 'models/User'], function (Backbone, localstorage, UserModel) {
  var UsersCollection = Backbone.Collection.extend({
    model: UserModel,
    localStorage: new Backbone.LocalStorage('Users')
  });

  return UsersCollection;
});