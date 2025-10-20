/**
 * Typography 토큰 정의
 * 피그마 파운데이션에서 추출한 typography 값들을 토큰화
 */

// 폰트 패밀리 토큰
export const FONT_FAMILIES = {
  // 한글 폰트 (기본)
  korean: {
    primary: 'Pretendard',
    variable: 'Pretendard Variable',
  },
  // 영문 폰트 (추후 확장 가능)
  english: {
    primary: 'Pretendard',
    variable: 'Pretendard Variable',
  },
} as const;

// 폰트 웨이트 토큰
export const FONT_WEIGHTS = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
} as const;

// 폰트 사이즈 토큰 (px 단위)
export const FONT_SIZES = {
  xs: 11,
  sm: 12,
  base: 13,
  md: 14,
  lg: 16,
  xl: 18,
  '2xl': 20,
  '3xl': 24,
  '4xl': 28,
} as const;

// 라인 하이트 토큰 (px 단위)
export const LINE_HEIGHTS = {
  xs: 12,
  sm: 20,
  base: 20,
  md: 20,
  lg: 24,
  xl: 24,
  '2xl': 24,
  '3xl': 24,
  '4xl': 32,
  '5xl': 36,
} as const;

// 문단 간격 토큰 (px 단위)
export const PARAGRAPH_SPACING = {
  none: 0,
} as const;

// 문단 들여쓰기 토큰 (px 단위)
export const PARAGRAPH_INDENT = {
  none: 0,
} as const;

// Typography 스타일 조합 타입
export type TypographyVariant = 
  | 'display'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'heading6'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline';

// 디바이스 타입
export type DeviceType = 'mobile' | 'desktop';

// 언어 타입
export type LanguageType = 'korean' | 'english';

// Typography 스타일 정의
export interface TypographyStyle {
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  letterSpacing?: number;
}

// Typography 토큰 맵
export const TYPOGRAPHY_TOKENS: Record<
  TypographyVariant,
  Record<DeviceType, Record<LanguageType, TypographyStyle>>
> = {
  // Display 스타일
  display: {
    mobile: {
      korean: {
        fontFamily: FONT_FAMILIES.korean.primary,
        fontSize: FONT_SIZES['4xl'],
        fontWeight: FONT_WEIGHTS.bold,
        lineHeight: LINE_HEIGHTS['5xl'],
      },
      english: {
        fontFamily: FONT_FAMILIES.english.primary,
        fontSize: FONT_SIZES['4xl'],
        fontWeight: FONT_WEIGHTS.bold,
        lineHeight: LINE_HEIGHTS['5xl'],
      },
    },
    desktop: {
      korean: {
        fontFamily: FONT_FAMILIES.korean.primary,
        fontSize: FONT_SIZES['4xl'],
        fontWeight: FONT_WEIGHTS.bold,
        lineHeight: LINE_HEIGHTS['5xl'],
      },
      english: {
        fontFamily: FONT_FAMILIES.english.primary,
        fontSize: FONT_SIZES['4xl'],
        fontWeight: FONT_WEIGHTS.bold,
        lineHeight: LINE_HEIGHTS['5xl'],
      },
    },
  },

  // Heading 1
  heading1: {
    mobile: {
      korean: {
        fontFamily: FONT_FAMILIES.korean.primary,
        fontSize: FONT_SIZES['3xl'],
        fontWeight: FONT_WEIGHTS.bold,
        lineHeight: LINE_HEIGHTS['4xl'],
      },
      english: {
        fontFamily: FONT_FAMILIES.english.primary,
        fontSize: FONT_SIZES['3xl'],
        fontWeight: FONT_WEIGHTS.bold,
        lineHeight: LINE_HEIGHTS['4xl'],
      },
    },
    desktop: {
      korean: {
        fontFamily: FONT_FAMILIES.korean.primary,
        fontSize: FONT_SIZES['3xl'],
        fontWeight: FONT_WEIGHTS.bold,
        lineHeight: LINE_HEIGHTS['4xl'],
      },
      english: {
        fontFamily: FONT_FAMILIES.english.primary,
        fontSize: FONT_SIZES['3xl'],
        fontWeight: FONT_WEIGHTS.bold,
        lineHeight: LINE_HEIGHTS['4xl'],
      },
    },
  },

  // Heading 2
  heading2: {
    mobile: {
      korean: {
        fontFamily: FONT_FAMILIES.korean.primary,
        fontSize: FONT_SIZES['2xl'],
        fontWeight: FONT_WEIGHTS.semiBold,
        lineHeight: LINE_HEIGHTS['3xl'],
      },
      english: {
        fontFamily: FONT_FAMILIES.english.primary,
        fontSize: FONT_SIZES['2xl'],
        fontWeight: FONT_WEIGHTS.semiBold,
        lineHeight: LINE_HEIGHTS['3xl'],
      },
    },
    desktop: {
      korean: {
        fontFamily: FONT_FAMILIES.korean.primary,
        fontSize: FONT_SIZES['2xl'],
        fontWeight: FONT_WEIGHTS.semiBold,
        lineHeight: LINE_HEIGHTS['3xl'],
      },
      english: {
        fontFamily: FONT_FAMILIES.english.primary,
        fontSize: FONT_SIZES['2xl'],
        fontWeight: FONT_WEIGHTS.semiBold,
        lineHeight: LINE_HEIGHTS['3xl'],
      },
    },
  },

  // Heading 3
  heading3: {
    mobile: {
      korean: {
        fontFamily: FONT_FAMILIES.korean.primary,
        fontSize: FONT_SIZES.xl,
        fontWeight: FONT_WEIGHTS.semiBold,
        lineHeight: LINE_HEIGHTS['2xl'],
      },
      english: {
        fontFamily: FONT_FAMILIES.english.primary,
        fontSize: FONT_SIZES.xl,
        fontWeight: FONT_WEIGHTS.semiBold,
        lineHeight: LINE_HEIGHTS['2xl'],
      },
    },
    desktop: {
      korean: {
        fontFamily: FONT_FAMILIES.korean.primary,
        fontSize: FONT_SIZES.xl,
        fontWeight: FONT_WEIGHTS.semiBold,
        lineHeight: LINE_HEIGHTS['2xl'],
      },
      english: {
        fontFamily: FONT_FAMILIES.english.primary,
        fontSize: FONT_SIZES.xl,
        fontWeight: FONT_WEIGHTS.semiBold,
        lineHeight: LINE_HEIGHTS['2xl'],
      },
    },
  },

  // Heading 4
  heading4: {
    mobile: {
      korean: {
        fontFamily: FONT_FAMILIES.korean.primary,
        fontSize: FONT_SIZES.lg,
        fontWeight: FONT_WEIGHTS.medium,
        lineHeight: LINE_HEIGHTS.xl,
      },
      english: {
        fontFamily: FONT_FAMILIES.english.primary,
        fontSize: FONT_SIZES.lg,
        fontWeight: FONT_WEIGHTS.medium,
        lineHeight: LINE_HEIGHTS.xl,
      },
    },
    desktop: {
      korean: {
        fontFamily: FONT_FAMILIES.korean.primary,
        fontSize: FONT_SIZES.lg,
        fontWeight: FONT_WEIGHTS.medium,
        lineHeight: LINE_HEIGHTS.xl,
      },
      english: {
        fontFamily: FONT_FAMILIES.english.primary,
        fontSize: FONT_SIZES.lg,
        fontWeight: FONT_WEIGHTS.medium,
        lineHeight: LINE_HEIGHTS.xl,
      },
    },
  },

  // Heading 5
  heading5: {
    mobile: {
      korean: {
        fontFamily: FONT_FAMILIES.korean.primary,
        fontSize: FONT_SIZES.md,
        fontWeight: FONT_WEIGHTS.medium,
        lineHeight: LINE_HEIGHTS.lg,
      },
      english: {
        fontFamily: FONT_FAMILIES.english.primary,
        fontSize: FONT_SIZES.md,
        fontWeight: FONT_WEIGHTS.medium,
        lineHeight: LINE_HEIGHTS.lg,
      },
    },
    desktop: {
      korean: {
        fontFamily: FONT_FAMILIES.korean.primary,
        fontSize: FONT_SIZES.md,
        fontWeight: FONT_WEIGHTS.medium,
        lineHeight: LINE_HEIGHTS.lg,
      },
      english: {
        fontFamily: FONT_FAMILIES.english.primary,
        fontSize: FONT_SIZES.md,
        fontWeight: FONT_WEIGHTS.medium,
        lineHeight: LINE_HEIGHTS.lg,
      },
    },
  },

  // Heading 6
  heading6: {
    mobile: {
      korean: {
        fontFamily: FONT_FAMILIES.korean.primary,
        fontSize: FONT_SIZES.sm,
        fontWeight: FONT_WEIGHTS.medium,
        lineHeight: LINE_HEIGHTS.md,
      },
      english: {
        fontFamily: FONT_FAMILIES.english.primary,
        fontSize: FONT_SIZES.sm,
        fontWeight: FONT_WEIGHTS.medium,
        lineHeight: LINE_HEIGHTS.md,
      },
    },
    desktop: {
      korean: {
        fontFamily: FONT_FAMILIES.korean.primary,
        fontSize: FONT_SIZES.sm,
        fontWeight: FONT_WEIGHTS.medium,
        lineHeight: LINE_HEIGHTS.md,
      },
      english: {
        fontFamily: FONT_FAMILIES.english.primary,
        fontSize: FONT_SIZES.sm,
        fontWeight: FONT_WEIGHTS.medium,
        lineHeight: LINE_HEIGHTS.md,
      },
    },
  },

  // Body 1
  body1: {
    mobile: {
      korean: {
        fontFamily: FONT_FAMILIES.korean.primary,
        fontSize: FONT_SIZES.base,
        fontWeight: FONT_WEIGHTS.regular,
        lineHeight: LINE_HEIGHTS.base,
      },
      english: {
        fontFamily: FONT_FAMILIES.english.primary,
        fontSize: FONT_SIZES.base,
        fontWeight: FONT_WEIGHTS.regular,
        lineHeight: LINE_HEIGHTS.base,
      },
    },
    desktop: {
      korean: {
        fontFamily: FONT_FAMILIES.korean.primary,
        fontSize: FONT_SIZES.base,
        fontWeight: FONT_WEIGHTS.regular,
        lineHeight: LINE_HEIGHTS.base,
      },
      english: {
        fontFamily: FONT_FAMILIES.english.primary,
        fontSize: FONT_SIZES.base,
        fontWeight: FONT_WEIGHTS.regular,
        lineHeight: LINE_HEIGHTS.base,
      },
    },
  },

  // Body 2
  body2: {
    mobile: {
      korean: {
        fontFamily: FONT_FAMILIES.korean.primary,
        fontSize: FONT_SIZES.sm,
        fontWeight: FONT_WEIGHTS.regular,
        lineHeight: LINE_HEIGHTS.sm,
      },
      english: {
        fontFamily: FONT_FAMILIES.english.primary,
        fontSize: FONT_SIZES.sm,
        fontWeight: FONT_WEIGHTS.regular,
        lineHeight: LINE_HEIGHTS.sm,
      },
    },
    desktop: {
      korean: {
        fontFamily: FONT_FAMILIES.korean.primary,
        fontSize: FONT_SIZES.sm,
        fontWeight: FONT_WEIGHTS.regular,
        lineHeight: LINE_HEIGHTS.sm,
      },
      english: {
        fontFamily: FONT_FAMILIES.english.primary,
        fontSize: FONT_SIZES.sm,
        fontWeight: FONT_WEIGHTS.regular,
        lineHeight: LINE_HEIGHTS.sm,
      },
    },
  },

  // Caption
  caption: {
    mobile: {
      korean: {
        fontFamily: FONT_FAMILIES.korean.primary,
        fontSize: FONT_SIZES.xs,
        fontWeight: FONT_WEIGHTS.regular,
        lineHeight: LINE_HEIGHTS.xs,
      },
      english: {
        fontFamily: FONT_FAMILIES.english.primary,
        fontSize: FONT_SIZES.xs,
        fontWeight: FONT_WEIGHTS.regular,
        lineHeight: LINE_HEIGHTS.xs,
      },
    },
    desktop: {
      korean: {
        fontFamily: FONT_FAMILIES.korean.primary,
        fontSize: FONT_SIZES.xs,
        fontWeight: FONT_WEIGHTS.regular,
        lineHeight: LINE_HEIGHTS.xs,
      },
      english: {
        fontFamily: FONT_FAMILIES.english.primary,
        fontSize: FONT_SIZES.xs,
        fontWeight: FONT_WEIGHTS.regular,
        lineHeight: LINE_HEIGHTS.xs,
      },
    },
  },

  // Overline
  overline: {
    mobile: {
      korean: {
        fontFamily: FONT_FAMILIES.korean.primary,
        fontSize: FONT_SIZES.xs,
        fontWeight: FONT_WEIGHTS.medium,
        lineHeight: LINE_HEIGHTS.xs,
        letterSpacing: 0.5,
      },
      english: {
        fontFamily: FONT_FAMILIES.english.primary,
        fontSize: FONT_SIZES.xs,
        fontWeight: FONT_WEIGHTS.medium,
        lineHeight: LINE_HEIGHTS.xs,
        letterSpacing: 0.5,
      },
    },
    desktop: {
      korean: {
        fontFamily: FONT_FAMILIES.korean.primary,
        fontSize: FONT_SIZES.xs,
        fontWeight: FONT_WEIGHTS.medium,
        lineHeight: LINE_HEIGHTS.xs,
        letterSpacing: 0.5,
      },
      english: {
        fontFamily: FONT_FAMILIES.english.primary,
        fontSize: FONT_SIZES.xs,
        fontWeight: FONT_WEIGHTS.medium,
        lineHeight: LINE_HEIGHTS.xs,
        letterSpacing: 0.5,
      },
    },
  },
} as const;

// Typography 헬퍼 함수들
export const getTypographyStyle = (
  variant: TypographyVariant,
  device: DeviceType = 'desktop',
  language: LanguageType = 'korean'
): TypographyStyle => {
  return TYPOGRAPHY_TOKENS[variant][device][language];
};

// CSS 문자열로 변환하는 헬퍼 함수
export const getTypographyCSS = (
  variant: TypographyVariant,
  device: DeviceType = 'desktop',
  language: LanguageType = 'korean'
): string => {
  const style = getTypographyStyle(variant, device, language);
  return `
    font-family: ${style.fontFamily};
    font-size: ${style.fontSize}px;
    font-weight: ${style.fontWeight};
    line-height: ${style.lineHeight}px;
    ${style.letterSpacing ? `letter-spacing: ${style.letterSpacing}px;` : ''}
  `.trim();
};

// CSS 변수명 생성 헬퍼 함수
export const getTypographyCSSVar = (
  variant: TypographyVariant,
  device: DeviceType = 'desktop',
  language: LanguageType = 'korean'
): string => {
  return `--typography-${variant}-${device}-${language}`;
};

// 모든 Typography CSS 변수 생성
export const generateTypographyCSSVars = (): Record<string, string> => {
  const vars: Record<string, string> = {};
  
  Object.keys(TYPOGRAPHY_TOKENS).forEach((variant) => {
    Object.keys(TYPOGRAPHY_TOKENS[variant as TypographyVariant]).forEach((device) => {
      Object.keys(TYPOGRAPHY_TOKENS[variant as TypographyVariant][device as DeviceType]).forEach((language) => {
        const style = TYPOGRAPHY_TOKENS[variant as TypographyVariant][device as DeviceType][language as LanguageType];
        const varName = getTypographyCSSVar(
          variant as TypographyVariant,
          device as DeviceType,
          language as LanguageType
        );
        
        vars[varName] = getTypographyCSS(
          variant as TypographyVariant,
          device as DeviceType,
          language as LanguageType
        );
      });
    });
  });
  
  return vars;
};

// 기본 내보내기
export default {
  FONT_FAMILIES,
  FONT_WEIGHTS,
  FONT_SIZES,
  LINE_HEIGHTS,
  PARAGRAPH_SPACING,
  PARAGRAPH_INDENT,
  TYPOGRAPHY_TOKENS,
  getTypographyStyle,
  getTypographyCSS,
  getTypographyCSSVar,
  generateTypographyCSSVars,
};
