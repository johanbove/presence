/* global HTMLElement fetch customElements */
/**
 * Fetch webmentions v0.1.1
 * @see http://microformats.org/wiki/h-entry
 */
const myWebmentions = class extends HTMLElement {
  constructor () {
    super()

    if (typeof fetch !== 'function') {
      return
    }

    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' })

    const style = document.createElement('style')
    style.textContent = `
.webmentions {
  margin: 10px 0;
  padding: 0;
  font-family: sans-serif;
  list-style-type: none;
}

.webmention {
  display: inline-block;
  margin: 5px;
  max-width: 80px;
}

.webmention a {
  color: #333;
  display: block;
}

.webmention a:visited {
  color: #777;
}

.webmention-author {
  margin: 0;
}

.webmention-author-photo img {
  max-width: 60px;
  max-height: 60px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
}

.webmention-author-name {
  font-weight: 600;
}

.webmention-author-meta {
  display: none;
}`

    shadow.appendChild(style)

    const target = window.location.href
    const mentions = 'https://webmention.io/api/mentions.jf2?target=' + target
    // console.log('Getting webmentions for target ' + target)

    fetch(mentions)
      .then(function (response) {
        // console.log(url, response)
        return response.json()
      })
      .then(function (data) {
        // console.log(JSON.stringify(data))

        if (data.type && data.type === 'feed' && data.children) {
          const webmentions = data.children
          const nrOfWebmentions = webmentions.length
          const webmentionsNode = document.createElement('div')
          const label = document.createElement('p')
          const list = document.createElement('ul')
          const mentionsOf = []
          const likesOf = []
          const inRepliesTo = []

          webmentionsNode.setAttribute('id', 'webmentions')
          // webmentionsNode.setAttribute('aria-hidden', true)

          list.setAttribute('class', 'webmentions')

          if (nrOfWebmentions === 0) {
            label.textContent = 'No webmentions yet...'
          } else if (nrOfWebmentions === 1) {
            label.textContent = 'One webmention:'
          } else {
            label.textContent = nrOfWebmentions + ' webmentions:'
          }

          webmentionsNode.appendChild(label)

          webmentions.forEach(function (wm) {
            const li = document.createElement('li')
            const wmFigure = document.createElement('figure')
            const img = document.createElement('img')
            const figcaption = document.createElement('figcaption')
            const authorPhoto = document.createElement('a')
            const authorName = document.createElement('a')
            const authorDate = document.createElement('time')
            const permalink = document.createElement('a')
            const published = wm.published.split('T').join(' ')

            let wmPropertyLabel
            let uType = 'u-like'

            switch (wm['wm-property']) {
              case 'like-of':
                likesOf.push(wm)
                wmPropertyLabel = 'liked'
                break
              case 'mention-of':
                uType = 'u-repost'
                mentionsOf.push(wm)
                wmPropertyLabel = 'mentioned'
                break
              case 'in-reply-to':
                uType = 'u-repost'
                inRepliesTo.push(wm)
                wmPropertyLabel = 'replied'
                break
              default:
                wmPropertyLabel = 'linked'
                break
            }

            li.setAttribute('class', 'h-cite h-entry' + ' ' + uType + ' ' + 'webmention' + ' ' + 'webmention-' + wm['wm-property'])
            wmFigure.setAttribute('class', 'p-author h-card webmention-author')
            figcaption.setAttribute('class', 'webmention-author-meta')

            authorPhoto.setAttribute('href', wm.author.url)
            authorPhoto.setAttribute('class', 'avatar webmention-author-photo')
            authorPhoto.setAttribute('title', wm.author.name + ' ' + wmPropertyLabel + ' this on ' + published)

            authorName.setAttribute('class', 'p-name webmention-author-name')
            authorName.setAttribute('href', wm.author.url)
            authorName.textContent = wm.author.name

            authorDate.setAttribute('class', 'dt-published webmention-author-date')
            authorDate.setAttribute('datetime', wm.published)

            permalink.setAttribute('class', 'u-url')
            permalink.setAttribute('href', wm.url)
            permalink.textContent = published

            img.setAttribute('src', wm.author.photo)
            img.setAttribute('alt', wm.author.name)

            authorPhoto.appendChild(img)

            figcaption.appendChild(authorName)
            figcaption.appendChild(permalink)

            wmFigure.appendChild(authorPhoto)
            wmFigure.appendChild(figcaption)

            li.appendChild(wmFigure)

            list.appendChild(li)
          })

          webmentionsNode.appendChild(list)

          shadow.appendChild(webmentionsNode)
        }
      })
      .catch(function (error) {
        console.error(error)
      })
  }
}
customElements.define('web-mentions', myWebmentions)
