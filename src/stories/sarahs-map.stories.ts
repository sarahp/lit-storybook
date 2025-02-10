import { StoryFn } from '@storybook/web-components'; // Import the Story type
import { html } from 'lit';
import './sarahs-map';

// Define the default export for Storybook
export default {
  title: 'Sarah\'s Components/LocationMap WIP',
  component: 'location-map',
  argTypes: {
    apiUrl: { control: 'text' },  // Allow the user to provide an API URL through Storybook controls
  },
};

// Define the template with the correct type
const Template: StoryFn<{ apiUrl: string }> = (args) => html`
  <location-map .apiUrl=${args.apiUrl}></location-map>
`;

// Define the default story
export const Default = Template.bind({});
Default.args = {
  apiUrl: 'https://www.chop.edu/locations/search/api?field_type_location=All&specialty=&latlon%5Bdistance%5D%5Bfrom%5D=80.4672&latlon%5Bvalue%5D=19130',
};
