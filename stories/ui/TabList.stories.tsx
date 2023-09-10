import TabContent from '../../src/ui/Tabs/Content';
import { Meta, StoryObj } from '@storybook/react';
import Button from '../../src/ui/Button/Button';
import TabList from '../../src/ui/Tabs/TabList';

const meta: Meta<typeof TabList> = {
  component: TabList,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Component parsing array of props to JSX as render element'
  }
};

export default meta;

export const Example: StoryObj<typeof TabList> = {
  render: () => (
    <>
      <TabList
        defaultIndex='tab-1'
        selectedVariant={'primary'}
        aria-label='qwe'
        className='bg-blue-100 flex gap-[10px]'
        padding='md'
        rounded='md'>
        <Button id='tab-1' variant='reject'>
          12345
        </Button>
        <Button id='tab-2' variant='primary'>
          qwert
        </Button>
        <Button id='tab-3' variant='tertiary'>
          asdfg
        </Button>
        <Button id='tab-4' variant='secondary'>
          asdfg
        </Button>
      </TabList>
      <TabContent tab='tab-1'>12345</TabContent>
      <TabContent tab='tab-2'>qwert</TabContent>
      <TabContent tab='tab-3'>asdfg</TabContent>
      <TabContent tab='tab-4'>zxcvb</TabContent>
    </>
  )
};
