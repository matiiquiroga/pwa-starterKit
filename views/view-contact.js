import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

export class ViewContact extends PageViewElement {

    static get styles() {
        return css`
         :host {
            display: block;
         }
        `;
    }
   
    

    render() {
        return html`
            <div >
             <h2>Contact </h2>
              
            </div>
        `;
    }
}
customElements.define('view-contact', ViewContact);