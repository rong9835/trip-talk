import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 클래스명을 병합하는 유틸리티 함수
 * clsx와 tailwind-merge를 조합하여 사용
 *
 * @param inputs - 병합할 클래스명들
 * @returns 병합된 클래스명 문자열
 *
 * @example
 * ```tsx
 * cn('base-class', { 'conditional-class': true }, 'another-class')
 * // 결과: 'base-class conditional-class another-class'
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

