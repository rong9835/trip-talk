import type { Meta, StoryObj } from '@storybook/nextjs';
import Searchbar, { type SearchbarProps } from './index';

const meta: Meta<SearchbarProps> = {
  title: 'Components/Searchbar',
  component: Searchbar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '다양한 variant, size, theme를 지원하는 Searchbar 컴포넌트입니다. 검색 아이콘, 클리어 버튼, 포커스 상태, 타이핑 상태를 포함합니다.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Searchbar의 스타일 variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Searchbar의 크기',
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: 'Searchbar의 테마',
    },
    placeholder: {
      control: { type: 'text' },
      description: '플레이스홀더 텍스트',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Searchbar 비활성화 여부',
    },
    showClearButton: {
      control: { type: 'boolean' },
      description: '클리어 버튼 표시 여부',
    },
    value: {
      control: { type: 'text' },
      description: '입력값',
    },
    onSearch: {
      action: 'searched',
      description: '검색 이벤트 핸들러',
    },
    onClear: {
      action: 'cleared',
      description: '클리어 이벤트 핸들러',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    placeholder: '제목을 검색해 주세요.',
    disabled: false,
    showClearButton: true,
  },
};

// Variant 스토리들
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    placeholder: 'Primary variant 검색',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    placeholder: 'Secondary variant 검색',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    placeholder: 'Tertiary variant 검색',
  },
};

// Size 스토리들
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    placeholder: 'Small size 검색',
  },
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    placeholder: 'Medium size 검색',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    placeholder: 'Large size 검색',
  },
};

// Theme 스토리들
export const LightTheme: Story = {
  args: {
    variant: 'primary',
    theme: 'light',
    placeholder: 'Light theme 검색',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkTheme: Story = {
  args: {
    variant: 'primary',
    theme: 'dark',
    placeholder: 'Dark theme 검색',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// 상태 스토리들
export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    placeholder: '비활성화된 검색',
  },
};

export const WithValue: Story = {
  args: {
    variant: 'primary',
    value: '검색어',
    placeholder: '검색어가 있는 상태',
  },
};

export const WithoutClearButton: Story = {
  args: {
    variant: 'primary',
    showClearButton: false,
    value: '클리어 버튼 없음',
    placeholder: '클리어 버튼이 없는 검색',
  },
};

// 커스텀 플레이스홀더
export const CustomPlaceholder: Story = {
  args: {
    variant: 'primary',
    placeholder: '여행지를 검색해보세요',
  },
};

// 모든 variant 조합 스토리
export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '300px',
      }}
    >
      <Searchbar variant="primary" size="small" placeholder="Primary Small" />
      <Searchbar variant="primary" size="medium" placeholder="Primary Medium" />
      <Searchbar variant="primary" size="large" placeholder="Primary Large" />
      <Searchbar
        variant="secondary"
        size="small"
        placeholder="Secondary Small"
      />
      <Searchbar
        variant="secondary"
        size="medium"
        placeholder="Secondary Medium"
      />
      <Searchbar
        variant="secondary"
        size="large"
        placeholder="Secondary Large"
      />
      <Searchbar variant="tertiary" size="small" placeholder="Tertiary Small" />
      <Searchbar
        variant="tertiary"
        size="medium"
        placeholder="Tertiary Medium"
      />
      <Searchbar variant="tertiary" size="large" placeholder="Tertiary Large" />
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '300px',
      }}
    >
      <Searchbar variant="primary" theme="dark" placeholder="Primary Dark" />
      <Searchbar
        variant="secondary"
        theme="dark"
        placeholder="Secondary Dark"
      />
      <Searchbar variant="tertiary" theme="dark" placeholder="Tertiary Dark" />
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

// 상태별 Searchbar들
export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '300px',
      }}
    >
      <Searchbar variant="primary" placeholder="정상 상태" />
      <Searchbar variant="primary" disabled placeholder="비활성화 상태" />
      <Searchbar
        variant="primary"
        value="검색어"
        placeholder="값이 있는 상태"
      />
      <Searchbar
        variant="primary"
        showClearButton={false}
        placeholder="클리어 버튼 없음"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 상태를 보여줍니다.',
      },
    },
  },
};

// 기능별 Searchbar들
export const AllFeatures: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '300px',
      }}
    >
      <Searchbar variant="primary" placeholder="기본 검색" />
      <Searchbar variant="primary" placeholder="커스텀 플레이스홀더" />
      <Searchbar
        variant="primary"
        value="검색어"
        placeholder="값이 있는 검색"
      />
      <Searchbar variant="primary" disabled placeholder="비활성화 검색" />
      <Searchbar
        variant="primary"
        showClearButton={false}
        placeholder="클리어 버튼 없음"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 기능을 포함한 Searchbar들을 보여줍니다.',
      },
    },
  },
};

// 인터랙티브 예제
export const Interactive: Story = {
  args: {
    variant: 'primary',
    placeholder: '인터랙티브 검색',
    onSearch: (value: string) => {
      console.log('검색어:', value);
    },
    onClear: () => {
      console.log('검색어 클리어');
    },
  },
  parameters: {
    docs: {
      description: {
        story: '검색과 클리어 이벤트가 작동하는 인터랙티브 예제입니다.',
      },
    },
  },
};

// 실제 사용 예제
export const RealWorldExample: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
        여행 검색
      </h3>
      <Searchbar
        variant="primary"
        size="large"
        placeholder="어디로 여행가고 싶으신가요?"
        onSearch={(value) => {
          console.log('여행지 검색:', value);
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '실제 사용 예제로 여행 검색 기능을 보여줍니다.',
      },
    },
  },
};
