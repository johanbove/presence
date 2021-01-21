/* global HTMLElement, customElements, requestAnimationFrame */
/**
 * Adding time context to your personal sites
 *
 * @author [Johan Bové](https://johanbove.info/me)
 * @version 1.1.0
 */
const timedBackgrounds = class extends HTMLElement {
  constructor () {
    super()

    const OFFSET = 0 // Allows for tweaking the backgrounds
    const NR = 24
    const INTERVAL = 1000 * 60 * 5 // 1 minute

    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' })

    let lastHour

    const container = document.createElement('div')
    container.className = 'timedBackgrounds'
    container.setAttribute('aria-hidden', true)

    for (let i = 0; i < NR; i += 1) {
      let background = document.createElement('div')
      background.classList.add('timed-background', `timed-background-${i}`)
      container.appendChild(background)
    }

    /**
     * @param {Array} backgrounds
     * @param {number} theHour
     */
    const setBackgrounds = (backgrounds, theHour) => {
      for (let i = 0; i <= backgrounds.length; i += 1) {
        if (backgrounds[i]) {
          backgrounds[i].classList.remove('background-now')
        }
        if (i === theHour) {
          backgrounds[i].classList.add('background-now')
        }
      }
    }

    /**
     * @param theHour number
     */
    const setNightTimeDayTime = (theHour) => {
      document.body.classList.toggle('backgrounds-daytime', theHour >= 7 && theHour < 10)
      document.body.classList.toggle('backgrounds-nighttime', theHour < 7 || theHour > 17)
    }

    /**
     * @param {Array} backgrounds
     * @param {number} theHour
     */
    const setIt = (backgrounds, theHour) => {
      setBackgrounds(backgrounds, theHour)
      setNightTimeDayTime(theHour)
    }

    /**
     * @param {Array} backgrounds
     * @param {Number} theHour
     */
    const render = (backgrounds, theHour = 0) => {
      if (lastHour === theHour) {
        return
      } else {
        lastHour = theHour
      }

      if (theHour >= 24) {
        theHour = Math.abs(theHour - 24)
      }

      setIt(backgrounds, theHour)
    }

    window.debugBackgrounds = render

    const bodyStyle = document.createElement('style')
    bodyStyle.textContent = `body.no-js .timedBackgrounds {
  display: none;
}
`

    document.head.appendChild(bodyStyle)

    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style')
    style.textContent = `.timedBackgrounds {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.timed-background {
  width: 100vw;
  height: 100vh;
  opacity: 0;
  transition: opacity linear 10s;
  position: absolute;
  top: 0;
  left: 0;
}

/* Gradients by http://codepen.io/zessx/pen/rDEAl/ */

.timed-background-0,
.timed-background-24 {
  background: #00000c;
}

.timed-background-1 {
  background: linear-gradient(to bottom, #020111 85%, #191621 100%);
}

.timed-background-2 {
  background: linear-gradient(to bottom, #020111 60%, #20202c 100%);
}

.timed-background-3 {
  background: linear-gradient(to bottom, #020111 10%, #3a3a52 100%);
}

.timed-background-4 {
  background: linear-gradient(to bottom, #20202c 0%, #515175 100%);
}

.timed-background-5 {
  background: linear-gradient(to bottom, #40405c 0%, #6f71aa 80%, #8a76ab 100%);
}

.timed-background-6 {
  background: linear-gradient(to bottom, #4a4969 0%, #7072ab 50%, #cd82a0 100%);
}

.timed-background-7 {
  background: linear-gradient(to bottom, #757abf 0%, #8583be 60%, #eab0d1 100%);
}

.timed-background-8 {
  background: linear-gradient(to bottom, #82addb 0%, #ebb2b1 100%);
}

.timed-background-9 {
  background: linear-gradient(to bottom, #94c5f8 1%, #a6e6ff 70%, #b1b5ea 100%);
}

.timed-background-10 {
  background: linear-gradient(to bottom, #b7eaff 0%, #94dfff 100%);
}

.timed-background-11 {
  background: linear-gradient(to bottom, #9be2fe 0%, #67d1fb 100%);
}

.timed-background-12 {
  background: linear-gradient(to bottom, #90dffe 0%, #38a3d1 100%);
}

.timed-background-13 {
  background: linear-gradient(to bottom, #57c1eb 0%, #246fa8 100%);
}

.timed-background-14 {
  background: linear-gradient(to bottom, #2d91c2 0%, #1e528e 100%);
}

.timed-background-15 {
  background: linear-gradient(to bottom, #2473ab 0%, #1e528e 70%, #5b7983 100%);
}

.timed-background-16 {
  background: linear-gradient(to bottom, #1e528e 0%, #265889 50%, #9da671 100%);
}

.timed-background-17 {
  background: linear-gradient(to bottom, #1e528e 0%, #728a7c 50%, #e9ce5d 100%);
}

.timed-background-18 {
  background: linear-gradient(to bottom, #154277 0%, #576e71 30%, #e1c45e 70%, #b26339 100%);
}

.timed-background-19 {
  background: linear-gradient(to bottom, #163C52 0%, #4F4F47 30%, #C5752D 60%, #B7490F 80%, #2F1107 100%);
}

.timed-background-20 {
  background: linear-gradient(to bottom, #071B26 0%, #071B26 30%, #8A3B12 80%, #240E03 100%);
}

.timed-background-21 {
  background: linear-gradient(to bottom, #010A10 30%, #59230B 80%, #2F1107 100%);
}

.timed-background-22 {
  background: linear-gradient(to bottom, #090401 50%, #4B1D06 100%);
}

.timed-background-23 {
  background: linear-gradient(to bottom, #00000c 80%, #150800 100%);
}

.background-now {
  width: 100%;
  opacity: 0.75;
}`
    shadow.appendChild(container)
    shadow.appendChild(style)

    /**
     * Checks for the current time every 10 seconds
     * Uses a throttled animation draw
     */
    const draw = () => {
      render(container.childNodes, new Date().getHours() + OFFSET)
      setTimeout(() => {
        requestAnimationFrame(draw)
      }, INTERVAL)
    }

    draw()
  }
}
customElements.define('timed-backgrounds', timedBackgrounds)
