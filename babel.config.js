const presets = [
    [
      "@babel/env",
      {
        targets: {
          edge: "14",
          firefox: "54",
          chrome: "59",
          safari: "10",
          ie: "9",
          ios: "9",
          android: "4.4.3",
        },
        useBuiltIns: "usage",
      },
    ],
  ];

  module.exports = { presets };