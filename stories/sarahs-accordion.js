var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let SarahsAccordion = class SarahsAccordion extends LitElement {
    constructor() {
        super(...arguments);
        // Define a reactive property with a default value
        this.title = 'Accordion Title';
    }
    render() {
        return html `
      <div>
        <h2>Accordion</h2>
        <details>
          <summary>${this.title}</summary>
          <slot></slot>
        </details>
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], SarahsAccordion.prototype, "title", void 0);
SarahsAccordion = __decorate([
    customElement('sarahs-accordion')
], SarahsAccordion);
export { SarahsAccordion };
//# sourceMappingURL=sarahs-accordion.js.map