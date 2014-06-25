define([
    'marionette',
    'templates',
], function (Marionette, templates) {
    'use strict';

    return Marionette.Layout.extend({
        template: templates.footer
    });
});