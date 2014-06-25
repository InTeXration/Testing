define([
    'backbone',
    '../models/RepoModel',
], function (Backbone, Model) {
    'use strict';

    return Backbone.Collection.extend({
        model: Model,
        url: '/repo'
    });
});