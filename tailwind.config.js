module.exports = {
  purge: {
    content: ["./src/**/*.vue", "./src/**/*.js"],
    options: {
      whitelist: ["drift-widget-controller"],
      whitelistPatterns: [/^fa-/, /^svg-inline--fa/],
      whitelistPatternsChildren: [/^token/, /^pre/, /^code/],
    },
  },
};
