import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';
import '../views/view-about';
import '../views/view-home';
import '../views/view-contact';
import 'dile-tabs/dile-tabs';
import 'dile-pages/dile-pages'

export class PwaLive extends LitElement {

  static get properties() {
    return {
      selected: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--pwa-live-background-color);
      }
       
      main {
        flex-grow: 1;
      }

      .logo > svg {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }

    `;
  }

  constructor() {
    super();
    this.selected = ' ';
  }

  render() {
    return html`
      <main>
        <div class="logo">${openWcLogo}</div>

        <!-- <nav>
          <a href="#" @click="${this.go}" name="Home">Home</a>
          <a href="#" @click="${this.go}" name="About">About</a>
          <a href="#" @click="${this.go}" name="Contact">Contact</a>
        </nav> -->

        <dile-tabs selected="${this.selected}" attrForSelected="name" @dile-tabs-selected-changed="${this.selectedChanged}">

            <dile-tab name="Home">Home</dile-tab>
            <dile-tab name="About">About</dile-tab>
            <dile-tab name="Contact">Contact</dile-tab>

        </dile-tabs>

        <dile-pages selected="${this.selected}" attrForSelected="name" >

          <view-home name="Home"  ?active=${this.selected == 'Home'}></view-home>
          <view-about name="About" ?active=${this.selected == 'About'}></view-about>
          <view-contact name="Contact" ?active=${this.selected == 'Contact'}></view-contact>

        </dile-pages>

          
         
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
  

  selectedChanged(e) {
    this.selected= e.detail;
  }


  // go(e){
  //   e.preventDefault();
  //   //porque no hay manejador de eventos de parte de lit element
  //   //nos apoyamos en el javascript para parametrizar
  //   let page = e.target.getAttribute('name');

  //   this.selected = page;
  // }
 

}
