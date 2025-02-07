/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { MyBox } from '../stories/my-box.js';
import { assert, fixture } from '@open-wc/testing';
import { html } from 'lit/static-html.js';
suite('my-box', () => {
    test('is defined', () => {
        const el = document.createElement('my-box');
        assert.instanceOf(el, MyBox);
    });
    test('renders with default values', async () => {
        const el = await fixture(html `<my-box></my-box>`);
        assert.shadowDom.equal(el, `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `);
    });
    test('renders with a set name', async () => {
        const el = await fixture(html `<my-box content="Test"></my-box>`);
        assert.shadowDom.equal(el, `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `);
    });
    test('handles a click', async () => {
        const el = (await fixture(html `<my-box></my-box>`));
        const button = el.shadowRoot.querySelector('button');
        button.click();
        await el.updateComplete;
        assert.shadowDom.equal(el, `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `);
    });
    test('styling applied', async () => {
        const el = (await fixture(html `<my-box></my-box>`));
        await el.updateComplete;
        assert.equal(getComputedStyle(el).paddingTop, '16px');
    });
});
//# sourceMappingURL=my-box.test.js.map