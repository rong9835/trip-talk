import type { Meta, StoryObj } from '@storybook/nextjs';
import Pagination, { type PaginationProps } from './index';
import { useState } from 'react';

const meta: Meta<PaginationProps> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '다양한 variant, size, theme를 지원하는 Pagination 컴포넌트입니다. 페이지 네비게이션 기능을 제공합니다.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Pagination의 스타일 variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Pagination의 크기',
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: 'Pagination의 테마',
    },
    currentPage: {
      control: { type: 'number', min: 1 },
      description: '현재 페이지 번호',
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: '전체 페이지 수',
    },
    showFirstLast: {
      control: { type: 'boolean' },
      description: '첫 페이지/마지막 페이지 버튼 표시 여부',
    },
    maxVisiblePages: {
      control: { type: 'number', min: 3, max: 10 },
      description: '최대 표시 페이지 수',
    },
    onPageChange: {
      action: 'page changed',
      description: '페이지 변경 이벤트',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    showFirstLast: true,
    maxVisiblePages: 5,
    onPageChange: (page: number) => console.log('Page changed to:', page),
  },
};

// Variant 스토리들
export const Primary: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: 'primary',
    size: 'medium',
    theme: 'light',
  },
};

export const Secondary: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: 'secondary',
    size: 'medium',
    theme: 'light',
  },
};

export const Tertiary: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: 'tertiary',
    size: 'medium',
    theme: 'light',
  },
};

// Size 스토리들
export const Small: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: 'primary',
    size: 'small',
    theme: 'light',
  },
};

export const Medium: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: 'primary',
    size: 'medium',
    theme: 'light',
  },
};

export const Large: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: 'primary',
    size: 'large',
    theme: 'light',
  },
};

// Theme 스토리들
export const LightTheme: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: 'primary',
    size: 'medium',
    theme: 'light',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkTheme: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// 페이지 수에 따른 스토리들
export const FewPages: Story = {
  args: {
    currentPage: 2,
    totalPages: 3,
    variant: 'primary',
    size: 'medium',
    theme: 'light',
  },
};

export const ManyPages: Story = {
  args: {
    currentPage: 5,
    totalPages: 20,
    variant: 'primary',
    size: 'medium',
    theme: 'light',
  },
};

export const FirstPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    variant: 'primary',
    size: 'medium',
    theme: 'light',
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
    variant: 'primary',
    size: 'medium',
    theme: 'light',
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    variant: 'primary',
    size: 'medium',
    theme: 'light',
  },
};

// MaxVisiblePages 스토리들
export const MaxVisiblePages3: Story = {
  args: {
    currentPage: 5,
    totalPages: 20,
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    maxVisiblePages: 3,
  },
};

export const MaxVisiblePages7: Story = {
  args: {
    currentPage: 5,
    totalPages: 20,
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    maxVisiblePages: 7,
  },
};

// ShowFirstLast 스토리들
export const WithoutFirstLast: Story = {
  args: {
    currentPage: 5,
    totalPages: 20,
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    showFirstLast: false,
  },
};

// 모든 variant 조합 스토리
export const AllVariants: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(3);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h3 style={{ marginBottom: '8px' }}>Primary Variants</h3>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              variant="primary"
              size="small"
              onPageChange={setCurrentPage}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              variant="primary"
              size="medium"
              onPageChange={setCurrentPage}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              variant="primary"
              size="large"
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
        <div>
          <h3 style={{ marginBottom: '8px' }}>Secondary Variants</h3>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              variant="secondary"
              size="small"
              onPageChange={setCurrentPage}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              variant="secondary"
              size="medium"
              onPageChange={setCurrentPage}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              variant="secondary"
              size="large"
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
        <div>
          <h3 style={{ marginBottom: '8px' }}>Tertiary Variants</h3>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              variant="tertiary"
              size="small"
              onPageChange={setCurrentPage}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              variant="tertiary"
              size="medium"
              onPageChange={setCurrentPage}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              variant="tertiary"
              size="large"
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    );
  },
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
  render: () => {
    const [currentPage, setCurrentPage] = useState(3);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h3 style={{ marginBottom: '8px', color: 'white' }}>Primary Dark</h3>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              variant="primary"
              size="small"
              theme="dark"
              onPageChange={setCurrentPage}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              variant="primary"
              size="medium"
              theme="dark"
              onPageChange={setCurrentPage}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              variant="primary"
              size="large"
              theme="dark"
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
        <div>
          <h3 style={{ marginBottom: '8px', color: 'white' }}>
            Secondary Dark
          </h3>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              variant="secondary"
              size="small"
              theme="dark"
              onPageChange={setCurrentPage}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              variant="secondary"
              size="medium"
              theme="dark"
              onPageChange={setCurrentPage}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              variant="secondary"
              size="large"
              theme="dark"
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
        <div>
          <h3 style={{ marginBottom: '8px', color: 'white' }}>Tertiary Dark</h3>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              variant="tertiary"
              size="small"
              theme="dark"
              onPageChange={setCurrentPage}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              variant="tertiary"
              size="medium"
              theme="dark"
              onPageChange={setCurrentPage}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              variant="tertiary"
              size="large"
              theme="dark"
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: '다크 테마에서의 모든 variant를 보여줍니다.',
      },
    },
  },
};

// 페이지 수에 따른 다양한 케이스
export const PageScenarios: Story = {
  render: () => {
    const [currentPage1, setCurrentPage1] = useState(1);
    const [currentPage2, setCurrentPage2] = useState(3);
    const [currentPage3, setCurrentPage3] = useState(5);
    const [currentPage4, setCurrentPage4] = useState(8);
    const [currentPage5, setCurrentPage5] = useState(10);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h3 style={{ marginBottom: '8px' }}>첫 페이지 (1/10)</h3>
          <Pagination
            currentPage={currentPage1}
            totalPages={10}
            variant="primary"
            size="medium"
            onPageChange={setCurrentPage1}
          />
        </div>
        <div>
          <h3 style={{ marginBottom: '8px' }}>초기 페이지 (3/10)</h3>
          <Pagination
            currentPage={currentPage2}
            totalPages={10}
            variant="primary"
            size="medium"
            onPageChange={setCurrentPage2}
          />
        </div>
        <div>
          <h3 style={{ marginBottom: '8px' }}>중간 페이지 (5/10)</h3>
          <Pagination
            currentPage={currentPage3}
            totalPages={10}
            variant="primary"
            size="medium"
            onPageChange={setCurrentPage3}
          />
        </div>
        <div>
          <h3 style={{ marginBottom: '8px' }}>후반 페이지 (8/10)</h3>
          <Pagination
            currentPage={currentPage4}
            totalPages={10}
            variant="primary"
            size="medium"
            onPageChange={setCurrentPage4}
          />
        </div>
        <div>
          <h3 style={{ marginBottom: '8px' }}>마지막 페이지 (10/10)</h3>
          <Pagination
            currentPage={currentPage5}
            totalPages={10}
            variant="primary"
            size="medium"
            onPageChange={setCurrentPage5}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '다양한 페이지 위치에서의 Pagination을 보여줍니다.',
      },
    },
  },
};

// 많은 페이지 수 케이스
export const ManyPagesScenarios: Story = {
  render: () => {
    const [currentPage1, setCurrentPage1] = useState(1);
    const [currentPage2, setCurrentPage2] = useState(5);
    const [currentPage3, setCurrentPage3] = useState(10);
    const [currentPage4, setCurrentPage4] = useState(15);
    const [currentPage5, setCurrentPage5] = useState(20);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h3 style={{ marginBottom: '8px' }}>첫 페이지 (1/20)</h3>
          <Pagination
            currentPage={currentPage1}
            totalPages={20}
            variant="primary"
            size="medium"
            onPageChange={setCurrentPage1}
          />
        </div>
        <div>
          <h3 style={{ marginBottom: '8px' }}>초기 페이지 (5/20)</h3>
          <Pagination
            currentPage={currentPage2}
            totalPages={20}
            variant="primary"
            size="medium"
            onPageChange={setCurrentPage2}
          />
        </div>
        <div>
          <h3 style={{ marginBottom: '8px' }}>중간 페이지 (10/20)</h3>
          <Pagination
            currentPage={currentPage3}
            totalPages={20}
            variant="primary"
            size="medium"
            onPageChange={setCurrentPage3}
          />
        </div>
        <div>
          <h3 style={{ marginBottom: '8px' }}>후반 페이지 (15/20)</h3>
          <Pagination
            currentPage={currentPage4}
            totalPages={20}
            variant="primary"
            size="medium"
            onPageChange={setCurrentPage4}
          />
        </div>
        <div>
          <h3 style={{ marginBottom: '8px' }}>마지막 페이지 (20/20)</h3>
          <Pagination
            currentPage={currentPage5}
            totalPages={20}
            variant="primary"
            size="medium"
            onPageChange={setCurrentPage5}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '많은 페이지 수에서의 Pagination 동작을 보여줍니다.',
      },
    },
  },
};

// MaxVisiblePages 설정에 따른 케이스
export const MaxVisiblePagesScenarios: Story = {
  render: () => {
    const [currentPage1, setCurrentPage1] = useState(5);
    const [currentPage2, setCurrentPage2] = useState(5);
    const [currentPage3, setCurrentPage3] = useState(5);
    const [currentPage4, setCurrentPage4] = useState(5);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h3 style={{ marginBottom: '8px' }}>MaxVisiblePages: 3</h3>
          <Pagination
            currentPage={currentPage1}
            totalPages={20}
            variant="primary"
            size="medium"
            maxVisiblePages={3}
            onPageChange={setCurrentPage1}
          />
        </div>
        <div>
          <h3 style={{ marginBottom: '8px' }}>MaxVisiblePages: 5</h3>
          <Pagination
            currentPage={currentPage2}
            totalPages={20}
            variant="primary"
            size="medium"
            maxVisiblePages={5}
            onPageChange={setCurrentPage2}
          />
        </div>
        <div>
          <h3 style={{ marginBottom: '8px' }}>MaxVisiblePages: 7</h3>
          <Pagination
            currentPage={currentPage3}
            totalPages={20}
            variant="primary"
            size="medium"
            maxVisiblePages={7}
            onPageChange={setCurrentPage3}
          />
        </div>
        <div>
          <h3 style={{ marginBottom: '8px' }}>MaxVisiblePages: 10</h3>
          <Pagination
            currentPage={currentPage4}
            totalPages={20}
            variant="primary"
            size="medium"
            maxVisiblePages={10}
            onPageChange={setCurrentPage4}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'MaxVisiblePages 설정에 따른 Pagination 동작을 보여줍니다.',
      },
    },
  },
};

// ShowFirstLast 설정에 따른 케이스
export const FirstLastScenarios: Story = {
  render: () => {
    const [currentPage1, setCurrentPage1] = useState(5);
    const [currentPage2, setCurrentPage2] = useState(5);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h3 style={{ marginBottom: '8px' }}>ShowFirstLast: true (기본값)</h3>
          <Pagination
            currentPage={currentPage1}
            totalPages={20}
            variant="primary"
            size="medium"
            showFirstLast={true}
            onPageChange={setCurrentPage1}
          />
        </div>
        <div>
          <h3 style={{ marginBottom: '8px' }}>ShowFirstLast: false</h3>
          <Pagination
            currentPage={currentPage2}
            totalPages={20}
            variant="primary"
            size="medium"
            showFirstLast={false}
            onPageChange={setCurrentPage2}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'ShowFirstLast 설정에 따른 Pagination 동작을 보여줍니다.',
      },
    },
  },
};

// Interactive 스토리 (실제 동작 테스트)
export const Interactive: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <label>
            Total Pages:
            <input
              type="number"
              value={totalPages}
              onChange={(e) =>
                setTotalPages(Math.max(1, parseInt(e.target.value) || 1))
              }
              style={{ marginLeft: '8px', padding: '4px' }}
            />
          </label>
          <label>
            Current Page:
            <input
              type="number"
              value={currentPage}
              onChange={(e) =>
                setCurrentPage(
                  Math.max(
                    1,
                    Math.min(totalPages, parseInt(e.target.value) || 1)
                  )
                )
              }
              style={{ marginLeft: '8px', padding: '4px' }}
            />
          </label>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          variant="primary"
          size="medium"
          onPageChange={setCurrentPage}
        />
        <div style={{ textAlign: 'center', color: '#666' }}>
          현재 페이지: {currentPage} / {totalPages}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '실제로 페이지를 변경할 수 있는 Interactive Pagination입니다.',
      },
    },
  },
};
