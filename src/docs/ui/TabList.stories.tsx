import { Meta, StoryObj } from '@storybook/react';
import { Button, TabList } from '@ui';

const meta: Meta<typeof TabList> = {
  title: 'ui/TabList',
  component: TabList.Provider,
  subcomponents: {
    'TabList.Container': TabList.Container,
    'TabList.Content': TabList.Content,
  },
  tags: ['autodocs'],
  argTypes: {
    defaultSelectedId: {
      control: 'text',
      description: 'ID of the default selected tab',
    },
    selectedVariant: {
      control: 'text',
      description: 'Variant for the selected tab',
    },
    selectedClassName: {
      control: 'text',
      description: 'Additional class name for the selected tab',
    },
  },
};
export default meta;

export const Example: StoryObj<typeof TabList> = {
  render: () => (
    <>
      <TabList.Provider defaultSelectedId="tab-2">
        <TabList.Container
          selectedVariant="secondary"
          className="bg-blue-100 flex gap-3 p-3 rounded-xl *:w-full">
          <Button id="tab-1" variant="reject">
            12345
          </Button>
          <Button id="tab-2" variant="primary">
            qwert
          </Button>
          <Button id="tab-3" variant="null">
            asdfg
          </Button>
          <Button id="tab-4" variant="secondary" disabled>
            asdfg
          </Button>
        </TabList.Container>
        <TabList.Content tab="tab-1">12345</TabList.Content>
        <TabList.Content tab="tab-2">qwert</TabList.Content>
        <TabList.Content tab="tab-3">asdfg</TabList.Content>
        <TabList.Content tab="tab-4">zxcvb</TabList.Content>
      </TabList.Provider>
    </>
  ),
};
