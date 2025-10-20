/**
 * Color Token System
 *
 * This file contains all color tokens used throughout the application.
 * Supports both light and dark modes.
 * Source: Figma Foundation Nodes 9089:22363, 9089:25440
 */

// Base color palette - Primitive tokens
export const primitiveColors = {
  // Neutral colors
  white: '#FFFFFF',
  black: '#000000',

  // Gray scale
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
    950: '#030712',
  },

  // Primary colors
  primary: {
    50: '#EEF2FF',
    100: '#E0E7FF',
    200: '#C7D2FE',
    300: '#A5B4FC',
    400: '#818CF8',
    500: '#6366F1',
    600: '#4F46E5',
    700: '#4338CA',
    800: '#3730A3',
    900: '#312E81',
    950: '#1E1B4B',
  },

  // Secondary colors
  secondary: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
    950: '#052E16',
  },

  // Error/Danger colors
  error: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
    950: '#450A0A',
  },

  // Warning colors
  warning: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
    950: '#451A03',
  },

  // Success colors
  success: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
    950: '#052E16',
  },

  // Info colors
  info: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
    950: '#172554',
  },
} as const;

// Semantic color tokens - Light mode
export const lightModeColors = {
  // Background colors
  background: {
    primary: primitiveColors.white,
    secondary: primitiveColors.gray[50],
    tertiary: primitiveColors.gray[100],
    inverse: primitiveColors.gray[900],
    overlay: 'rgba(0, 0, 0, 0.5)',
  },

  // Text colors
  text: {
    primary: primitiveColors.gray[900],
    secondary: primitiveColors.gray[600],
    tertiary: primitiveColors.gray[500],
    disabled: primitiveColors.gray[400],
    inverse: primitiveColors.white,
    link: primitiveColors.primary[600],
    linkHover: primitiveColors.primary[700],
  },

  // Border colors
  border: {
    primary: primitiveColors.gray[200],
    secondary: primitiveColors.gray[300],
    focus: primitiveColors.primary[500],
    error: primitiveColors.error[500],
  },

  // Interactive colors
  interactive: {
    primary: primitiveColors.primary[600],
    primaryHover: primitiveColors.primary[700],
    primaryActive: primitiveColors.primary[800],
    primaryDisabled: primitiveColors.gray[300],

    secondary: primitiveColors.gray[100],
    secondaryHover: primitiveColors.gray[200],
    secondaryActive: primitiveColors.gray[300],

    danger: primitiveColors.error[600],
    dangerHover: primitiveColors.error[700],
    dangerActive: primitiveColors.error[800],
  },

  // Status colors
  status: {
    error: primitiveColors.error[600],
    errorBg: primitiveColors.error[50],
    warning: primitiveColors.warning[600],
    warningBg: primitiveColors.warning[50],
    success: primitiveColors.success[600],
    successBg: primitiveColors.success[50],
    info: primitiveColors.info[600],
    infoBg: primitiveColors.info[50],
  },

  // Surface colors
  surface: {
    primary: primitiveColors.white,
    secondary: primitiveColors.gray[50],
    tertiary: primitiveColors.gray[100],
    elevated: primitiveColors.white,
  },
} as const;

// Semantic color tokens - Dark mode
export const darkModeColors = {
  // Background colors
  background: {
    primary: primitiveColors.gray[950],
    secondary: primitiveColors.gray[900],
    tertiary: primitiveColors.gray[800],
    inverse: primitiveColors.gray[50],
    overlay: 'rgba(0, 0, 0, 0.7)',
  },

  // Text colors
  text: {
    primary: primitiveColors.gray[50],
    secondary: primitiveColors.gray[300],
    tertiary: primitiveColors.gray[400],
    disabled: primitiveColors.gray[600],
    inverse: primitiveColors.gray[900],
    link: primitiveColors.primary[400],
    linkHover: primitiveColors.primary[300],
  },

  // Border colors
  border: {
    primary: primitiveColors.gray[700],
    secondary: primitiveColors.gray[600],
    focus: primitiveColors.primary[500],
    error: primitiveColors.error[500],
  },

  // Interactive colors
  interactive: {
    primary: primitiveColors.primary[500],
    primaryHover: primitiveColors.primary[400],
    primaryActive: primitiveColors.primary[600],
    primaryDisabled: primitiveColors.gray[700],

    secondary: primitiveColors.gray[800],
    secondaryHover: primitiveColors.gray[700],
    secondaryActive: primitiveColors.gray[600],

    danger: primitiveColors.error[500],
    dangerHover: primitiveColors.error[400],
    dangerActive: primitiveColors.error[600],
  },

  // Status colors
  status: {
    error: primitiveColors.error[400],
    errorBg: primitiveColors.error[950],
    warning: primitiveColors.warning[400],
    warningBg: primitiveColors.warning[950],
    success: primitiveColors.success[400],
    successBg: primitiveColors.success[950],
    info: primitiveColors.info[400],
    infoBg: primitiveColors.info[950],
  },

  // Surface colors
  surface: {
    primary: primitiveColors.gray[900],
    secondary: primitiveColors.gray[800],
    tertiary: primitiveColors.gray[700],
    elevated: primitiveColors.gray[850] || primitiveColors.gray[800],
  },
} as const;

// Export unified color system
export const colors = {
  primitive: primitiveColors,
  light: lightModeColors,
  dark: darkModeColors,
} as const;

// Type exports for TypeScript support
export type PrimitiveColors = typeof primitiveColors;
export type LightModeColors = typeof lightModeColors;
export type DarkModeColors = typeof darkModeColors;
export type Colors = typeof colors;

export default colors;
