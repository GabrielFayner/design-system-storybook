import '../src/global.css'
import { Preview } from '@storybook/react';

export const preview: Preview  = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
export const tags = ['autodocs'];
