/**
 * Created by andrii.polishchuk on 9/18/2015.
 */
requirejs.config({
    paths: {
        jquery: '../lib/vendor/jquery/dist/jquery',
        underscore: '../lib/vendor/underscore/underscore',
        script: 'script.min'
    }
});

require(
    ['script', 'jquery'],
    function( ParentClass, $ ){

        var obj = new ParentClass;
        obj.akkordeon();
        obj.filterRedStatus();
        obj.filterGreenStatus();
        obj.filterGreyStatus();
        obj.filterAllStatus();
    }
);