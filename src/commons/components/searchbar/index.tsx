'use client';

import React, { useState, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';

export interface SearchbarProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  theme?: 'light' | 'dark';
  placeholder?: string;
  onSearch?: (value: string) => void;
  onClear?: () => void;
  showClearButton?: boolean;
  disabled?: boolean;
  className?: string;
}

const Searchbar = forwardRef<HTMLInputElement, SearchbarProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      theme = 'light',
      placeholder = '제목을 검색해 주세요.',
      onSearch,
      onClear,
      showClearButton = true,
      disabled = false,
      className,
      onChange,
      onFocus,
      onBlur,
      value,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState<string>(String(value || ''));

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      onChange?.(e);
      onSearch?.(newValue);
    };

    const handleClear = () => {
      setInputValue('');
      onClear?.();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onSearch?.(inputValue);
      }
    };

    const isTyping = isFocused && inputValue.length > 0;
    const isFilled = !isFocused && inputValue.length > 0;

    const searchbarClasses = cn(
      styles.searchbar,
      styles[`searchbar--${variant}`],
      styles[`searchbar--${size}`],
      styles[`searchbar--${theme}`],
      {
        [styles['searchbar--focused']]: isFocused,
        [styles['searchbar--typing']]: isTyping,
        [styles['searchbar--filled']]: isFilled,
        [styles['searchbar--disabled']]: disabled,
      },
      className
    );

    const inputClasses = cn(
      styles.input,
      styles[`input--${variant}`],
      styles[`input--${size}`],
      styles[`input--${theme}`],
      {
        [styles['input--focused']]: isFocused,
        [styles['input--typing']]: isTyping,
        [styles['input--filled']]: isFilled,
        [styles['input--disabled']]: disabled,
      }
    );

    return (
      <div className={searchbarClasses}>
        <div className={styles.searchIcon}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <input
          ref={ref}
          type="text"
          value={inputValue}
          placeholder={placeholder}
          disabled={disabled}
          className={inputClasses}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          {...props}
        />
        {showClearButton && inputValue.length > 0 && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={handleClear}
            disabled={disabled}
            aria-label="검색어 지우기"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L4 12M4 4L12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

Searchbar.displayName = 'Searchbar';

export default Searchbar;
