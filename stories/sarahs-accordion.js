var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import "@aurodesignsystem/auro-icon";
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
let SarahsAccordion = class SarahsAccordion extends LitElement {
    constructor() {
        super(...arguments);
        // Reactive properties
        this.title = 'Accordion Title';
        this.expanded = false; // Tracks expanded state
    }
    // Toggle expanded state when the details element is clicked
    _toggleExpanded() {
        this.expanded = !this.expanded;
    }
    render() {
        const contentId = 'accordion-content';
        const summaryId = 'accordion-summary';
        return html `
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
};
SarahsAccordion.styles = css `
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
__decorate([
    property({ type: String })
], SarahsAccordion.prototype, "title", void 0);
__decorate([
    state()
], SarahsAccordion.prototype, "expanded", void 0);
SarahsAccordion = __decorate([
    customElement('sarahs-accordion')
], SarahsAccordion);
export default SarahsAccordion;
//# sourceMappingURL=sarahs-accordion.js.map