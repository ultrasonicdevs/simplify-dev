import { InputTypeVariants } from '../../src/ui/Input/Input.types';
import { Meta, StoryObj } from '@storybook/react';
import { useRef, FC, useCallback } from 'react';
import Input from 'ui/Input/Input';

type InputStory = StoryObj<typeof Input>;

type TestInputRefProps = { type?: keyof typeof InputTypeVariants; placeholder?: string };

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle:
      'Simple input field without styles and functional abilities (has ref property)'
  },
  argTypes: {
    type: {
      description: '**Input HTML type prop**',
      defaultValue: { summary: 'text' },
      control: { type: 'select' },
      options: [
        'datetime-local',
        'password',
        'number',
        'email',
        'month',
        'week',
        'date',
        'text',
        'time',
        'tel'
      ],
      type: 'string'
    },
    placeholder: {
      description: '**default html placeholder prop**',
      defaultValue: { summary: '' },
      control: { type: 'text' },
      type: 'string'
    }
  }
};

export default meta;

export const InputWithOutRef: InputStory = {
  args: {
    type: 'text',
    placeholder: 'write something . . .'
  }
};

export const InputWithRef: InputStory = {
  args: {
    type: 'password',
    placeholder: 'write something . . .'
  },
  render: (args) => <TestInputRef type={args.type} placeholder={args.placeholder} />
};

const TestInputRef: FC<TestInputRefProps> = ({ type = 'text', placeholder }) => {
  const testRef = useRef<HTMLInputElement>(null);

  const focus = useCallback(() => testRef.current?.focus(), []);
  const showRefValue = useCallback(() => alert(testRef.current?.value), []);

  return (
    <>
      <Input ref={testRef} type={type} placeholder={placeholder} />
      <br />
      <button onClick={focus}>focus</button>
      <br />
      <button onClick={showRefValue}>show ref value</button>
    </>
  );
};
