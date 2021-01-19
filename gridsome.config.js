// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: "Ric da Silva",
  siteDescription: "Ric da Silva - Programming Thought",
  // chainWebpack: (config) => {
  //   const svgRule = config.module.rule("svg");
  //   svgRule.uses.clear();
  //   svgRule
  //     .use("vue-svg-loader")
  //     .loader("vue-svg-loader")
  //     .options({
  //       svgo: {
  //         plugins: [{ removeDimensions: true }, { removeViewBox: false }],
  //       },
  //     });
  // },
  plugins: [
    {
      // https://gridsome.org/plugins/@gridsome/source-filesystem
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Essay",
        path: "./content/essays/**/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Section",
        path: "./content/sections/**/*.md",
      },
    },
  ],
  // https://gridsome.org/docs/templates/#templates
  templates: {
    Essay: "/writing/:title",
    Section: "/:title",
  },
  // https://www.drewtown.dev/post/setting-up-tailwind-and-purgecss-with-gridsome-without-using-any-plugins/
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  },
  // transformers: {
  //   remark: {
  //     // global remark options
  //   }
};
