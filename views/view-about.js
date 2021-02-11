import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

export class ViewAbout extends PageViewElement {

    static get styles() {
        return css`
        :host {
            display: block;
        }
        `;
    }
    
    render() {
        return html`
        <h2> About </h2>
        <p>aca viene todo el about</p>
        <img src="https://picsum.photos/id/1/300/200" alt="imagen">
        `;
    }
}
customElements.define('view-about', ViewAbout);