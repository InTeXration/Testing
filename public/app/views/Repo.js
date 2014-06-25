define([
    'marionette',
    'templates',
    'views/RepoItem'
], function (Marionette, templates, ItemView) {
    'use strict';

    return Marionette.CollectionView.extend({
        tagName: 'ul',
        childView: ItemView
    });
});