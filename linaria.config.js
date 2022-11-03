module.exports = {
  evaluate: true,
  displayName: true,
  // classNameSlug: (hash, title, { file }) => {
  //   return `${(file + "")
  //     .split("/")
  //     .pop()
  //     .replace(/(.tsx?|.jsx?)/, "")}-${title}__${hash}`;
  // },
  classNameSlug: (hash, title, args) => `${args.dir}_${args.name}_${title}`,
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
