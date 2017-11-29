module.exports = (config) => {
  config.set({
    frameworks: ['mocha', 'chai'],
    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-chai',
      'karma-chrome-launcher',
      'karma-mocha-reporter',
    ],
    files: [
      'src/test_index.js',
    ],
    preprocessors: {
      'src/test_index.js': ['webpack'],
    },
    webpack: {
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
          { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
          { test: /\.css$/, loader: 'css-loader' },
        ],
      },
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
  });
};
