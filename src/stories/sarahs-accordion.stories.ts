import { Meta, StoryFn } from '@storybook/web-components';
import { html, TemplateResult } from 'lit';
import './sarahs-accordion';

export default {
  title: 'Sarah\'s Components/Accordion WIP',
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

export const Basic = Template.bind({});
Basic.args = {
  title: 'Customize this Accordion Title',
  content: 'Use the controls to change this accordion summary.',
};
