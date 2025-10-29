'use client';

import React from 'react';
import styles from './styles.module.css';

const BoardsDetail: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Title */}
      <h1 className={styles.title}>
        살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고 쳥산(靑山)애 살어리랏다얄리얄리 얄랑셩 얄라리 얄라
      </h1>

      {/* Meta Information */}
      <div className={styles.metaContainer}>
        <div className={styles.metaTopRow}>
          {/* Profile */}
          <div className={styles.profile}>
            <div className={styles.profileImage}>
              <img src="https://i.pravatar.cc/150?img=1" alt="홍길동" />
            </div>
            <span className={styles.profileName}>홍길동</span>
          </div>

          {/* Date and Icons */}
          <div className={styles.metaRight}>
            <span className={styles.date}>2024.11.11</span>
          </div>
        </div>

        {/* Separator Line */}
        <div className={styles.separatorLine}></div>

        {/* Icons Row */}
        <div className={styles.iconsRow}>
          <div className={styles.iconButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.9 12C3.9 10.29 5.29 8.9 7 8.9H11V7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H11V15.1H7C5.29 15.1 3.9 13.71 3.9 12ZM8 13H16V11H8V13ZM17 7H13V8.9H17C18.71 8.9 20.1 10.29 20.1 12C20.1 13.71 18.71 15.1 17 15.1H13V17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7Z" fill="currentColor"/>
            </svg>
          </div>
          <div className={styles.iconButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className={styles.mainImage}>
        <img src="https://picsum.photos/seed/detail/400/531" alt="게시글 이미지" />
      </div>

      {/* Body Content */}
      <div className={styles.bodyContent}>
        <p>
          살겠노라 살겠노라. 청산에 살겠노라.
          <br />
          머루랑 다래를 먹고 청산에 살겠노라.
          <br />
          얄리얄리 얄랑셩 얄라리 얄라
          <br />
          <br />
          우는구나 우는구나 새야. 자고 일어나 우는구나 새야.
          <br />
          너보다 시름 많은 나도 자고 일어나 우노라.
          <br />
          얄리얄리 얄라셩 얄라리 얄라
          <br />
          <br />
          갈던 밭(사래) 갈던 밭 보았느냐. 물 아래(근처) 갈던 밭 보았느냐
          <br />
          이끼 묻은 쟁기를 가지고 물 아래 갈던 밭 보았느냐.
          <br />
          얄리얄리 얄라셩 얄라리 얄라
          <br />
          <br />
          이럭저럭 하여 낮일랑 지내 왔건만
          <br />
          올 이도 갈 이도 없는 밤일랑 또 어찌 할 것인가.
          <br />
          얄리얄리 얄라셩 얄라리 얄라
          <br />
          <br />
          어디다 던지는 돌인가 누구를 맞히려던 돌인가.
          <br />
          미워할 이도 사랑할 이도 없이 맞아서 우노라.
          <br />
          얄리얄리 얄라셩 얄라리 얄라
          <br />
          <br />
          살겠노라 살겠노라. 바다에 살겠노라.
          <br />
          나문재, 굴, 조개를 먹고 바다에 살겠노라.
          <br />
          얄리얄리 얄라셩 얄라리 얄라
          <br />
          <br />
          가다가 가다가 듣노라. 에정지(미상) 가다가 듣노라.
          <br />
          사슴(탈 쓴 광대)이 솟대에 올라서 해금을 켜는 것을 듣노라.
          <br />
          얄리얄리 얄라셩 얄라리 얄라
          <br />
          <br />
          가다 보니 배불룩한 술독에 독한 술을 빚는구나.
          <br />
          조롱박꽃 모양 누룩이 매워 (나를) 붙잡으니 내 어찌 하리이까.[1]
          <br />
          얄리얄리 얄라셩 얄라리 얄라
        </p>
      </div>

      {/* Media/Video Section */}
      <div className={styles.mediaSection}>
        <div className={styles.videoContainer}>
          <div className={styles.playButton}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3.33334L16.6667 10L5 16.6667V3.33334Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Like/Dislike Section */}
      <div className={styles.reactionsSection}>
        <div className={styles.reactionItem}>
          <div className={styles.reactionIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 3H6C5.17 3 4.46 3.5 4.16 4.22L1.14 11.27C1.05 11.5 1 11.74 1 12V14C1 15.1 1.9 16 3 16H9.31L8.36 20.57L8.33 20.89C8.33 21.3 8.5 21.68 8.77 21.95L9.83 23L16.41 16.41C16.78 16.05 17 15.55 17 15V5C17 3.9 16.1 3 15 3ZM19 3V15H23V3H19Z" fill="currentColor"/>
            </svg>
          </div>
          <span className={styles.reactionCount}>24</span>
        </div>
        <div className={styles.reactionItem}>
          <div className={styles.reactionIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 21H18C18.83 21 19.54 20.5 19.84 19.78L22.86 12.73C22.95 12.5 23 12.26 23 12V10C23 8.9 22.1 8 21 8H14.69L15.64 3.43L15.67 3.11C15.67 2.7 15.5 2.32 15.23 2.05L14.17 1L7.59 7.59C7.22 7.95 7 8.45 7 9V19C7 20.1 7.9 21 9 21ZM5 9H1V21H5V9Z" fill="currentColor"/>
            </svg>
          </div>
          <span className={styles.reactionCountActive}>12</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className={styles.actionButtons}>
        <button className={styles.actionButton}>
          <span className={styles.buttonLabel}>목록으로</span>
        </button>
        <button className={styles.actionButton}>
          <span className={styles.buttonLabel}>수정하기</span>
        </button>
      </div>

      {/* Bottom Separator */}
      <div className={styles.bottomSeparator}></div>

      {/* Comments Section */}
      <div className={styles.commentsSection}>
        {/* Comments Header */}
        <div className={styles.commentsHeader}>
          <div className={styles.commentsTitle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM18 14H6V12H18V14ZM18 11H6V9H18V11ZM18 8H6V6H18V8Z" fill="currentColor"/>
            </svg>
            <span>댓글</span>
          </div>
        </div>

        {/* Star Rating */}
        <div className={styles.starRating}>
          {[...Array(5)].map((_, index) => (
            <svg key={index} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#FFD700"/>
            </svg>
          ))}
        </div>

        {/* Comment Input Area */}
        <div className={styles.commentInputArea}>
          <div className={styles.commentInput}>
            <textarea
              className={styles.commentTextarea}
              placeholder="댓글을 입력해 주세요."
              maxLength={100}
            />
            <div className={styles.commentCounter}>0/100</div>
          </div>
          <button className={styles.commentSubmitButton}>
            <span className={styles.commentSubmitLabel}>댓글 등록</span>
          </button>
        </div>

        {/* Comment Item */}
        <div className={styles.commentItem}>
          <div className={styles.commentItemHeader}>
            <div className={styles.commentProfile}>
              <div className={styles.commentProfileImage}>
                <img src="https://i.pravatar.cc/150?img=1" alt="홍길동" />
              </div>
              <span className={styles.commentProfileName}>홍길동</span>
            </div>
            <div className={styles.commentStars}>
              {[...Array(5)].map((_, index) => (
                <svg key={index} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#FFD700"/>
                </svg>
              ))}
            </div>
            <div className={styles.commentActions}>
              <button className={styles.commentActionButton}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 14.375V17.5H5.625L14.8417 8.28333L11.7167 5.15833L2.5 14.375ZM17.2583 5.86667C17.5833 5.54167 17.5833 5.01667 17.2583 4.69167L15.3083 2.74167C14.9833 2.41667 14.4583 2.41667 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667Z" fill="currentColor"/>
                </svg>
              </button>
              <button className={styles.commentActionButton}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.8333 5.34166L14.6583 4.16666L9.99999 8.82499L5.34166 4.16666L4.16666 5.34166L8.82499 9.99999L4.16666 14.6583L5.34166 15.8333L9.99999 11.175L14.6583 15.8333L15.8333 14.6583L11.175 9.99999L15.8333 5.34166Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.commentContent}>
            살겠노라 살겠노라. 청산에 살겠노라.
            <br />
            머루랑 다래를 먹고 청산에 살겠노라.
            <br />
            얄리얄리 얄랑셩 얄라리 얄라
          </div>
          <div className={styles.commentDate}>
            <span>2024.11.11</span>
          </div>
        </div>

        {/* Comment Separator */}
        <div className={styles.commentSeparator}></div>

        {/* Second Comment Item */}
        <div className={styles.commentItem}>
          <div className={styles.commentItemHeader}>
            <div className={styles.commentProfile}>
              <div className={styles.commentProfileImage}>
                <img src="https://i.pravatar.cc/150?img=5" alt="애슐리" />
              </div>
              <span className={styles.commentProfileName}>애슐리</span>
            </div>
            <div className={styles.commentStars}>
              {[...Array(5)].map((_, index) => (
                <svg key={index} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#FFD700"/>
                </svg>
              ))}
            </div>
          </div>
          <div className={styles.commentContent}>
            살겠노라 살겠노라. 청산에 살겠노라.
            <br />
            머루랑 다래를 먹고 청산에 살겠노라.
            <br />
            얄리얄리 얄랑셩 얄라리 얄라
          </div>
          <div className={styles.commentDate}>
            <span>2024.11.11</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardsDetail;
