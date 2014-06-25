/*global define */

define([
    'backbone',
    'models/Repo',
], function (Backbone, Repo) {
    'use strict';

    return Backbone.Collection.extend({
        model: Repo
    });
});