import { html } from 'lit';
import './my-box';
export default {
    title: 'Sarah\'s Components/Box',
    component: 'my-box',
};
export const Default = () => html `<my-box></my-box>`;
export const WithCustomContent = () => html `
  <my-box content="This is custom content"></my-box>
`;
//# sourceMappingURL=my-box.stories.js.map