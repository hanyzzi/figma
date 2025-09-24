export default function Home() {
  return (
    <main className="min-h-screen p-lg bg-bg-white">
      <div className="max-w-container-md mx-auto">
        {/* 헤더 섹션 */}
        <header className="mb-3xl">
          <div className="flex justify-between items-center mb-md">
            <h1 className="text-h1 text-text-primary">
              디자인 시스템 테스트 (Tailwind)
            </h1>
            <a 
              href="/module-scss" 
              className="px-lg py-md bg-brand-secondary text-text-primary rounded-md hover:opacity-90 transition-opacity text-button-medium"
            >
              Module SCSS 버전 보기
            </a>
          </div>
          <p className="text-body-large text-text-secondary">
            Tailwind CSS에 디자인 토큰이 제대로 적용되었는지 확인하는 페이지입니다.
          </p>
        </header>

        {/* 색상 테스트 */}
        <section className="mb-2xl">
          <h2 className="text-h3 text-text-primary mb-lg">색상 테스트</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
            <div className="p-md bg-brand-primary rounded-lg text-center">
              <div className="text-body-small text-white font-medium">Primary</div>
            </div>
            <div className="p-md bg-brand-secondary rounded-lg text-center">
              <div className="text-body-small text-text-primary font-medium">Secondary</div>
            </div>
            <div className="p-md bg-gray-200 rounded-lg text-center">
              <div className="text-body-small text-text-primary font-medium">Gray 200</div>
            </div>
            <div className="p-md bg-gray-700 rounded-lg text-center">
              <div className="text-body-small text-white font-medium">Gray 700</div>
            </div>
          </div>
        </section>

        {/* 버튼 테스트 */}
        <section className="mb-2xl">
          <h2 className="text-h3 text-text-primary mb-lg">버튼 테스트</h2>
          <div className="flex flex-wrap gap-md">
            <button className="px-lg py-md bg-brand-primary text-white rounded-md hover:bg-brand-primary-dark transition-colors shadow-sm text-button-medium">
              Primary Button
            </button>
            <button className="px-lg py-md bg-button-secondary-bg text-button-secondary-text rounded-md hover:bg-button-secondary-hover transition-colors text-button-medium">
              Secondary Button
            </button>
            <button className="px-lg py-md bg-button-disabled-bg text-button-disabled-text rounded-md cursor-not-allowed text-button-medium">
              Disabled Button
            </button>
          </div>
        </section>

        {/* 카드 테스트 */}
        <section className="mb-2xl">
          <h2 className="text-h3 text-text-primary mb-lg">카드 테스트</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            <div className="p-lg bg-white border border-border-1 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-h5 text-text-primary mb-sm">카드 제목</h3>
              <p className="text-body-medium text-text-secondary mb-md">
                이것은 카드 내용입니다. 디자인 토큰이 제대로 적용되었는지 확인해보세요.
              </p>
              <div className="flex gap-sm">
                <span className="px-sm py-xs bg-brand-primary-light text-brand-primary rounded-sm text-caption-medium">
                  태그 1
                </span>
                <span className="px-sm py-xs bg-gray-100 text-text-secondary rounded-sm text-caption-medium">
                  태그 2
                </span>
              </div>
            </div>
            <div className="p-lg bg-white border border-border-2 rounded-xl shadow-sm">
              <h3 className="text-h5 text-text-primary mb-sm">다른 카드</h3>
              <p className="text-body-medium text-text-secondary mb-md">
                다양한 스타일링이 적용된 두 번째 카드입니다.
              </p>
              <button className="w-full py-sm bg-brand-secondary text-text-primary rounded-md hover:opacity-90 transition-opacity text-button-small">
                액션 버튼
              </button>
            </div>
          </div>
        </section>

        {/* 타이포그래피 테스트 */}
        <section className="mb-2xl">
          <h2 className="text-h3 text-text-primary mb-lg">타이포그래피 테스트</h2>
          <div className="space-y-md">
            <h1 className="text-h1 text-text-primary">Heading 1 - 48px</h1>
            <h2 className="text-h2 text-text-primary">Heading 2 - 36px</h2>
            <h3 className="text-h3 text-text-primary">Heading 3 - 28px</h3>
            <p className="text-body-xl text-text-primary">Body XL - 20px</p>
            <p className="text-body-large text-text-secondary">Body Large - 18px</p>
            <p className="text-body-medium text-text-secondary">Body Medium - 16px</p>
            <p className="text-body-small text-text-tertiary">Body Small - 14px</p>
            <p className="text-caption-large text-text-tertiary">Caption Large - 14px</p>
          </div>
        </section>

        {/* 스페이싱 테스트 */}
        <section className="mb-2xl">
          <h2 className="text-h3 text-text-primary mb-lg">스페이싱 테스트</h2>
          <div className="bg-gray-100 p-lg rounded-lg">
            <div className="bg-brand-primary-light p-xs mb-xs rounded">Padding XS (4px)</div>
            <div className="bg-brand-primary-light p-sm mb-sm rounded">Padding SM (8px)</div>
            <div className="bg-brand-primary-light p-md mb-md rounded">Padding MD (16px)</div>
            <div className="bg-brand-primary-light p-lg mb-lg rounded">Padding LG (24px)</div>
            <div className="bg-brand-primary-light p-xl rounded">Padding XL (32px)</div>
          </div>
        </section>
      </div>
    </main>
  );
}