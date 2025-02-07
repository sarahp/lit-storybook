import { html } from 'lit';
import './LocationMap';
export default {
    title: 'Components/LocationMap',
    component: 'location-map',
    argTypes: {
        apiUrl: { control: 'text' }, // Allow the user to provide an API URL through Storybook controls
    },
};
const Template = (args) => html `
  <location-map .apiUrl=${args.apiUrl}></location-map>
`;
export const Default = Template.bind({});
Default.args = {
    apiUrl: 'https://www.chop.edu/locations/search/api?field_type_location=All&specialty=&latlon%5Bdistance%5D%5Bfrom%5D=80.4672&latlon%5Bvalue%5D=19130',
};
//# sourceMappingURL=sarahs-map.stories.js.map