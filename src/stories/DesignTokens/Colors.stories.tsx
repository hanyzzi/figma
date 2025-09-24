import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Design System/Colors',
  parameters: {
    docs: {
      description: {
        component: '디자인 시스템에서 사용하는 모든 색상 토큰들입니다.',
      },
    },
  },
};

export default meta;

const ColorPalette = () => {
  const colors = [
    { name: 'Brand Primary', value: 'var(--color-brand-primary)', class: 'bg-brand-primary' },
    { name: 'Brand Secondary', value: 'var(--color-brand-secondary)', class: 'bg-brand-secondary' },
    { name: 'Brand Tertiary', value: 'var(--color-brand-tertiary)', class: 'bg-brand-tertiary' },
    { name: 'Text Primary', value: 'var(--color-text-primary)', class: 'bg-text-primary' },
    { name: 'Text Secondary', value: 'var(--color-text-secondary)', class: 'bg-text-secondary' },
    { name: 'Gray 50', value: 'var(--color-grayscale-50)', class: 'bg-gray-50' },
    { name: 'Gray 100', value: 'var(--color-grayscale-100)', class: 'bg-gray-100' },
    { name: 'Gray 200', value: 'var(--color-grayscale-200)', class: 'bg-gray-200' },
    { name: 'Gray 700', value: 'var(--color-grayscale-700)', class: 'bg-gray-700' },
    { name: 'Gray 900', value: 'var(--color-grayscale-900)', class: 'bg-gray-900' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {colors.map((color) => (
        <div key={color.name} className="text-center">
          <div 
            className={`w-24 h-24 rounded-lg mx-auto mb-2 border border-gray-200 ${color.class}`}
          />
          <div className="text-sm font-medium text-gray-900">{color.name}</div>
          <div className="text-xs text-gray-500 font-mono">{color.value}</div>
        </div>
      ))}
    </div>
  );
};

export const AllColors: StoryObj = {
  render: () => <ColorPalette />,
};