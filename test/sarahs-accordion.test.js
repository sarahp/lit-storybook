import { assert, fixture } from '@open-wc/testing';
import { html } from 'lit/static-html.js';
import SarahsAccordion from '../stories/sarahs-accordion';
suite('sarahs-accordion', () => {
    test('is defined', () => {
        const el = document.createElement('sarahs-accordion');
        assert.instanceOf(el, SarahsAccordion);
    });
    test('renders with default title', async () => {
        const el = await fixture(html `<sarahs-accordion></sarahs-accordion>`);
        assert.shadowDom.equal(el, `
      <details>
        <summary>Accordion Title</summary>
        <slot></slot>
      </details>
      `);
    });
    test('renders with a custom title', async () => {
        const el = await fixture(html `<sarahs-accordion title="Custom Title"></sarahs-accordion>`);
        assert.shadowDom.equal(el, `
      <details>
        <summary>Custom Title</summary>
        <slot></slot>
      </details>
      `);
    });
    test('displays slot content', async () => {
        const el = await fixture(html `
      <sarahs-accordion>
        <p>Accordion content</p>
      </sarahs-accordion>
    `);
        const slotContent = el.shadowRoot.querySelector('slot').assignedNodes();
        assert.equal(slotContent[0].textContent, 'Accordion content');
    });
    test('toggles open and closed state', async () => {
        const el = await fixture(html `<sarahs-accordion></sarahs-accordion>`);
        const details = el.shadowRoot.querySelector('details');
        const summary = el.shadowRoot.querySelector('summary');
        assert.isFalse(details.open, 'Details should be closed initially');
        summary.click();
        await el.updateComplete;
        assert.isTrue(details.open, 'Details should be open after clicking');
        summary.click();
        await el.updateComplete;
        assert.isFalse(details.open, 'Details should be closed after clicking again');
    });
});
//# sourceMappingURL=sarahs-accordion.test.js.map