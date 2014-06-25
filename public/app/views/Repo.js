/*global define */

define([
    'marionette',
    'templates'
], function (Marionette, templates) {
    'use strict';

    return Marionette.CompositeView.extend({
        tagName: 'li',

        template: templates.repo,

        ui: {
            edit: '.edit'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render, this);
        },

        onRender: function () {
            this.$el
                .removeClass('active')
        },

        destroy: function () {
            this.model.destroy();
        }

    });
});