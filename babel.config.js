module.exports = function (api) {
  api.cache.using(() => process.env.NODE_ENV);
  const isProd = api.env("production");
  return {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
      "@babel/preset-typescript",
      [
        "@babel/preset-env",
        {
          targets: {
            // Target browsers supporting ES Modules, comment this block to use .browserslistrc
            esmodules: true,
          },
          modules: false, // true for transformation of ES6 module syntax to another module type.
          loose: true, // true mean not strict to es5
          useBuiltIns: "usage", // imports for polyfills when they are used in each file
          corejs: 3,
        },
      ],
      "@linaria",
    ],
    plugins: [
      [
        "babel-plugin-macros",
        {
          twin: {
            styled: {
              import: "styled",
              from: "@linaria/react",
            },
            css: {
              import: "css",
              from: "@linaria/core",
            },
            global: {
              import: "css",
              from: "@linaria/core",
            },
          },
        },
      ],
    ].concat(isProd ? [] : ["react-refresh/babel"]),
  };
};
