'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  theme?: 'light' | 'dark';
  className?: string;
  showFirstLast?: boolean;
  maxVisiblePages?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  variant = 'primary',
  size = 'medium',
  theme = 'light',
  className,
  showFirstLast = true,
  maxVisiblePages = 5,
}) => {
  // 페이지 번호 배열 생성
  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= maxVisiblePages) {
      // 전체 페이지가 maxVisiblePages 이하인 경우 모든 페이지 표시
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // 현재 페이지를 중심으로 페이지 번호 생성
      const half = Math.floor(maxVisiblePages / 2);
      let start = Math.max(1, currentPage - half);
      let end = Math.min(totalPages, start + maxVisiblePages - 1);

      if (end - start + 1 < maxVisiblePages) {
        start = Math.max(1, end - maxVisiblePages + 1);
      }

      // 첫 페이지와 마지막 페이지 사이에 ... 표시
      if (start > 1) {
        pages.push(1);
        if (start > 2) {
          pages.push('...');
        }
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages) {
        if (end < totalPages - 1) {
          pages.push('...');
        }
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleFirst = () => {
    onPageChange(1);
  };

  const handleLast = () => {
    onPageChange(totalPages);
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div
      className={cn(
        styles.pagination,
        styles[`pagination--${variant}`],
        styles[`pagination--${size}`],
        styles[`pagination--${theme}`],
        className
      )}
    >
      {/* 이전 버튼 */}
      <button
        className={cn(
          styles.navButton,
          styles.previousButton,
          currentPage === 1 && styles.disabled
        )}
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label="이전 페이지"
      >
        <img
          src="/icons/chevron-left.svg"
          alt="이전 페이지"
          width="24"
          height="24"
        />
      </button>

      {/* 페이지 번호들 */}
      <div className={styles.pageNumbers}>
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <span key={`ellipsis-${index}`} className={styles.ellipsis}>
                ...
              </span>
            );
          }

          const pageNum = page as number;
          const isActive = pageNum === currentPage;

          return (
            <button
              key={pageNum}
              className={cn(styles.pageButton, isActive && styles.active)}
              onClick={() => onPageChange(pageNum)}
              aria-label={`페이지 ${pageNum}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      {/* 다음 버튼 */}
      <button
        className={cn(
          styles.navButton,
          styles.nextButton,
          currentPage === totalPages && styles.disabled
        )}
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="다음 페이지"
      >
        <img
          src="/icons/chevron-right.svg"
          alt="다음 페이지"
          width="24"
          height="24"
        />
      </button>
    </div>
  );
};

export default Pagination;
