// eslint-disable-next-line func-names
module.exports = function (api) {
  // Only execute this file once and cache the resulted config object below for the next babel uses.
  // more info about the babel config caching can be found here: https://babeljs.io/docs/en/config-files#apicache
  api.cache.using(() => process.env.NODE_ENV === 'development');

  return {
    presets: [
      // Use the preset-env babel plugins
      // '@babel/preset-env',
      ['@babel/preset-env', {
        useBuiltIns: 'usage', // "usage" | "entry" | false, defaults to false.
        corejs: {
          version: '3.0.0',
          proposals: true,
        },
        targets: {
          chrome: '58',
          ie: '11',
        },
      }],
    ],
    plugins: [
      // Besides the presets, use this plugin
      '@babel/plugin-proposal-class-properties',
    ],
  };
};
