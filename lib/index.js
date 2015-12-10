var fs = require('fs');
var path = require('path');
var _ = require('underscore');

module.exports = function (params, callback) {
    var assemble = params.assemble;
    var pages = assemble.options.pages;
    var options = assemble.options.jsonidx || {};
    var pageroot = path.dirname(pages[0].dest);
    options.dest = options.dest || pageroot;
    options.excludeData = options.excludeData || [];

    var jsons = pages.map(function (page) {
        var d = _.difference(Object.keys(page.data), options.excludeData).reduce(function (acc, p) {
            acc[p] = page.data[p];
            return acc;
        }, {});

        return {
            url: page.dest.replace(pageroot + "/", ""),
            data: d
        };

    });

    fs.stat(options.dest, function (e) {
        if (e) mkdirs(options.dest);
        var f = options.dest + "/pages.json";
        fs.writeFile(f, JSON.stringify(jsons), function (e) {
            if (e) throw e;
            console.log("written json index:", f);
        });

    });

    callback();
};

module.exports.options = {
    stage: 'render:pre:pages'
};