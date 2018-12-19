const config = require('../../../test/jasmine')

module.exports = {
    ...config,
    spec_files: [
        "test/src/**/*.ts",
        "test/src/**/*.js",
        "test/src/**/*.tsx",
        "test/src/**/*.jsx",
        'src/performerQa/test/src/**/*.ts',
        'src/performerQa/test/src/**/*.js',
        'src/performerQa/test/src/**/*.tsx',
        'src/performerQa/test/src/**/*.jsx',
    ],
}
