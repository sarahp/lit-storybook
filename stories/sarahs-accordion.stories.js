import { html } from 'lit';
import './sarahs-accordion';
export default {
    title: 'Sarah\'s Components/Accordion',
    component: 'sarahs-accordion',
    argTypes: {
        title: { control: 'text', description: 'The title displayed in the summary of the accordion.' },
        content: { control: 'text', description: 'The content inside the accordion.' },
    },
};
const Template = ({ title, content }) => html `
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
//# sourceMappingURL=sarahs-accordion.stories.js.map