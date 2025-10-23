import type { Meta, StoryObj } from '@storybook/nextjs';
import Input, { type InputProps } from './index';

// 아이콘 예시 컴포넌트
const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m21 21-4.35-4.35"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EyeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 10s4-8 9-8 9 8 9 8-4 8-9 8-9-8-9-8Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const ClearIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 5L5 15M5 5l10 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const meta: Meta<InputProps> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '다양한 variant, size, theme, status를 지원하는 Input 컴포넌트입니다. 라벨, 에러 메시지, 도움말 텍스트, 아이콘, 버튼 기능을 포함합니다.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Input의 스타일 variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Input의 크기',
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: 'Input의 테마',
    },
    status: {
      control: { type: 'select' },
      options: ['enabled', 'disabled', 'error', 'selected'],
      description: 'Input의 상태',
    },
    label: {
      control: { type: 'text' },
      description: '라벨 텍스트',
    },
    placeholder: {
      control: { type: 'text' },
      description: '플레이스홀더 텍스트',
    },
    required: {
      control: { type: 'boolean' },
      description: '필수 입력 여부',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Input 비활성화 여부',
    },
    multiline: {
      control: { type: 'boolean' },
      description: '텍스트 영역 여부',
    },
    maxLength: {
      control: { type: 'number' },
      description: '최대 글자 수',
    },
    currentLength: {
      control: { type: 'number' },
      description: '현재 글자 수',
    },
    errorMessage: {
      control: { type: 'text' },
      description: '에러 메시지',
    },
    helperText: {
      control: { type: 'text' },
      description: '도움말 텍스트',
    },
    buttonText: {
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
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    status: 'enabled',
    placeholder: '내용을 입력해 주세요.',
    disabled: false,
    multiline: false,
  },
};

// Variant 스토리들
export const Primary: Story = {
  args: {
    label: 'Primary Input',
    variant: 'primary',
    size: 'medium',
    placeholder: 'Primary variant 입력',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Input',
    variant: 'secondary',
    size: 'medium',
    placeholder: 'Secondary variant 입력',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Tertiary Input',
    variant: 'tertiary',
    size: 'medium',
    placeholder: 'Tertiary variant 입력',
  },
};

// Size 스토리들
export const Small: Story = {
  args: {
    label: 'Small Input',
    variant: 'primary',
    size: 'small',
    placeholder: 'Small size 입력',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium Input',
    variant: 'primary',
    size: 'medium',
    placeholder: 'Medium size 입력',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Input',
    variant: 'primary',
    size: 'large',
    placeholder: 'Large size 입력',
  },
};

// Theme 스토리들
export const LightTheme: Story = {
  args: {
    label: 'Light Theme',
    variant: 'primary',
    theme: 'light',
    placeholder: 'Light theme 입력',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkTheme: Story = {
  args: {
    label: 'Dark Theme',
    variant: 'primary',
    theme: 'dark',
    placeholder: 'Dark theme 입력',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// 상태 스토리들
export const Enabled: Story = {
  args: {
    label: 'Enabled Input',
    variant: 'primary',
    status: 'enabled',
    placeholder: '정상 상태 입력',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    variant: 'primary',
    status: 'disabled',
    placeholder: '비활성화된 입력',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    label: 'Error Input',
    variant: 'primary',
    status: 'error',
    placeholder: '에러 상태 입력',
    errorMessage: '올바른 값을 입력해주세요.',
  },
};

export const Selected: Story = {
  args: {
    label: 'Selected Input',
    variant: 'primary',
    status: 'selected',
    placeholder: '선택된 상태 입력',
  },
};

// 라벨과 필수 표시
export const WithLabel: Story = {
  args: {
    label: '이메일',
    variant: 'primary',
    placeholder: '이메일을 입력해주세요',
  },
};

export const Required: Story = {
  args: {
    label: '필수 입력',
    variant: 'primary',
    required: true,
    placeholder: '필수 입력 필드',
  },
};

// 에러 메시지와 도움말
export const WithErrorMessage: Story = {
  args: {
    label: '에러가 있는 입력',
    variant: 'primary',
    status: 'error',
    placeholder: '잘못된 입력',
    errorMessage: '올바른 형식으로 입력해주세요.',
  },
};

export const WithHelperText: Story = {
  args: {
    label: '도움말이 있는 입력',
    variant: 'primary',
    placeholder: '도움말이 있는 입력',
    helperText: '이 필드는 선택사항입니다.',
  },
};

// 아이콘이 있는 Input들
export const WithLeftIcon: Story = {
  args: {
    label: '검색',
    variant: 'primary',
    placeholder: '검색어를 입력하세요',
    leftIcon: <SearchIcon />,
  },
};

export const WithRightIcon: Story = {
  args: {
    label: '비밀번호',
    variant: 'primary',
    placeholder: '비밀번호를 입력하세요',
    rightIcon: <EyeIcon />,
  },
};

export const WithBothIcons: Story = {
  args: {
    label: '검색 및 클리어',
    variant: 'primary',
    placeholder: '검색어를 입력하세요',
    leftIcon: <SearchIcon />,
    rightIcon: <ClearIcon />,
  },
};

// 버튼이 있는 Input
export const WithButton: Story = {
  args: {
    label: '우편번호',
    variant: 'primary',
    placeholder: '우편번호를 입력하세요',
    buttonText: '검색',
    onButtonClick: () => alert('우편번호 검색'),
  },
};

// 텍스트 영역
export const Multiline: Story = {
  args: {
    label: '메시지',
    variant: 'primary',
    placeholder: '메시지를 입력하세요',
    multiline: true,
  },
};

// 텍스트 영역 - 카운터 포함
export const MultilineWithCounter: Story = {
  args: {
    label: '문의사항',
    variant: 'primary',
    placeholder: '문의사항을 입력해 주세요.',
    multiline: true,
    maxLength: 100,
    currentLength: 0,
  },
};

// 텍스트 영역 - 다양한 사이즈
export const MultilineSizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '600px',
      }}
    >
      <Input
        label="Small Textarea"
        variant="primary"
        size="small"
        placeholder="문의사항을 입력해 주세요."
        multiline
        maxLength={100}
        currentLength={0}
      />
      <Input
        label="Medium Textarea"
        variant="primary"
        size="medium"
        placeholder="문의사항을 입력해 주세요."
        multiline
        maxLength={100}
        currentLength={0}
      />
      <Input
        label="Large Textarea"
        variant="primary"
        size="large"
        placeholder="문의사항을 입력해 주세요."
        multiline
        maxLength={100}
        currentLength={0}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 크기의 Textarea를 보여줍니다.',
      },
    },
  },
};

// 글자 수 카운터
export const WithCounter: Story = {
  args: {
    label: '제한된 입력',
    variant: 'primary',
    placeholder: '최대 100자까지 입력 가능',
    maxLength: 100,
    currentLength: 0,
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
      <Input
        label="Primary Small"
        variant="primary"
        size="small"
        placeholder="Primary small 입력"
      />
      <Input
        label="Primary Medium"
        variant="primary"
        size="medium"
        placeholder="Primary medium 입력"
      />
      <Input
        label="Primary Large"
        variant="primary"
        size="large"
        placeholder="Primary large 입력"
      />
      <Input
        label="Secondary Small"
        variant="secondary"
        size="small"
        placeholder="Secondary small 입력"
      />
      <Input
        label="Secondary Medium"
        variant="secondary"
        size="medium"
        placeholder="Secondary medium 입력"
      />
      <Input
        label="Secondary Large"
        variant="secondary"
        size="large"
        placeholder="Secondary large 입력"
      />
      <Input
        label="Tertiary Small"
        variant="tertiary"
        size="small"
        placeholder="Tertiary small 입력"
      />
      <Input
        label="Tertiary Medium"
        variant="tertiary"
        size="medium"
        placeholder="Tertiary medium 입력"
      />
      <Input
        label="Tertiary Large"
        variant="tertiary"
        size="large"
        placeholder="Tertiary large 입력"
      />
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
      <Input
        label="Primary Dark"
        variant="primary"
        theme="dark"
        placeholder="Primary dark 입력"
      />
      <Input
        label="Secondary Dark"
        variant="secondary"
        theme="dark"
        placeholder="Secondary dark 입력"
      />
      <Input
        label="Tertiary Dark"
        variant="tertiary"
        theme="dark"
        placeholder="Tertiary dark 입력"
      />
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

// 상태별 Input들
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
      <Input
        label="Enabled"
        variant="primary"
        status="enabled"
        placeholder="정상 상태"
      />
      <Input
        label="Disabled"
        variant="primary"
        status="disabled"
        placeholder="비활성화 상태"
        disabled
      />
      <Input
        label="Error"
        variant="primary"
        status="error"
        placeholder="에러 상태"
        errorMessage="올바른 값을 입력해주세요."
      />
      <Input
        label="Selected"
        variant="primary"
        status="selected"
        placeholder="선택된 상태"
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

// 기능별 Input들
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
      <Input label="기본 Input" variant="primary" placeholder="기본 입력" />
      <Input
        label="필수 Input"
        variant="primary"
        required
        placeholder="필수 입력"
      />
      <Input
        label="에러 Input"
        variant="primary"
        status="error"
        placeholder="에러 입력"
        errorMessage="올바른 값을 입력해주세요."
      />
      <Input
        label="도움말 Input"
        variant="primary"
        placeholder="도움말 입력"
        helperText="이 필드는 선택사항입니다."
      />
      <Input
        label="아이콘 Input"
        variant="primary"
        placeholder="아이콘 입력"
        leftIcon={<SearchIcon />}
      />
      <Input
        label="버튼 Input"
        variant="primary"
        placeholder="버튼 입력"
        buttonText="검색"
        onButtonClick={() => alert('검색')}
      />
      <Input
        label="텍스트 영역"
        variant="primary"
        placeholder="문의사항을 입력해 주세요."
        multiline
        maxLength={100}
        currentLength={0}
      />
      <Input
        label="글자 수 제한"
        variant="primary"
        placeholder="글자 수 제한"
        maxLength={50}
        currentLength={0}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 기능을 포함한 Input들을 보여줍니다.',
      },
    },
  },
};
