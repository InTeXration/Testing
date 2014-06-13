define([
    'underscore',
    'backbone'
],function(_, Backbone) {
    "use strict";

    var AppRouter = Backbone.Router.extend({
        routes: {

        }
    });

    var currentView;

    var initialize = function(){

        app_router.on('', function(id){

        });

    };

    var doAuthenticated = function(callback){
        if(!Session.get('user_id')){
            Backbone.history.navigate("welcome", true);
        }else{
            callback();
        }
    };

    return {
        initialize: initialize
    };
});