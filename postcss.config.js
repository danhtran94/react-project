const path = require("path");

module.exports = {
  plugins: [
    require("postcss-import")({
      path: [path.resolve(__dirname, "src", "assets", "styles")],
    }),
    require("postcss-windicss"),
    require("postcss-preset-env")({
      browsers: "last 2 versions",
      stage: 2,
      autoprefixer: true,
    }),
    process.env.NODE_ENV === "production" &&
      require("cssnano")({
        preset: "default",
      }),
  ],
};
