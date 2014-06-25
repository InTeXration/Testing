/*global define */

define(function (require) {
    'use strict';

    return {
        footer: require('tpl!templates/footer.tmpl'),
        repo: require('tpl!templates/repo.tmpl'),
        repoItem: require('tpl!templates/repo_item.tmpl'),
        header: require('tpl!templates/header.tmpl')
    };
});
