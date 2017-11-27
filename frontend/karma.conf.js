module.exports = (config) => {
  config.set({
      // ... normal karma configuration

    files: [
      'src/test.js'
      // each file acts as entry point for the webpack configuration
    ],

    preprocessors: {
    // add webpack as preprocessor
      'src/test.js': ['webpack']
    },

    webpack: require('./node_modules/react-scripts/config/webpack.config.dev'),

    webpackMiddleware: {
        // webpack-dev-middleware configuration
        // i.e.
      noInfo: true,
        // and use stats to turn off verbose output
      stats: {
          // options i.e.
        chunks: false,
      },
    },
    // eslint-ignore-next-line
    plugins: [
      require('karma-webpack'),
      require('karma-chrome-launcher'),
      require('karma-mocha'),
    ],
    framework: ['mocha'],
    browsers: ['Chrome'],

  });
};
