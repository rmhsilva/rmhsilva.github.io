module.exports = {
  purge: {
    content: ["./src/**/*.vue", "./src/**/*.js"],
    options: {
      whitelist: ["drift-widget-controller"],
      whitelistPatterns: [/^fa-/, /^svg-inline--fa/],
      whitelistPatternsChildren: [/^token/, /^pre/, /^code/],
    },
  },
  theme: {
    extend: {
      colors: {
        primary: "green",
        // primary: {
        //   100: '#f7fafc',
        //   900: '#1a202c',
        // },
      },
    },
  },
};
