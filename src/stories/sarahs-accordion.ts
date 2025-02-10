import "@aurodesignsystem/auro-icon";
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('sarahs-accordion')
class SarahsAccordion extends LitElement {
  // Reactive properties
  @property({ type: String }) override title: string = 'Accordion Title';
  @state() private expanded: boolean = false;  // Tracks expanded state
  
  static override styles = css`
    :host {
      display: block;
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 0.5rem;
      margin: 1rem 0;
      font-family: Arial, sans-serif;
    }

    summary {
      font-weight: bold;
      cursor: pointer;
      outline: none;
    }

    details {
      padding: 0.5rem;
    }

    details[open] summary {
      color: var(--active-color, blue);
    }

    .content {
      padding: 0.5rem;
      border-top: 1px solid #ccc;
    }

    /* Scoped styles for the summary marker */
    summary::marker {
      content: "U+2038";
    }
  `;

  // Toggle expanded state when the details element is clicked
  private _toggleExpanded() {
    this.expanded = !this.expanded;
  }

  override render() {
    const contentId = 'accordion-content';
    const summaryId = 'accordion-summary';

    return html`
      <details @toggle=${this._toggleExpanded} ?open=${this.expanded}>
        <summary
          id=${summaryId}
          aria-expanded=${this.expanded}
          aria-controls=${contentId}
        >
          <auro-icon name="interface" category="chevron-down"></auro-icon>${this.title}
        </summary>
        <div id=${contentId} class="content" aria-labelledby=${summaryId}>
          <slot></slot>
        </div>
      </details>
    `;
  }
}

export default SarahsAccordion;
