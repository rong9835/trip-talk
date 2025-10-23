import type { Meta, StoryObj } from '@storybook/nextjs';
import Selectbox, { type SelectboxProps } from './index';

// 샘플 옵션 데이터
const sampleOptions = [
  { value: 'option1', label: '옵션 1' },
  { value: 'option2', label: '옵션 2' },
  { value: 'option3', label: '옵션 3' },
  { value: 'option4', label: '옵션 4' },
  { value: 'option5', label: '옵션 5' },
];

const cityOptions = [
  { value: 'seoul', label: '서울' },
  { value: 'busan', label: '부산' },
  { value: 'daegu', label: '대구' },
  { value: 'incheon', label: '인천' },
  { value: 'gwangju', label: '광주' },
  { value: 'daejeon', label: '대전' },
  { value: 'ulsan', label: '울산' },
  { value: 'sejong', label: '세종' },
];

const countryOptions = [
  { value: 'korea', label: '대한민국' },
  { value: 'japan', label: '일본' },
  { value: 'china', label: '중국' },
  { value: 'usa', label: '미국' },
  { value: 'uk', label: '영국' },
  { value: 'france', label: '프랑스' },
  { value: 'germany', label: '독일' },
  { value: 'italy', label: '이탈리아' },
  { value: 'spain', label: '스페인' },
  { value: 'canada', label: '캐나다' },
];

const meta: Meta<SelectboxProps> = {
  title: 'Components/Selectbox',
  component: Selectbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '다양한 variant, size, theme를 지원하는 Selectbox 컴포넌트입니다. 드롭다운 선택 기능과 키보드 접근성을 제공합니다.',
      },
    },
  },
  argTypes: {
    options: {
      control: { type: 'object' },
      description: '선택 가능한 옵션 목록',
    },
    value: {
      control: { type: 'text' },
      description: '현재 선택된 값',
    },
    placeholder: {
      control: { type: 'text' },
      description: '플레이스홀더 텍스트',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Selectbox의 스타일 variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Selectbox의 크기',
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: 'Selectbox의 테마',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Selectbox 비활성화 여부',
    },
    onChange: {
      action: 'changed',
      description: '값 변경 시 호출되는 콜백 함수',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: '옵션을 선택하세요',
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    disabled: false,
  },
};

// Variant 스토리들
export const Primary: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Primary variant 선택',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Secondary variant 선택',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Tertiary: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Tertiary variant 선택',
    variant: 'tertiary',
    size: 'medium',
  },
};

// Size 스토리들
export const Small: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Small size 선택',
    variant: 'primary',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Medium size 선택',
    variant: 'primary',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Large size 선택',
    variant: 'primary',
    size: 'large',
  },
};

// Theme 스토리들
export const LightTheme: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Light theme 선택',
    variant: 'primary',
    theme: 'light',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkTheme: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Dark theme 선택',
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
    options: sampleOptions,
    placeholder: '비활성화된 선택',
    variant: 'primary',
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    options: sampleOptions,
    value: 'option2',
    placeholder: '값이 있는 선택',
    variant: 'primary',
  },
};

// 실제 사용 예시들
export const CitySelector: Story = {
  args: {
    options: cityOptions,
    placeholder: '도시를 선택하세요',
    variant: 'primary',
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: '도시 선택 예시입니다.',
      },
    },
  },
};

export const CountrySelector: Story = {
  args: {
    options: countryOptions,
    placeholder: '국가를 선택하세요',
    variant: 'primary',
    size: 'large',
  },
  parameters: {
    docs: {
      description: {
        story: '국가 선택 예시입니다.',
      },
    },
  },
};

// 모든 variant 조합 스토리
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Selectbox
        options={sampleOptions}
        placeholder="Primary Small"
        variant="primary"
        size="small"
      />
      <Selectbox
        options={sampleOptions}
        placeholder="Primary Medium"
        variant="primary"
        size="medium"
      />
      <Selectbox
        options={sampleOptions}
        placeholder="Primary Large"
        variant="primary"
        size="large"
      />
      <Selectbox
        options={sampleOptions}
        placeholder="Secondary Small"
        variant="secondary"
        size="small"
      />
      <Selectbox
        options={sampleOptions}
        placeholder="Secondary Medium"
        variant="secondary"
        size="medium"
      />
      <Selectbox
        options={sampleOptions}
        placeholder="Secondary Large"
        variant="secondary"
        size="large"
      />
      <Selectbox
        options={sampleOptions}
        placeholder="Tertiary Small"
        variant="tertiary"
        size="small"
      />
      <Selectbox
        options={sampleOptions}
        placeholder="Tertiary Medium"
        variant="tertiary"
        size="medium"
      />
      <Selectbox
        options={sampleOptions}
        placeholder="Tertiary Large"
        variant="tertiary"
        size="large"
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
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Selectbox
        options={sampleOptions}
        placeholder="Primary Dark"
        variant="primary"
        theme="dark"
      />
      <Selectbox
        options={sampleOptions}
        placeholder="Secondary Dark"
        variant="secondary"
        theme="dark"
      />
      <Selectbox
        options={sampleOptions}
        placeholder="Tertiary Dark"
        variant="tertiary"
        theme="dark"
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

// 피그마 디자인의 4가지 상태 (filled x selected)
export const FigmaStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>
            filled=off, selected=off
          </p>
          <Selectbox
            options={sampleOptions}
            placeholder="내용입력"
            variant="primary"
          />
        </div>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>
            filled=on, selected=off
          </p>
          <Selectbox
            options={sampleOptions}
            value="option1"
            placeholder="내용입력"
            variant="primary"
          />
        </div>
      </div>
      <div style={{ fontSize: '12px', color: '#999' }}>
        * 드롭다운을 열면 selected=on 상태를 확인할 수 있습니다
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '피그마 디자인의 4가지 상태를 재현합니다. filled는 값 입력 여부, selected는 드롭다운 열림 여부를 나타냅니다.',
      },
    },
  },
};

// 상태별 Selectbox들
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Selectbox
        options={sampleOptions}
        placeholder="Normal"
        variant="primary"
      />
      <Selectbox
        options={sampleOptions}
        placeholder="Disabled"
        variant="primary"
        disabled
      />
      <Selectbox
        options={sampleOptions}
        value="option2"
        placeholder="With Value"
        variant="primary"
      />
      <Selectbox
        options={sampleOptions}
        placeholder="Secondary"
        variant="secondary"
      />
      <Selectbox
        options={sampleOptions}
        placeholder="Tertiary"
        variant="tertiary"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 상태와 variant를 보여줍니다.',
      },
    },
  },
};

// 긴 옵션 목록
export const LongOptions: Story = {
  args: {
    options: Array.from({ length: 20 }, (_, index) => ({
      value: `option${index + 1}`,
      label: `긴 옵션 이름 ${index + 1}`,
    })),
    placeholder: '긴 목록에서 선택',
    variant: 'primary',
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: '긴 옵션 목록을 가진 Selectbox입니다.',
      },
    },
  },
};

// 다양한 옵션 타입들
export const DifferentOptionTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Selectbox
        options={[
          { value: '1', label: '1번' },
          { value: '2', label: '2번' },
          { value: '3', label: '3번' },
        ]}
        placeholder="숫자 옵션"
        variant="primary"
      />
      <Selectbox
        options={[
          { value: 'apple', label: '🍎 사과' },
          { value: 'banana', label: '🍌 바나나' },
          { value: 'orange', label: '🍊 오렌지' },
        ]}
        placeholder="이모지 옵션"
        variant="secondary"
      />
      <Selectbox
        options={[
          { value: 'yes', label: '예' },
          { value: 'no', label: '아니오' },
          { value: 'maybe', label: '아마도' },
        ]}
        placeholder="예/아니오 옵션"
        variant="tertiary"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 타입의 옵션을 가진 Selectbox들입니다.',
      },
    },
  },
};

// 인터랙션 테스트
export const Interactive: Story = {
  args: {
    options: sampleOptions,
    placeholder: '클릭해서 선택해보세요',
    variant: 'primary',
    onChange: (value) => {
      console.log('Selected value:', value);
    },
  },
  parameters: {
    docs: {
      description: {
        story: '인터랙션을 테스트할 수 있는 Selectbox입니다.',
      },
    },
  },
};
