import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './sarahs-accordion.css';

@customElement('sarahs-accordion')
class SarahsAccordion extends LitElement {
  // Define a reactive property with a default value
  @property({ type: String }) override title: string = 'Accordion Title';

  override render() {
    return html`
      <div>
        <h2>Accordion</h2>
        <details>
          <summary>${this.title}</summary>
          <slot></slot>
        </details>
      </div>
    `;
  }
}

export default SarahsAccordion;
