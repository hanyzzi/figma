import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Design System/Spacing',
  parameters: {
    docs: {
      description: {
        component: '디자인 시스템의 스페이싱 토큰들입니다.',
      },
    },
  },
};

export default meta;

const SpacingScale = () => {
  const spacing = [
    { name: 'XS', class: 'w-xs h-xs', value: '4px' },
    { name: 'SM', class: 'w-sm h-sm', value: '8px' },
    { name: 'MD', class: 'w-md h-md', value: '16px' },
    { name: 'LG', class: 'w-lg h-lg', value: '24px' },
    { name: 'XL', class: 'w-xl h-xl', value: '32px' },
    { name: '2XL', class: 'w-2xl h-2xl', value: '48px' },
    { name: '3XL', class: 'w-3xl h-3xl', value: '64px' },
  ];

  return (
    <div className="space-y-4">
      {spacing.map((space) => (
        <div key={space.name} className="flex items-center space-x-4">
          <div className={`bg-brand-primary ${space.class}`} />
          <div>
            <span className="font-medium">{space.name}</span>
            <span className="text-gray-500 ml-2">({space.value})</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export const AllSpacing: StoryObj = {
  render: () => <SpacingScale />,
};