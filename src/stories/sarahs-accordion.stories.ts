import { Meta, StoryFn } from '@storybook/web-components';
import { html, TemplateResult } from 'lit';
import './sarahs-accordion';

export default {
  title: 'Sarah\'s Components/Accordion',
  component: 'sarahs-accordion',
  argTypes: {
    title: { control: 'text', description: 'The title displayed in the summary of the accordion.' },
    content: { control: 'text', description: 'The content inside the accordion.' },
  },
} as Meta;

interface StoryArgs {
  title: string;
  content: string;
}

const Template: StoryFn<StoryArgs> = ({ title, content }): TemplateResult => html`
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
