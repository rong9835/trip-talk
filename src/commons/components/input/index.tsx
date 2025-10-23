'use client';

import React, { forwardRef, useState } from 'react';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';

// Input 컴포넌트의 variant 타입 정의
export type InputVariant = 'primary' | 'secondary' | 'tertiary';
export type InputSize = 'small' | 'medium' | 'large';
export type InputTheme = 'light' | 'dark';
export type InputStatus = 'enabled' | 'disabled' | 'error' | 'selected';

// Input 컴포넌트 Props 인터페이스
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Input variant 스타일 */
  variant?: InputVariant;
  /** Input 크기 */
  size?: InputSize;
  /** 테마 (라이트/다크) */
  theme?: InputTheme;
  /** Input 상태 */
  status?: InputStatus;
  /** 라벨 텍스트 */
  label?: string;
  /** 필수 입력 여부 */
  required?: boolean;
  /** 플레이스홀더 텍스트 */
  placeholder?: string;
  /** 에러 메시지 */
  errorMessage?: string;
  /** 도움말 텍스트 */
  helperText?: string;
  /** 왼쪽 아이콘 */
  leftIcon?: React.ReactNode;
  /** 오른쪽 아이콘 */
  rightIcon?: React.ReactNode;
  /** 버튼 텍스트 (우편번호 검색 등) */
  buttonText?: string;
  /** 버튼 클릭 핸들러 */
  onButtonClick?: () => void;
  /** 텍스트 영역 여부 (textarea) */
  multiline?: boolean;
  /** 최대 글자 수 */
  maxLength?: number;
  /** 현재 글자 수 */
  currentLength?: number;
  /** 커스텀 클래스명 */
  className?: string;
  /** 컨테이너 클래스명 */
  containerClassName?: string;
}

/**
 * Input 컴포넌트
 *
 * @description 피그마 디자인 시스템을 기반으로 한 완전한 variant 시스템을 제공하는 Input 컴포넌트
 *
 * @features
 * - variant: 'primary' | 'secondary' | 'tertiary'
 * - size: 'small' | 'medium' | 'large'
 * - theme: 'light' | 'dark'
 * - status: 'enabled' | 'disabled' | 'error' | 'selected'
 * - 라벨, 필수 표시, 에러 메시지, 도움말 텍스트 지원
 * - 왼쪽/오른쪽 아이콘 지원
 * - 버튼 기능 지원 (우편번호 검색 등)
 * - 텍스트 영역 지원
 * - 글자 수 카운터 지원
 *
 * @example
 * ```tsx
 * <Input
 *   variant="primary"
 *   size="medium"
 *   theme="light"
 *   label="이메일"
 *   required
 *   placeholder="이메일을 입력해주세요"
 *   errorMessage="올바른 이메일을 입력해주세요"
 * />
 * ```
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      theme = 'light',
      status = 'enabled',
      label,
      required = false,
      placeholder = '내용을 입력해 주세요.',
      errorMessage,
      helperText,
      leftIcon,
      rightIcon,
      buttonText,
      onButtonClick,
      multiline = false,
      maxLength,
      currentLength,
      className,
      containerClassName,
      disabled,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState(props.value || '');

    // 실제 상태 계산 (disabled prop이 있으면 disabled 상태)
    const actualStatus = disabled ? 'disabled' : status;

    // 클래스명 생성
    const inputClasses = cn(
      styles.input,
      styles[`input--${variant}`],
      styles[`input--${size}`],
      styles[`input--${theme}`],
      styles[`input--${actualStatus}`],
      {
        [styles['input--focused']]: isFocused,
        [styles['input--with-left-icon']]: !!leftIcon,
        [styles['input--with-right-icon']]: !!rightIcon,
        [styles['input--with-button']]: !!buttonText,
        [styles['input--multiline']]: multiline,
      },
      className
    );

    const containerClasses = cn(
      styles.container,
      styles[`container--${size}`],
      containerClassName
    );

    const labelClasses = cn(
      styles.label,
      styles[`label--${size}`],
      styles[`label--${theme}`],
      {
        [styles['label--required']]: required,
        [styles['label--error']]: actualStatus === 'error',
      }
    );

    const inputWrapperClasses = cn(
      styles.inputWrapper,
      styles[`inputWrapper--${size}`],
      styles[`inputWrapper--${theme}`],
      styles[`inputWrapper--${actualStatus}`],
      {
        [styles['inputWrapper--focused']]: isFocused,
        [styles['inputWrapper--with-button']]: !!buttonText,
      }
    );

    // 이벤트 핸들러
    const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setIsFocused(true);
      props.onFocus?.(e as React.FocusEvent<HTMLInputElement>);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setIsFocused(false);
      props.onBlur?.(e as React.FocusEvent<HTMLInputElement>);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value);
      props.onChange?.(e as React.ChangeEvent<HTMLInputElement>);
    };

    // 글자 수 표시
    const showCounter = maxLength && currentLength !== undefined;
    const counterText = showCounter ? `${currentLength}/${maxLength}` : '';

    return (
      <div className={containerClasses}>
        {/* 라벨 영역 */}
        {label && (
          <div className={styles.labelContainer}>
            <label className={labelClasses}>
              {label}
              {required && <span className={styles.required}>*</span>}
            </label>
          </div>
        )}

        {/* Input 영역 */}
        <div className={inputWrapperClasses}>
          {/* 왼쪽 아이콘 */}
          {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}

          {/* Input 또는 Textarea */}
          {multiline ? (
            <textarea
              ref={ref as React.Ref<HTMLTextAreaElement>}
              className={inputClasses}
              placeholder={placeholder}
              disabled={disabled}
              maxLength={maxLength}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <input
              ref={ref}
              type="text"
              className={inputClasses}
              placeholder={placeholder}
              disabled={disabled}
              maxLength={maxLength}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              {...props}
            />
          )}

          {/* 오른쪽 아이콘 */}
          {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}

          {/* 버튼 */}
          {buttonText && (
            <button
              type="button"
              className={styles.button}
              onClick={onButtonClick}
              disabled={disabled}
            >
              {buttonText}
            </button>
          )}
        </div>

        {/* 글자 수 카운터 */}
        {showCounter && <div className={styles.counter}>{counterText}</div>}

        {/* 에러 메시지 */}
        {errorMessage && actualStatus === 'error' && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}

        {/* 도움말 텍스트 */}
        {helperText && actualStatus !== 'error' && (
          <div className={styles.helperText}>{helperText}</div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;

