import type { Meta, StoryObj } from '@storybook/nextjs';
import { Button } from './index';

// 아이콘 예시 컴포넌트
const ChevronLeftIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 18L9 12L15 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 18L15 12L9 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '다양한 variant, size, theme를 지원하는 Button 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: '버튼의 스타일 variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '버튼의 크기',
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: '버튼의 테마',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '버튼 비활성화 여부',
    },
    loading: {
      control: { type: 'boolean' },
      description: '로딩 상태 여부',
    },
    children: {
      control: { type: 'text' },
      description: '버튼 텍스트',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    disabled: false,
    loading: false,
  },
};

// Variant 스토리들
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Tertiary Button',
    variant: 'tertiary',
    size: 'medium',
  },
};

// Size 스토리들
export const Small: Story = {
  args: {
    children: 'Small',
    variant: 'primary',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium',
    variant: 'primary',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    variant: 'primary',
    size: 'large',
  },
};

// Theme 스토리들
export const LightTheme: Story = {
  args: {
    children: 'Light Theme',
    variant: 'primary',
    theme: 'light',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkTheme: Story = {
  args: {
    children: 'Dark Theme',
    variant: 'primary',
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// 상태 스토리들
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    variant: 'primary',
    loading: true,
  },
};

// 아이콘이 있는 버튼들
export const WithLeftIcon: Story = {
  args: {
    children: 'With Left Icon',
    variant: 'primary',
    leftIcon: <ChevronLeftIcon />,
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'With Right Icon',
    variant: 'primary',
    rightIcon: <ChevronRightIcon />,
  },
};

export const WithBothIcons: Story = {
  args: {
    children: 'Both Icons',
    variant: 'primary',
    leftIcon: <ChevronLeftIcon />,
    rightIcon: <ChevronRightIcon />,
  },
};

// 모든 variant 조합 스토리
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary" size="small">
        Primary Small
      </Button>
      <Button variant="primary" size="medium">
        Primary Medium
      </Button>
      <Button variant="primary" size="large">
        Primary Large
      </Button>
      <Button variant="secondary" size="small">
        Secondary Small
      </Button>
      <Button variant="secondary" size="medium">
        Secondary Medium
      </Button>
      <Button variant="secondary" size="large">
        Secondary Large
      </Button>
      <Button variant="tertiary" size="small">
        Tertiary Small
      </Button>
      <Button variant="tertiary" size="medium">
        Tertiary Medium
      </Button>
      <Button variant="tertiary" size="large">
        Tertiary Large
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 variant와 size 조합을 보여줍니다.',
      },
    },
  },
};

// 다크 테마에서의 모든 variant
export const DarkThemeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary" theme="dark">
        Primary Dark
      </Button>
      <Button variant="secondary" theme="dark">
        Secondary Dark
      </Button>
      <Button variant="tertiary" theme="dark">
        Tertiary Dark
      </Button>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: '다크 테마에서의 모든 variant를 보여줍니다.',
      },
    },
  },
};

// 상태별 버튼들
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary">Normal</Button>
      <Button variant="primary" disabled>
        Disabled
      </Button>
      <Button variant="primary" loading>
        Loading
      </Button>
      <Button variant="secondary">Normal</Button>
      <Button variant="secondary" disabled>
        Disabled
      </Button>
      <Button variant="secondary" loading>
        Loading
      </Button>
      <Button variant="tertiary">Normal</Button>
      <Button variant="tertiary" disabled>
        Disabled
      </Button>
      <Button variant="tertiary" loading>
        Loading
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 variant의 정상, 비활성화, 로딩 상태를 보여줍니다.',
      },
    },
  },
};
