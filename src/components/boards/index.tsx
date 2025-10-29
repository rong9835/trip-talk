'use client';

import React from 'react';
import styles from './styles.module.css';

const Boards: React.FC = () => {
  const talkData = [
    {
      id: 1,
      title: '제주 살이 1일차 청산별곡이 생각나네요',
      profileName: '홍길동',
      profileImage: 'https://i.pravatar.cc/150?img=1',
      talkImage: 'https://picsum.photos/seed/jeju/400/600',
      goodCount: 24,
      date: '2024.11.11',
    },
    {
      id: 2,
      title: '길 걷고 있었는데 고양이한테 간택 받았어요',
      profileName: '홍길동',
      profileImage: 'https://i.pravatar.cc/150?img=2',
      talkImage: 'https://picsum.photos/seed/cat/400/600',
      goodCount: 24,
      date: '2024.11.11',
    },
    {
      id: 3,
      title: '강릉 여름바다 보기 좋네요 서핑하고 싶어요!',
      profileName: '홍길동',
      profileImage: 'https://i.pravatar.cc/150?img=3',
      talkImage: 'https://picsum.photos/seed/beach/400/600',
      goodCount: 24,
      date: '2024.11.11',
    },
    {
      id: 4,
      title: '누가 양양 핫하다고 했어 나밖에 없는데?',
      profileName: '홍길동',
      profileImage: 'https://i.pravatar.cc/150?img=4',
      talkImage: 'https://picsum.photos/seed/yangyang/400/600',
      goodCount: 24,
      date: '2024.11.11',
    },
  ];

  const boardData = [
    { no: 243, title: '제주 살이 1일차', author: '홍길동', date: '2024.12.16' },
    {
      no: 242,
      title: '강남 살이 100년차',
      author: '홍길동',
      date: '2024.12.16',
    },
    {
      no: 241,
      title: '길 걷고 있었는데 고양이한테 간택 받았어요',
      author: '홍길동',
      date: '2024.12.16',
    },
    {
      no: 240,
      title: '오늘 날씨 너무 좋아서 바다보러 왔어요~',
      author: '홍길동',
      date: '2024.12.16',
    },
    {
      no: 239,
      title: '누가 양양 핫하다고 했어 나밖에 없는데?',
      author: '홍길동',
      date: '2024.12.16',
    },
    {
      no: 238,
      title: '여름에 보드타고 싶은거 저밖에 없나요 🥲',
      author: '홍길동',
      date: '2024.12.16',
    },
    {
      no: 237,
      title: '사무실에서 과자 너무 많이 먹은거 같아요 다이어트하러 여행 가야겠어요',
      author: '홍길동',
      date: '2024.12.16',
    },
    {
      no: 236,
      title: '여기는 기승전 여행이네요 ㅋㅋㅋ',
      author: '홍길동',
      date: '2024.12.16',
    },
    {
      no: 235,
      title: '상여금 들어왔는데 이걸로 다낭갈까 사이판 갈까',
      author: '홍길동',
      date: '2024.12.16',
    },
    {
      no: 234,
      title: '강릉 여름바다 보기 좋네요',
      author: '홍길동',
      date: '2024.12.16',
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
      <div className={styles.boardSection}>
        <h2 className={styles.boardTitle}>트립토크 게시판</h2>
        <div className={styles.search}>
          <div className={styles.searchContainer}>
            <div className={styles.searchInputArea}>
              <div className={styles.datepicker}>
                <div className={styles.dateIcon}>
                  <img src="/icons/calendar.svg" alt="날짜 선택" />
                </div>
                <div className={styles.dateText}>
                  <div className={styles.dateRange}>
                    <span className={styles.dateValue}>YYYY</span>
                    <span className={styles.dateDot}>.</span>
                    <span className={styles.dateValue}>MM</span>
                    <span className={styles.dateDot}>.</span>
                    <span className={styles.dateValue}>DD</span>
                  </div>
                  <span className={styles.dateSeparator}>-</span>
                  <div className={styles.dateRange}>
                    <span className={styles.dateValue}>YYYY</span>
                    <span className={styles.dateDot}>.</span>
                    <span className={styles.dateValue}>MM</span>
                    <span className={styles.dateDot}>.</span>
                    <span className={styles.dateValue}>DD</span>
                  </div>
                </div>
              </div>

              <div className={styles.searchBar}>
                <div className={styles.searchIcon}>
                  <img src="/icons/search.svg" alt="검색" />
                </div>
                <input
                  type="text"
                  placeholder="제목을 검색해 주세요."
                  className={styles.searchInput}
                />
              </div>

              <button className={styles.searchButton}>검색</button>
            </div>

            <button className={styles.registerButton}>트립토크 등록</button>
          </div>
        </div>
      </div>
      <div className={styles.gap2}></div>
      <div className={styles.main}>
        <div className={styles.boardListContainer}>
          <div className={styles.boardHeader}>
            <div className={styles.headerNo}>번호</div>
            <div className={styles.headerTitle}>제목</div>
            <div className={styles.headerAuthor}>작성자</div>
            <div className={styles.headerDate}>날짜</div>
          </div>
          <div className={styles.boardList}>
            {boardData.map((board, index) => (
              <div key={index} className={styles.boardItem}>
                <div className={styles.boardNo}>{board.no}</div>
                <div className={styles.boardTitle}>{board.title}</div>
                <div className={styles.boardAuthor}>{board.author}</div>
                <div className={styles.boardDate}>{board.date}</div>
              </div>
            ))}
          </div>
          <div className={styles.pagination}>
            <div className={styles.paginationIcon}>
              <img src="/icons/chevron-left.svg" alt="이전" />
            </div>
            <div className={styles.pageNumbers}>
              <div className={`${styles.pageNumber} ${styles.pageActive}`}>
                1
              </div>
              <div className={styles.pageNumber}>2</div>
              <div className={styles.pageNumber}>3</div>
              <div className={styles.pageNumber}>4</div>
              <div className={styles.pageNumber}>5</div>
            </div>
            <div className={styles.paginationIcon}>
              <img src="/icons/chevron-right.svg" alt="다음" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gap3}></div>
    </div>
  );
};

export default Boards;
