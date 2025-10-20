'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

type ModalContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  setContent: (content: React.ReactNode) => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function useModal(): ModalContextValue {
  const ctx = useContext(ModalContext);
  if (ctx == null) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return ctx;
}

type ModalProviderProps = {
  children: React.ReactNode;
};

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);
  const [mounted, setMounted] = useState(false);
  const portalRef = useRef<Element | null>(null);

  useEffect(() => {
    setMounted(true);
    const existing = document.getElementById('modal-root');
    if (existing) {
      portalRef.current = existing;
      return;
    }
    const el = document.createElement('div');
    el.id = 'modal-root';
    document.body.appendChild(el);
    portalRef.current = el;
    return () => {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    };
  }, []);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  const value = useMemo<ModalContextValue>(
    () => ({ isOpen, open, close, toggle, setContent }),
    [isOpen, open, close, toggle]
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      {mounted &&
        portalRef.current &&
        isOpen &&
        createPortal(
          <div className="fixed inset-0 z-[1000] flex items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50" onClick={close} />
            {/* Modal Panel: 핵심요구사항에 따라 max-wd-md, w-full 제거 */}
            <div className="relative z-[1001] rounded-md bg-white p-4 shadow-lg dark:bg-neutral-900">
              {content}
            </div>
          </div>,
          portalRef.current
        )}
    </ModalContext.Provider>
  );
}
