// const pluginRss = require("@11ty/eleventy-plugin-rss");
const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
  eleventyConfig.htmlTemplateEngine = "njk";

  eleventyConfig.addCollection("mySort", function(collection) {
    let posts = [];
    collection.getAll().forEach( (item) => {
      if(item.data.tags && item.data.tags[0] == 'news') {
        posts.push(item);
      }
    })
    return posts.sort(function(a, b) {
      return new Date(a.data.publishdate) - new Date(b.data.publishdate);
    }).reverse();
  });
  // eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "md",
    templateFormats: ["html", "njk", "11ty.js", "md"],
    dir: {
      input: "pages",
      output: "docs",
    }
  };
}