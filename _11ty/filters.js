// _11ty/filters.js
const { DateTime } = require('luxon')
// inline minified CSS
const CleanCSS = require('clean-css')
const Path = require('path')

/**
 * Most of the Webmentions code is inspired by <https://github.com/siakaramalegos/sia.codes-eleventy/blob/main/src/_11ty/filters.js>
 */

// Already in eleventy-base-blog
module.exports = {
  getWebmentionsForUrl: (webmentions, url) => {
    return webmentions.children.filter(entry => entry['wm-target'] === url)
  },

  size: (mentions) => {
    return !mentions ? 0 : mentions.length
  },

  isOwnWebmention: (webmention) => {
    const urls = [
      'https://johanbove.info',
      'https://twitter.com/johanbove'
    ]
    const authorUrl = webmention.author ? webmention.author.url : false
    // check if a given URL is part of this site.
    return authorUrl && urls.includes(authorUrl)
  },

  sortWebmentions: (mentions) => {
    return mentions.sort((a, b) => {
      if (a.published < b.published) {
        return -1
      }
      if (a.published > b.published) {
        return 1
      }
      // a must be equal to b
      return 0
    })
  },

  webmentionsByType: (mentions, mentionType) => {
    return mentions.filter(entry => !!entry[mentionType])
  },

  readableDateFromISO: (dateStr, formatStr = "dd LLL yyyy 'at' hh:mma") => {
    return DateTime.fromISO(dateStr).toFormat(formatStr)
  },

  // https://github.com/11ty/eleventy/issues/648#issuecomment-663241373
  relative: function (url) {
    return Path.join(
      './',
      this.ctx.page.url.split('/').reduce((a, b) => a + (b && '../')),
      url
    )
  },

  cssmin: (code) => new CleanCSS({}).minify(code).styles,

  asDate: (code) => new Date(code),

  plantag: (code) => code.replace(/^[0-9]+-/, ''),

  navpath: function (code) {
    const SEPERATOR = '/'
    const paths = code.substr(1)
    const pathsSplit = paths.split(SEPERATOR)
    const pathsWithLinks = []
    let uri

    pathsSplit.forEach((el, index) => {
      if (el === SEPERATOR) {
        return
      }
      if (index === 0) {
        uri = Path.join(
          './',
          this.ctx.page.url.split('/').reduce((a, b) => a + (b && '../')),
          `${SEPERATOR}${el}`
        )

        pathsWithLinks.push(`<a href="${uri}" title="${el}">${el}${SEPERATOR}</a>`)
      } else if (index < pathsSplit.length - 1) {
        pathsWithLinks.push(`<span title="${el}">${el}</span>`)
      }
    })
    return pathsWithLinks.join('')
  },

  // {{ array | where: key,value }}
  // eg. {{ site.members | where: "graduation_year","2014" }}
  where: (array, key, value) => {
    return array.filter(item => {
      const keys = key.split('.')
      const reducedKey = keys.reduce((object, key) => {
        return object[key]
      }, item)

      return (reducedKey === value ? item : false)
    })
  },

  toUTCString: (date) => date.toUTCString()
}
