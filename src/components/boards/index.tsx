'use client';

import React from 'react';
import styles from './styles.module.css';

const Boards: React.FC = () => {
  const talkData = [
    {
      id: 1,
      title: '제주 살이 1일차 청산별곡이 생각나네요',
      profileName: '홍길동',
      profileImage: '/images/profile1.png',
      talkImage: '/images/talk1.png',
      goodCount: 24,
      date: '2024.11.11',
    },
    {
      id: 2,
      title: '길 걷고 있었는데 고양이한테 간택 받았어요',
      profileName: '홍길동',
      profileImage: '/images/profile2.png',
      talkImage: '/images/talk2.png',
      goodCount: 24,
      date: '2024.11.11',
    },
    {
      id: 3,
      title: '강릉 여름바다 보기 좋네요 서핑하고 싶어요!',
      profileName: '홍길동',
      profileImage: '/images/profile3.png',
      talkImage: '/images/talk3.png',
      goodCount: 24,
      date: '2024.11.11',
    },
    {
      id: 4,
      title: '누가 양양 핫하다고 했어 나밖에 없는데?',
      profileName: '홍길동',
      profileImage: '/images/profile4.png',
      talkImage: '/images/talk4.png',
      goodCount: 24,
      date: '2024.11.11',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>오늘 핫한 트립토크</h2>
        <div className={styles.cardArea}>
          {talkData.map((talk) => (
            <div key={talk.id} className={styles.talkCard}>
              <div className={styles.talkImage}>
                <img src={talk.talkImage} alt={talk.title} />
              </div>
              <div className={styles.talkContent}>
                <div className={styles.topArea}>
                  <h3 className={styles.cardTitle}>{talk.title}</h3>
                  <div className={styles.profile}>
                    <div className={styles.profileImage}>
                      <img src={talk.profileImage} alt={talk.profileName} />
                    </div>
                    <span className={styles.profileName}>{talk.profileName}</span>
                  </div>
                </div>
                <div className={styles.bottomArea}>
                  <div className={styles.goodArea}>
                    <div className={styles.goodIcon}>
                      <img src="/icons/good.svg" alt="좋아요" />
                    </div>
                    <span className={styles.goodCount}>{talk.goodCount}</span>
                  </div>
                  <span className={styles.date}>{talk.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.gap1}></div>
      <div className={styles.search}></div>
      <div className={styles.gap2}></div>
      <div className={styles.main}></div>
      <div className={styles.gap3}></div>
    </div>
  );
};

export default Boards;
