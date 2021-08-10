const markdownIt = require('markdown-it');
const anchor = require('markdown-it-anchor');
const CleanCSS = require('clean-css');
const renderPermalink = require('./renderPermalink');

module.exports = function (eleventyConfig) {
  const markdownLib = markdownIt({ html: true })
    .use(anchor, {
      permalink: anchor.permalink.headerLink(),
      level: 3
    });

  eleventyConfig.setLibrary('md', markdownLib);

  eleventyConfig.addFilter('cssmin', function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
};