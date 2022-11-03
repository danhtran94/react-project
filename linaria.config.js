module.exports = {
  evaluate: true,
  displayName: true,
  preprocessor: "none", // we use postcss
  classNameSlug: (hash, title, args) => `${args.dir}_${args.name}_${title}--${hash}`,
  tagResolver: (source, tag) => {
    if (source === "twin.macro") {
      if (tag === "css") {
        return require.resolve("@linaria/core/processors/css");
      }

      if (tag === "styled") {
        return require.resolve("@linaria/react/processors/styled");
      }
    }

    return null;
  },
};
