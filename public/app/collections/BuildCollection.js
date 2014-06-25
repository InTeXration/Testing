define([
    'backbone',
    '../models/BuildModel',
], function (Backbone, Model) {
    'use strict';

    return Backbone.Collection.extend({
        model: Model,
        url: '/build'
    });
});