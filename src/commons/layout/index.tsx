import React from 'react';
import styles from './styles.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {/* Header area */}
      </header>

      <div className={styles.banner}>
        {/* Banner area */}
      </div>

      <div className={styles.gap}>
        {/* Gap area */}
      </div>

      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}
