var path = require('path');

var pattern = function (file) {
    return {
        pattern: file,
        included: true,
        served: true,
        watched: false
    };
};

var framework = function (files) {
    files.unshift(patten(path.resolve(require.resolve('js-must'), '../dist/js-must.js')));
};

framework.$inject = ['config.files'];
module.exports = {'framework:js-must': ['factory', framework]};
