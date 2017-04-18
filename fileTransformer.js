/**
 * Created by Marcin Sirocki
 * e-mail: m.sirocki@madkom.pl
 */
const tsPreprocessor = require('ts-jest/preprocessor.js');
const htmlLoader = require('html-loader');

module.exports = {
    process(src, filename, config, options) {
        if (filename.indexOf('html') !== -1) {
            src = htmlLoader(src);
        }
        return tsPreprocessor.process(src, filename, config);
    }
};
