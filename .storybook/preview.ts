import { Preview } from '@storybook/react';
import { initialize, mswDecorator, mswLoader } from 'msw-storybook-addon'
import '../src/global.css'

initialize({
  onUnhandledRequest: 'bypass'
})

export const tags = ['autodocs'];

export const preview: Preview  = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
};
