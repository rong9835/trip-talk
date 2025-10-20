/**
 * 색상 토큰 시스템
 * 피그마 파운데이션에서 추출한 색상 팔레트
 */

// Gray 색상 팔레트
export const gray = {
  white: '#ffffff',
  50: '#f2f2f2',
  100: '#e4e4e4',
  200: '#d4d3d3',
  300: '#c7c7c7',
  400: '#ababab',
  500: '#919191',
  600: '#777777',
  700: '#5f5f5f',
  800: '#333333',
  900: '#1c1c1c',
  black: '#000000',
} as const;

// Blue 색상 팔레트
export const blue = {
  50: '#eaf1fc',
  100: '#bdd4f7',
  200: '#9dbff3',
  300: '#70a2ee',
  400: '#5490ea',
  500: '#2974e5', // Main 색상
  600: '#256ad0',
  700: '#1d52a3',
  800: '#17407e',
  900: '#113160',
} as const;

// Red 색상 팔레트
export const red = {
  50: '#fef0f0',
  100: '#fcd1d1',
  200: '#fbbaba',
  300: '#f99b9b',
  400: '#f88888',
  500: '#f66a6a',
  600: '#e06060',
  700: '#af4b4b',
  800: '#873a3a',
  900: '#672d2d',
} as const;

// 다크모드 색상 팔레트
export const dark = {
  background: {
    primary: '#0a0a0a',
    secondary: '#1a1a1a',
    tertiary: '#2a2a2a',
  },
  text: {
    primary: '#ffffff',
    secondary: '#e4e4e4',
    tertiary: '#ababab',
    disabled: '#777777',
  },
  border: {
    primary: '#333333',
    secondary: '#5f5f5f',
    focus: '#2974e5',
  },
  surface: {
    primary: '#1a1a1a',
    secondary: '#2a2a2a',
    tertiary: '#3a3a3a',
  },
} as const;

// 라이트모드 색상 팔레트
export const light = {
  background: {
    primary: '#ffffff',
    secondary: '#f2f2f2',
    tertiary: '#e4e4e4',
  },
  text: {
    primary: '#000000',
    secondary: '#333333',
    tertiary: '#777777',
    disabled: '#ababab',
  },
  border: {
    primary: '#e4e4e4',
    secondary: '#c7c7c7',
    focus: '#2974e5',
  },
  surface: {
    primary: '#ffffff',
    secondary: '#f2f2f2',
    tertiary: '#e4e4e4',
  },
} as const;

// 시맨틱 색상
export const semantic = {
  primary: {
    main: blue[500],
    light: blue[400],
    dark: blue[600],
    contrast: gray.white,
  },
  secondary: {
    main: gray[600],
    light: gray[500],
    dark: gray[700],
    contrast: gray.white,
  },
  error: {
    main: red[500],
    light: red[400],
    dark: red[600],
    contrast: gray.white,
  },
  warning: {
    main: '#f59e0b', // 추가 색상
    light: '#fbbf24',
    dark: '#d97706',
    contrast: gray.white,
  },
  success: {
    main: '#10b981', // 추가 색상
    light: '#34d399',
    dark: '#059669',
    contrast: gray.white,
  },
  info: {
    main: blue[500],
    light: blue[400],
    dark: blue[600],
    contrast: gray.white,
  },
} as const;

// 상태별 색상
export const status = {
  active: blue[500],
  inactive: gray[400],
  disabled: gray[300],
  hover: blue[400],
  focus: blue[500],
  selected: blue[100],
  error: red[500],
  warning: '#f59e0b',
  success: '#10b981',
} as const;

// 모든 색상을 하나의 객체로 통합
export const colors = {
  gray,
  blue,
  red,
  dark,
  light,
  semantic,
  status,
} as const;

// 타입 정의
export type ColorToken = typeof colors;
export type GrayColor = keyof typeof gray;
export type BlueColor = keyof typeof blue;
export type RedColor = keyof typeof red;
export type SemanticColor = keyof typeof semantic;
export type StatusColor = keyof typeof status;

// 기본 내보내기
export default colors;
