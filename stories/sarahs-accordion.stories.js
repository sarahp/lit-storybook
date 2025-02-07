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
export const Basic = Template.bind({});
Basic.args = {
    title: 'Customize this Accordion Title',
    content: 'Use the controls to change this accordion summary.',
};
//# sourceMappingURL=sarahs-accordion.stories.js.map