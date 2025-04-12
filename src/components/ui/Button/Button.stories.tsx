import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta = {
  title: 'Components/Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'otulined', 'secondary'],
      description: 'The variant of the button',
      table: {
        type: {
          summary: 'default, outlined, secondary',
        },
      },
      defaultValue: 'default',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
      defaultValue: 'default',
    },
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: args => (
    <div className="flex gap-2">
      <Button {...args}>Default</Button>
      <Button variant="outline" {...args}>
        Outline
      </Button>
      <Button variant="secondary" {...args}>
        Secondary
      </Button>
      <Button variant="destructive" {...args}>
        Destructive
      </Button>
    </div>
  ),
};
