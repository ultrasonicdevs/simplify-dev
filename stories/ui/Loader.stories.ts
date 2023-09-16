import { Meta, StoryObj } from '@storybook/react';
import Loader from 'ui/Loader/Loader';

export type LoaderStory = StoryObj<typeof Loader>;

const meta: Meta<typeof Loader> = {
  component: Loader,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Loader component'
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg']
    }
  }
};

export default meta;

export const LoaderExample: LoaderStory = {
  args: {
    size: 'lg'
  }
};
