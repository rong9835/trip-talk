'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import styles from './styles.module.css';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.leftArea}>
            <div className={styles.logoArea}>
              <img src="/icons/logo.svg" alt="TripTalk" className={styles.logo} />
            </div>
            <nav className={styles.tapArea}>
              <button className={styles.tapItemActive}>
                <span className={styles.tapTitle}>트립토크</span>
              </button>
              <button className={styles.tapItem}>
                <span className={styles.tapTitle}>숙박권 구매</span>
              </button>
              <button className={styles.tapItem}>
                <span className={styles.tapTitle}>마이 페이지</span>
              </button>
            </nav>
          </div>
          <div className={styles.rightArea}>
            <button className={styles.loginButton}>
              <span className={styles.buttonLabel}>로그인</span>
            </button>
          </div>
        </div>
      </header>

      <div className={styles.banner}>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className={styles.swiperContainer}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <img src="/images/banner1.png" alt="배너 이미지 1" className={styles.bannerImage} />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src="/images/banner2.png" alt="배너 이미지 2" className={styles.bannerImage} />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src="/images/banner3.png" alt="배너 이미지 3" className={styles.bannerImage} />
          </SwiperSlide>
        </Swiper>
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
