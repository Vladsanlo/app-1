import { LitElement, css, html } from 'lit'
import './marvel-element.js'
import './antiheroe-element.js'
import './anime-element.js'
import './pequenya-guia-starwars.js'
import './hotline-miami.js'
import './tarantino-movies.js'

export class MyElement extends LitElement {
  static get properties() {
    return {

      /**
       * The number of page currenty
       */
      position: { type: Number },
    }
  }

  constructor() {
    super()

    this.position = 0
  }

  setPrevious(e) {
    if (this.position === 0) {
      this.position = 5
    }
    else {
      this.position--
    }
  }

  setNext(e) {
    if (this.position == 5) {
      this.position = 0
    }
    else {
      this.position++
    }
  }


  render() {
    return html`
    <div>
      <button @click="${this.setPrevious}">Anterior</button>
      <button @click="${this.setNext}">Siguiente</button>
      <h1>${this.position}</h1>
      ${this.position===0 ? html `<marvel-element></marvel-element>` : ''}
      ${this.position===1 ? html `<antiheroe-element></antiheroe-element>` : ''}
      ${this.position===2 ? html `<anime-element></anime-element>`:''}
      ${this.position===3 ? html `<pequenya-guia-starwars></pequenya-guia-starwars>`:''}
      ${this.position===4 ? html `<hotline-miami></hotline-miami>`:''}
      ${this.position===5 ? html `<tarantino-movies></tarantino-movies>`:''}
      
    </div>
     `
  }

  _onClick() {
    this.count++
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      
      .card {
        padding: 2em;
      }

      .read-the-docs {
        color: #888;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

      ::slotted(h1) {
        font-size: 3.2em;
        line-height: 1.1;
      }

      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #5a91d8;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
    `
  }
}

window.customElements.define('my-element', MyElement)
