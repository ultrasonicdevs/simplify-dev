import { Preview } from '@storybook/react';
import './tw.css';
import { CodeBlock } from './ui/CodeBlock';

const preview: Preview = {
  parameters: {
    docs: {
      components: {
        code: CodeBlock
      }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },

  tags: ['autodocs']
};

export default preview;
