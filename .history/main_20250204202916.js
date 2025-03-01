/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
      name: '@storybook/web-components-vite',
      options: {}
  },
  docs: {
      autodocs: true
  }
  };
  
  export default config;
  