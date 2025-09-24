import styles from './page.module.scss';

export default function ScssDemo() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* 헤더 섹션 */}
        <header className={styles.header}>
          <div className={styles.headerFlex}>
            <h1 className={styles.title}>
              디자인 시스템 테스트 (SCSS Module)
            </h1>
            <a href="/" className={styles.navLink}>
              Tailwind 버전 보기
            </a>
          </div>
          <p className={styles.subtitle}>
            SCSS Module에 디자인 토큰이 제대로 적용되었는지 확인하는 페이지입니다.
          </p>
        </header>

        {/* 색상 테스트 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>색상 테스트</h2>
          <div className={styles.colorGrid}>
            <div className={`${styles.colorBox} ${styles.primaryColor}`}>
              <div className={styles.colorLabel}>Primary</div>
            </div>
            <div className={`${styles.colorBox} ${styles.secondaryColor}`}>
              <div className={styles.colorLabel}>Secondary</div>
            </div>
            <div className={`${styles.colorBox} ${styles.gray200}`}>
              <div className={styles.colorLabel}>Gray 200</div>
            </div>
            <div className={`${styles.colorBox} ${styles.gray700}`}>
              <div className={styles.colorLabel}>Gray 700</div>
            </div>
          </div>
        </section>

        {/* 버튼 테스트 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>버튼 테스트</h2>
          <div className={styles.buttonContainer}>
            <button className={`${styles.button} ${styles.primaryButton}`}>
              Primary Button
            </button>
            <button className={`${styles.button} ${styles.secondaryButton}`}>
              Secondary Button
            </button>
            <button className={`${styles.button} ${styles.disabledButton}`} disabled>
              Disabled Button
            </button>
          </div>
        </section>

        {/* 카드 테스트 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>카드 테스트</h2>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>카드 제목</h3>
              <p className={styles.cardContent}>
                이것은 카드 내용입니다. 디자인 토큰이 제대로 적용되었는지 확인해보세요.
              </p>
              <div className={styles.tagContainer}>
                <span className={`${styles.tag} ${styles.primaryTag}`}>
                  태그 1
                </span>
                <span className={`${styles.tag} ${styles.grayTag}`}>
                  태그 2
                </span>
              </div>
            </div>
            <div className={`${styles.card} ${styles.cardVariant}`}>
              <h3 className={styles.cardTitle}>다른 카드</h3>
              <p className={styles.cardContent}>
                다양한 스타일링이 적용된 두 번째 카드입니다.
              </p>
              <button className={styles.cardButton}>
                액션 버튼
              </button>
            </div>
          </div>
        </section>

        {/* 타이포그래피 테스트 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>타이포그래피 테스트</h2>
          <div className={styles.typographyContainer}>
            <h1 className={styles.h1}>Heading 1 - 48px</h1>
            <h2 className={styles.h2}>Heading 2 - 36px</h2>
            <h3 className={styles.h3}>Heading 3 - 28px</h3>
            <p className={styles.bodyXl}>Body XL - 20px</p>
            <p className={styles.bodyLarge}>Body Large - 18px</p>
            <p className={styles.bodyMedium}>Body Medium - 16px</p>
            <p className={styles.bodySmall}>Body Small - 14px</p>
            <p className={styles.captionLarge}>Caption Large - 14px</p>
          </div>
        </section>

        {/* 스페이싱 테스트 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>스페이싱 테스트</h2>
          <div className={styles.spacingContainer}>
            <div className={`${styles.spacingBox} ${styles.paddingXs}`}>Padding XS (4px)</div>
            <div className={`${styles.spacingBox} ${styles.paddingSm}`}>Padding SM (8px)</div>
            <div className={`${styles.spacingBox} ${styles.paddingMd}`}>Padding MD (16px)</div>
            <div className={`${styles.spacingBox} ${styles.paddingLg}`}>Padding LG (24px)</div>
            <div className={`${styles.spacingBox} ${styles.paddingXl}`}>Padding XL (32px)</div>
          </div>
        </section>
      </div>
    </main>
  );
}