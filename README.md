# LitElement in Storybook Example

WIP: Work in Progress. This is Sarah's example of using LitElement with Storybook to demonstrate how to set up and create reusable components with dynamic stories and controls.

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

## Step 2: Create a LitElement Component

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

## Step 3: Create the Story File

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

## Step 4: Run Storybook

Start the Storybook server with:

```bash
npm run storybook
```

By default, Storybook will be available at `http://localhost:6006`.

## Step 5: Use Storybook Controls

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

Lit 2.x and 3.0 are _interoperable_: templates, base classes, directives, decorators, etc., from one version of Lit will work with those from another.

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

### Dev Server

To preview the project without additional build steps, use the dev server:

```bash
npm run serve
```

View the project at `http://localhost:8000/dev/index.html`.

To serve against Lit's production mode:

```bash
npm run serve:prod
```

### Editing

If you use VS Code, install the [lit-plugin extension](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin) for features like syntax highlighting, type-checking, and code completion.

### Linting and Formatting

Lint the project with:

```bash
npm run lint
```

For formatting, use [Prettier](https://prettier.io/). It is pre-configured according to Lit's style.

### Static Site Generation

This project includes a static site generated with [eleventy](https://11ty.dev). The site is generated to `/docs` and can be served locally:

```bash
npm run docs:serve
```

For more information on bundling and publishing, see [Publishing best practices](https://lit.dev/docs/tools/publishing/) on the Lit site.

## Conclusion

This guide demonstrates how to integrate LitElement with Storybook to create interactive and reusable stories. You can extend this approach by adding more components, styles, and stories to document your project fully.

