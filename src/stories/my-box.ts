import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-box')
export class MyBox extends LitElement {
static override styles = css`
    :host {
      display: block;
      border: 1px solid #ccc;
      padding: 16px;
      border-radius: 8px;
      background-color: #f9f9f9;
    }
  `;

  @property({ type: String }) content = 'Default content';

override render() {
    return html`<div>${this.content}</div>`;
  }
}
