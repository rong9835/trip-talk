/**
 * URL 라우팅 및 페이지 메타데이터 관리
 *
 * 이 파일은 애플리케이션의 모든 URL 경로와 각 페이지의 메타데이터를 정의합니다.
 * - 접근 권한 설정
 * - 페이지별 레이아웃 구성 설정
 * - 페이지 설명 설정
 */

import { AccessLevel, LayoutConfig } from './enum';

// ===========================
// 타입 정의
// ===========================

/**
 * 페이지 메타데이터 타입
 */
export interface PageMetadata {
  path: string;
  access: AccessLevel;
  layout: LayoutConfig;
  description?: string;
}

// ===========================
// URL 경로 상수
// ===========================

/**
 * 정적 URL 경로
 */
export const URL_PATHS = {
  // 인증 관련
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
  },

  // 게시판 관련
  BOARDS: {
    LIST: '/boards',
    NEW: '/board/new',
  },

  // 숙소 관련
  STAYS: {
    LIST: '/stays',
    NEW: '/stays/new',
  },

  // 마이페이지
  MYPAGE: '/mypage',
} as const;

/**
 * 동적 URL 경로 생성 함수
 */
export const DYNAMIC_PATHS = {
  /**
   * 게시판 상세 페이지 경로 생성
   * @param id - 게시판 ID
   * @returns /board/[id] 형식 경로
   */
  BOARD_DETAIL: (id: string | number) => `/board/${id}`,

  /**
   * 숙소 상세 페이지 경로 생성
   * @param id - 숙소 ID
   * @returns /stays/[id] 형식 경로
   */
  STAY_DETAIL: (id: string | number) => `/stays/${id}`,
} as const;

// ===========================
// 레이아웃 설정 프리셋
// ===========================

/**
 * 레이아웃 설정 프리셋
 */
const LAYOUT_PRESETS: Record<string, LayoutConfig> = {
  /**
   * 인증 페이지 레이아웃 (모든 요소 숨김)
   */
  AUTH: {
    header: {
      visible: false,
      logo: false,
      darkModeToggle: false,
    },
    banner: false,
    footer: false,
  },

  /**
   * 메인 페이지 레이아웃 (모든 요소 표시)
   */
  MAIN: {
    header: {
      visible: true,
      logo: true,
      darkModeToggle: false,
    },
    banner: true,
    footer: true,
  },

  /**
   * 상세/작성 페이지 레이아웃 (배너 숨김)
   */
  DETAIL: {
    header: {
      visible: true,
      logo: true,
      darkModeToggle: false,
    },
    banner: false,
    footer: true,
  },
};

// ===========================
// 페이지 메타데이터 정의
// ===========================

/**
 * 모든 페이지의 메타데이터를 정의한 객체
 */
export const PAGE_METADATA: Record<string, PageMetadata> = {
  // 1) 로그인
  [URL_PATHS.AUTH.LOGIN]: {
    path: URL_PATHS.AUTH.LOGIN,
    access: AccessLevel.PUBLIC,
    layout: LAYOUT_PRESETS.AUTH,
    description: '로그인 페이지',
  },

  // 2) 회원 가입
  [URL_PATHS.AUTH.SIGNUP]: {
    path: URL_PATHS.AUTH.SIGNUP,
    access: AccessLevel.PUBLIC,
    layout: LAYOUT_PRESETS.AUTH,
    description: '회원 가입 페이지',
  },

  // 3) 자유게시판 게시글 목록
  [URL_PATHS.BOARDS.LIST]: {
    path: URL_PATHS.BOARDS.LIST,
    access: AccessLevel.PUBLIC,
    layout: LAYOUT_PRESETS.MAIN,
    description: '자유게시판 게시글 목록',
  },

  // 4) 자유게시판 게시글 상세 (동적 경로 패턴)
  '/board/[id]': {
    path: '/board/[id]',
    access: AccessLevel.MEMBER_ONLY,
    layout: LAYOUT_PRESETS.DETAIL,
    description: '자유게시판 게시글 상세',
  },

  // 5) 자유게시판 게시글 작성
  [URL_PATHS.BOARDS.NEW]: {
    path: URL_PATHS.BOARDS.NEW,
    access: AccessLevel.MEMBER_ONLY,
    layout: LAYOUT_PRESETS.DETAIL,
    description: '자유게시판 게시글 작성',
  },

  // 6) 숙소 리스팅 메인페이지
  [URL_PATHS.STAYS.LIST]: {
    path: URL_PATHS.STAYS.LIST,
    access: AccessLevel.PUBLIC,
    layout: LAYOUT_PRESETS.MAIN,
    description: '숙소 리스팅 메인페이지',
  },

  // 7) 숙소 리스팅 상세페이지 (동적 경로 패턴)
  '/stays/[id]': {
    path: '/stays/[id]',
    access: AccessLevel.PUBLIC,
    layout: LAYOUT_PRESETS.DETAIL,
    description: '숙소 리스팅 상세페이지',
  },

  // 8) 숙소 등록 작성페이지
  [URL_PATHS.STAYS.NEW]: {
    path: URL_PATHS.STAYS.NEW,
    access: AccessLevel.PUBLIC,
    layout: LAYOUT_PRESETS.DETAIL,
    description: '숙소 등록 작성페이지',
  },

  // 9) 마이페이지
  [URL_PATHS.MYPAGE]: {
    path: URL_PATHS.MYPAGE,
    access: AccessLevel.OWNER_ONLY,
    layout: LAYOUT_PRESETS.DETAIL,
    description: '마이페이지',
  },
};

// ===========================
// 유틸리티 함수
// ===========================

/**
 * 주어진 경로의 메타데이터를 반환합니다.
 * 동적 경로의 경우 패턴 매칭을 수행합니다.
 *
 * @param path - 현재 경로
 * @returns 페이지 메타데이터 또는 undefined
 */
export const getPageMetadata = (path: string): PageMetadata | undefined => {
  // 정적 경로인지 먼저 확인
  if (PAGE_METADATA[path]) {
    return PAGE_METADATA[path];
  }

  // 동적 경로 패턴 매칭
  // /board/123 -> /board/[id]
  if (path.startsWith('/board/') && path !== '/board/new') {
    return PAGE_METADATA['/board/[id]'];
  }

  // /stays/456 -> /stays/[id]
  if (path.startsWith('/stays/') && path !== '/stays/new') {
    return PAGE_METADATA['/stays/[id]'];
  }

  return undefined;
};

/**
 * 주어진 인증 상태와 권한이 페이지 접근 가능 여부를 확인합니다.
 *
 * @param path - 확인할 경로
 * @param isAuthenticated - 로그인 인증 여부
 * @param isOwner - 소유자 여부 (마이페이지 접근 등)
 * @returns 접근 가능 여부
 */
export const canAccessPage = (
  path: string,
  isAuthenticated: boolean,
  isOwner: boolean = false
): boolean => {
  const metadata = getPageMetadata(path);

  if (!metadata) {
    return false;
  }

  switch (metadata.access) {
    case AccessLevel.PUBLIC:
      return true;
    case AccessLevel.MEMBER_ONLY:
      return isAuthenticated;
    case AccessLevel.OWNER_ONLY:
      return isAuthenticated && isOwner;
    default:
      return false;
  }
};

/**
 * 페이지의 레이아웃 설정을 반환합니다.
 *
 * @param path - 현재 경로
 * @returns 레이아웃 설정 또는 기본 설정
 */
export const getLayoutVisibility = (path: string): LayoutConfig => {
  const metadata = getPageMetadata(path);
  return metadata?.layout || LAYOUT_PRESETS.MAIN;
};

/**
 * 모든 URL 경로를 배열로 반환합니다. (페이지별 생성 등에 사용)
 *
 * @returns 모든 정적 URL 경로 배열
 */
export const getAllStaticPaths = (): string[] => {
  return [
    URL_PATHS.AUTH.LOGIN,
    URL_PATHS.AUTH.SIGNUP,
    URL_PATHS.BOARDS.LIST,
    URL_PATHS.BOARDS.NEW,
    URL_PATHS.STAYS.LIST,
    URL_PATHS.STAYS.NEW,
    URL_PATHS.MYPAGE,
  ];
};

// ===========================
// 타입 내보내기
// ===========================

/**
 * URL_PATHS의 타입
 */
export type UrlPath = typeof URL_PATHS;

/**
 * 정적 경로 타입
 */
export type StaticPath =
  | typeof URL_PATHS.AUTH.LOGIN
  | typeof URL_PATHS.AUTH.SIGNUP
  | typeof URL_PATHS.BOARDS.LIST
  | typeof URL_PATHS.BOARDS.NEW
  | typeof URL_PATHS.STAYS.LIST
  | typeof URL_PATHS.STAYS.NEW
  | typeof URL_PATHS.MYPAGE;
