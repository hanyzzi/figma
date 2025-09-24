import type { Meta, StoryObj } from '@storybook/react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'disabled';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ variant = 'primary', size = 'medium', children, ...props }: ButtonProps) => {
  const baseClasses = 'rounded-md font-inter transition-all duration-200 cursor-pointer';
  
  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-brand-primary-dark shadow-sm',
    secondary: 'bg-button-secondary-bg text-button-secondary-text hover:bg-button-secondary-hover',
    disabled: 'bg-button-disabled-bg text-button-disabled-text cursor-not-allowed',
  };
  
  const sizes = {
    small: 'px-sm py-xs text-button-small',
    medium: 'px-lg py-md text-button-medium',
    large: 'px-xl py-lg text-button-large',
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
      disabled={variant === 'disabled'}
      {...props}
    >
      {children}
    </button>
  );
};

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: '디자인 토큰을 활용한 재사용 가능한 버튼 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'disabled'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex space-x-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="disabled">Disabled</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};