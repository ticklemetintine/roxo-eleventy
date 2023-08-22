const pluginBookshop = require("@bookshop/eleventy-bookshop");
const MarkdownIt = require("markdown-it"),
  md = new MarkdownIt({
    html: true,
  });
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPlugin(
    pluginBookshop({
      bookshopLocations: ["component-library"],
      pathPrefix: "",
    })
  );
  
  eleventyConfig.addFilter("markdownify", (markdown) => md.render(markdown));

  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: "src",
      output: "_site",
      include: "includes",
      pages: "pages",
    },
  };
};
