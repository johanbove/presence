// https://www.11ty.dev/docs/plugins/rss/#use-with-other-template-languages-new-in-rss-1.1.0
const pluginRss = require("@11ty/eleventy-plugin-rss")
const pluginDate = require("eleventy-plugin-date")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const fs = require("fs")

const filters = require('./_11ty/filters')

const passThroughCopies = 'images,static,scripts,theme.css,theme-basic.css,print.css,favicon.ico,humans.txt,twtxt.txt,robots.txt'

module.exports = function(eleventyConfig) {
  // 404 page in localhost
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {

        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync('_site/404.html')
          // Add 404 http status code in request header.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" })
          // Provides the 404 content without redirect.
          res.write(content_404)
          res.end()
        })
      }
    }
  })
  
  // Aliases are in relation to the _includes folder
  eleventyConfig.addLayoutAlias('main', 'layouts/main.njk')
  eleventyConfig.addLayoutAlias('posts', 'layouts/posts.njk')
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk')
  eleventyConfig.addLayoutAlias('text', 'layouts/text.njk')
  eleventyConfig.addLayoutAlias('plan', 'layouts/plan.njk')
  eleventyConfig.addLayoutAlias('plans', 'layouts/plans.njk')
  
  // Copy the `assets` directory to the compiled site folder
  passThroughCopies.split(',').forEach(file => {
    eleventyConfig.addPassthroughCopy(file)
  })
  
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(pluginDate)
  eleventyConfig.addPlugin(syntaxHighlight)
  
  eleventyConfig.addPairedShortcode("plan_task", function(content, timestamp) {
    return `<article class="task"><h3 class="meta__time">${timestamp}</h3>
${content}
</article>`
  })
  
  // Get only content that matches a tag
  eleventyConfig.addCollection("myPosts", function(collectionApi) {
    return collectionApi.getFilteredByTag("post")
  })
  
  // Sort with `Array.sort`
  eleventyConfig.addCollection("PostsSortedByPublished", function(collectionApi) {
    return collectionApi.getFilteredByTag("post").sort(function(a, b) {
      return new Date(b.data.published) - new Date(a.data.published)
    })
  })

  // Filters
  Object.keys(filters).forEach(filterName => {
    eleventyConfig.addFilter(filterName, filters[filterName])
  })
  
  return {
    dir: {
      input: './',
      output: './_site'
    },
    passthroughFileCopy: true
  }
}
