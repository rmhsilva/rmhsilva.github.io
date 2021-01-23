// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: "Ric da Silva",
  siteDescription: "Ric da Silva - Programming Thought",
  siteUrl: "https://rmhsilva.com",
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
    {
      // https://next.gridsome.org/plugins/gridsome-plugin-feed
      use: "gridsome-plugin-feed",
      options: {
        contentTypes: ["Essay"],
        feedOptions: {
          title: "rmhsilva.com Feed",
          description: "Thoughts about programming and the world",
          link: "https://rmhsilva.com/",
          language: "en",
        },
        rss: {
          enabled: true,
          output: "/rss.xml",
        },
        maxItems: 25,
        filterNodes: (node) => node.draft === false,
        nodeToFeedItem: (node) => ({
          title: node.title,
          author: "Ric da Silva",
          // date: node.date,
          content: node.excerpt,
        }),
      },
    },
  ],
  // https://gridsome.org/docs/templates/#templates
  templates: {
    Essay: "/w/:title",
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
