import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Design System/Typography',
  parameters: {
    docs: {
      description: {
        component: '디자인 시스템의 타이포그래피 토큰들입니다.',
      },
    },
  },
};

export default meta;

const TypographyScale = () => {
  const typography = [
    { name: 'Heading 1', class: 'text-h1', size: '48px', weight: '700' },
    { name: 'Heading 2', class: 'text-h2', size: '36px', weight: '600' },
    { name: 'Heading 3', class: 'text-h3', size: '28px', weight: '600' },
    { name: 'Heading 4', class: 'text-h4', size: '24px', weight: '600' },
    { name: 'Body XL', class: 'text-body-xl', size: '20px', weight: '400' },
    { name: 'Body Large', class: 'text-body-large', size: '18px', weight: '400' },
    { name: 'Body Medium', class: 'text-body-medium', size: '16px', weight: '400' },
    { name: 'Body Small', class: 'text-body-small', size: '14px', weight: '400' },
    { name: 'Caption Large', class: 'text-caption-large', size: '14px', weight: '500' },
    { name: 'Button Medium', class: 'text-button-medium', size: '14px', weight: '600' },
  ];

  return (
    <div className="space-y-6">
      {typography.map((type) => (
        <div key={type.name} className="border-b pb-4 last:border-b-0">
          <div className={`${type.class} text-text-primary mb-2`}>
            The quick brown fox jumps over the lazy dog
          </div>
          <div className="text-sm text-gray-500">
            <span className="font-medium">{type.name}</span> - {type.size}, Weight: {type.weight}
          </div>
        </div>
      ))}
    </div>
  );
};

export const AllTypography: StoryObj = {
  render: () => <TypographyScale />,
};