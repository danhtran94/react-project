const path = require("path");

module.exports = {
  plugins: [
    require("postcss-import")({
      path: [path.resolve(__dirname, "src", "styles")],
    }),
    require("postcss-mixins"),
    // require("postcss-nested"),
    require("tailwindcss/nesting"),
    require("tailwindcss")("./tailwind.config.js"),
    process.env.NODE_ENV === "production" && require("autoprefixer"),
    process.env.NODE_ENV === "production" &&
      require("cssnano")({
        preset: "default",
      }),
  ],
};
