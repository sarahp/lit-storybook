var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let MyBox = class MyBox extends LitElement {
    constructor() {
        super(...arguments);
        this.content = 'Default content';
    }
    render() {
        return html `<div>${this.content}</div>`;
    }
};
MyBox.styles = css `
    :host {
      display: block;
      border: 1px solid #ccc;
      padding: 16px;
      border-radius: 8px;
      background-color: #f9f9f9;
    }
  `;
__decorate([
    property({ type: String })
], MyBox.prototype, "content", void 0);
MyBox = __decorate([
    customElement('my-box')
], MyBox);
export { MyBox };
//# sourceMappingURL=my-box.js.map