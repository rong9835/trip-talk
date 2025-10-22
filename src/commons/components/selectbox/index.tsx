'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';

export interface SelectboxOption {
  value: string;
  label: string;
}

export interface SelectboxProps {
  options: SelectboxOption[];
  value?: string;
  placeholder?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  theme?: 'light' | 'dark';
  disabled?: boolean;
  onChange?: (value: string) => void;
  className?: string;
}

export const Selectbox: React.FC<SelectboxProps> = ({
  options = [],
  value = '',
  placeholder = '내용입력',
  variant = 'primary',
  size = 'medium',
  theme = 'light',
  disabled = false,
  onChange,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const [isFilled, setIsFilled] = useState(false);
  const selectboxRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );

  useEffect(() => {
    setSelectedValue(value);
    setIsFilled(!!value);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectboxRef.current &&
        !selectboxRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    setIsFilled(true);
    setIsOpen(false);
    onChange?.(optionValue);
  };

  const getSelectboxClasses = () => {
    const baseClasses = [
      styles.selectbox,
      styles[`variant-${variant}`],
      styles[`size-${size}`],
      styles[`theme-${theme}`],
    ];

    if (isFilled) baseClasses.push(styles.filled);
    if (isOpen) baseClasses.push(styles.selected);
    if (disabled) baseClasses.push(styles.disabled);

    return baseClasses.join(' ');
  };

  const getDropdownClasses = () => {
    return [
      styles.dropdown,
      styles[`theme-${theme}`],
      isOpen ? styles.open : '',
    ].join(' ');
  };

  const getOptionClasses = (optionValue: string) => {
    const baseClasses = [styles.option];

    if (optionValue === selectedValue) {
      baseClasses.push(styles.selected);
    }

    return baseClasses.join(' ');
  };

  return (
    <div ref={selectboxRef} className={`${getSelectboxClasses()} ${className}`}>
      <div className={styles.trigger} onClick={handleToggle}>
        <div className={styles.content}>
          <span className={styles.text}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        <div className={styles.icon}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={isOpen ? styles.rotated : ''}
          >
            <path
              d="M7 10L12 15L17 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className={getDropdownClasses()}>
          {options.map((option) => (
            <div
              key={option.value}
              className={getOptionClasses(option.value)}
              onClick={() => handleSelect(option.value)}
            >
              <span className={styles.optionText}>{option.label}</span>
              {option.value === selectedValue && (
                <div className={styles.checkIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M13.3333 4L6 11.3333L2.66667 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Selectbox;
