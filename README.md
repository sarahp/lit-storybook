# LitElement in Storybook Example

WIP: This is currently a work in progress project, built off of Storybook and a Lit Typescript starter project.

This is Sarah's example of using LitElement with Storybook to demonstrate how to set up and create reusable components with dynamic stories and controls.

## Prerequisites

- Node.js installed on your system.
- A project using Lit and TypeScript.
- Storybook installed.

## Step 1: Install Storybook

To add Storybook to your Lit project, use the following command:

```bash
npx sb@latest init --builder storybook-builder-vite
```

This initializes Storybook with Vite as the builder.

## Step 2: Update `package.json` Scripts

Replace your current scripts section in `package.json` with the following to match your setup for LitElement, Storybook, and testing:

### Updated Scripts
```json
"scripts": {
  "build": "tsc",
  "build:watch": "tsc --watch",
  "clean": "rimraf src/**/*.js src/**/*.d.ts src/**/*.map",
  "lint": "npm run lint:lit-analyzer && npm run lint:eslint",
  "lint:eslint": "eslint 'src/**/*.ts' 'stories/**/*.ts'",
  "lint:lit-analyzer": "lit-analyzer",
  "format": "prettier \"**/*.{ts,js,json,md,html}\" --ignore-path ./.eslintignore --write",
  "serve": "wds --watch --root-dir=src",
  "serve:prod": "MODE=prod npm run serve",
  "storybook": "storybook dev -p 6006",
  "build-storybook": "storybook build",
  "test": "npm run test:dev && npm run test:prod",
  "test:dev": "wtr 'test/**/*.test.ts'",
  "test:watch": "wtr --watch 'test/**/*.test.ts'",
  "test:prod": "MODE=prod wtr 'test/**/*.test.ts'"
}
```

These updates simplify the setup by removing Eleventy-related scripts and focusing on Storybook, TypeScript, and testing with Web Test Runner.

## Step 3: Create a LitElement Component

Create a component file `sarahs-accordion.ts`:

```typescript
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sarahs-accordion')
export class SarahsAccordion extends LitElement {
  static styles = css`
    details {
      border: 1px solid #aaa;
      padding: 0.5em;
      border-radius: 4px;
    }

    summary {
      cursor: pointer;
      font-weight: bold;
    }

    summary:hover {
      background-color: #f0f0f0;
    }
  `;

  @property({ type: String }) title: string = 'Accordion Title';

  override render() {
    return html`
      <details>
        <summary>${this.title}</summary>
        <slot></slot>
      </details>
    `;
  }
}
```

## Step 4: Create the Story File

Create a story file `sarahs-accordion.stories.ts`:

```typescript
import { html, TemplateResult } from 'lit';
import { Meta, Story } from '@storybook/web-components';
import './sarahs-accordion';

export default {
  title: 'Components/SarahsAccordion',
  component: 'sarahs-accordion',
  argTypes: {
    title: { control: 'text', description: 'The title displayed in the summary.' },
    content: { control: 'text', description: 'The content inside the accordion.' },
  },
} as Meta;

interface StoryArgs {
  title: string;
  content: string;
}

const Template: Story<StoryArgs> = ({ title, content }): TemplateResult => html`
  <sarahs-accordion title=${title}>
    <p>${content}</p>
  </sarahs-accordion>
`;

export const Default = Template.bind({});
Default.args = {
  title: 'Accordion Title',
  content: 'This is the default content inside the accordion.',
};

export const CustomAccordion = Template.bind({});
CustomAccordion.args = {
  title: 'My Custom Accordion Title',
  content: 'This is custom content inside the accordion.',
};
```

## Step 5: Run Storybook

Start the Storybook server with:

```bash
npm run storybook
```

By default, Storybook will be available at `http://localhost:6006`.

## Step 6: Use Storybook Controls

With the setup complete, you can now interact with your component's `title` and `content` properties using the Storybook controls panel. This allows real-time updates without modifying code.

## Additional Setup and Development Information

This project includes a sample component using LitElement with TypeScript. The template is generated from the `lit-starter-ts` package in [the main Lit repo](https://github.com/lit/lit). Issues and PRs for this template should be filed in that repo.

### About this release

This is a pre-release of Lit 3.0, the next major version of Lit.

Lit 3.0 has very few breaking changes from Lit 2.0:

- Drops support for IE11.
- Published as ES2021.
- Removes a couple of deprecated Lit 1.x APIs.

Lit 3.0 should require no changes to upgrade from Lit 2.0 for the vast majority of users. Once the full release is published, most apps and libraries will be able to extend their npm version ranges to include both 2.x and 3.x, like `"^2.7.0 || ^3.0.0"`.

Lit 2.x and 3.0 are *interoperable*: templates, base classes, directives, decorators, etc., from one version of Lit will work with those from another.

Please file any issues you find on our [issue tracker](https://github.com/lit/lit/issues).

### Setup

Install dependencies:

```bash
npm i
```

### Build

To build the JavaScript version of your component:

```bash
npm run build
```

To watch files and rebuild when modified:

```bash
npm run build:watch
```

### Testing

This sample uses [@web/test-runner](https://www.npmjs.com/package/@web/test-runner) for testing.

Tests can be run with the `test` script:

```bash
npm test
```

For local testing during development, use:

```bash
npm test:watch
```

### Editing

If you use VS Code, install the [lit-plugin extension](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin) for features like syntax highlighting, type-checking, and code completion.

### Linting and Formatting

Lint the project with:

```bash
npm run lint
```

For formatting, use [Prettier](https://prettier.io/). It is pre-configured according to Lit's style.

For more information on bundling and publishing, see [Publishing best practices](https://lit.dev/docs/tools/publishing/) on the Lit site.

## Conclusion

This guide demonstrates how to integrate LitElement with Storybook to create interactive and reusable stories. You can extend this approach by adding more components, styles, and stories to document your project fully.
