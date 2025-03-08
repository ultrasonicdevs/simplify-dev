import { Meta, StoryObj } from '@storybook/react';

import { Button } from '..';
import { TabContent } from './Content';
import { TabListProvider } from './Provider';
import { TabList } from './TabList';

const meta: Meta<typeof TabList> = {
  component: TabList,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle:
      'Component parsing array of props to JSX as render element',
  },
};

export default meta;

export const Example: StoryObj<typeof TabList> = {
  render: () => (
    <>
      <TabListProvider defaultSelectedId="tab-2">
        <TabList
          selectedVariant="secondary"
          className="bg-blue-100 flex gap-3 p-3 rounded-xl">
          <Button id="tab-1" variant="reject">
            12345
          </Button>
          <Button id="tab-2" variant="primary">
            qwert
          </Button>
          <Button id="tab-3" variant="tertiary">
            asdfg
          </Button>
          <Button id="tab-4" variant="secondary">
            asdfg
          </Button>
        </TabList>
        <TabContent tab="tab-1">12345</TabContent>
        <TabContent tab="tab-2">qwert</TabContent>
        <TabContent tab="tab-3">asdfg</TabContent>
        <TabContent tab="tab-4">zxcvb</TabContent>
      </TabListProvider>
    </>
  ),
};
