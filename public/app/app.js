/*global define */

define([
    'marionette',
    'collections/BuildCollection',
    'views/Header',
    'views/Repo',
    'views/Footer'
], function (Marionette, RepoCollection, Header, Repo, Footer) {
    'use strict';

    var app = new Marionette.Application();
    var repoCollection = new RepoCollection();

    var viewOptions = {
        collection: repoCollection
    };

    var header = new Header(viewOptions);
    var repo = new Repo(viewOptions);
    var footer = new Footer(viewOptions);

    app.addRegions({
        header: '#header',
        main: '#main',
        footer: '#footer'
    });

    app.addInitializer(function () {
        app.header.show(header);
        app.main.show(repo);
        app.footer.show(footer);
        repoCollection.fetch();
    });

    return window.app = app;
});