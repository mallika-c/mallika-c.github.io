const webpack = require('webpack');

module.exports = {
  output: 'export',
  webpack: (config) => {
    config.plugins.push(new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }));

    return config;
  }
};