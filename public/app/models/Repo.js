define([
    'backbone'
], function (Backbone) {
    'use strict';

    return Backbone.Model.extend({

        urlRoot: function() {
            return '/repo';
        }
    });
});
