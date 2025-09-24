# Design Token System Project

피그마 디자인 토큰을 기반으로 한 체계적인 디자인 시스템 구축 프로젝트입니다.

## 🛠️ 기술 스택

### 프론트엔드 프레임워크
- **Next.js** 15.5.4 (App Router)
- **React** 19.1.0
- **TypeScript** 5.x

### 스타일링
- **Tailwind CSS** 3.4.17
- **SCSS** 1.93.2 (CSS Modules)
- **PostCSS** 8.5.6

### 디자인 토큰
- **Style Dictionary** 5.0.4
- **@tokens-studio/sd-transforms** 2.0.1

### 문서화 & 개발도구
- **Storybook** 9.1.8
- **ESLint** 9.x
- **Nodemon** 3.1.10

## 📁 프로젝트 구조

```
design-system-project/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Tailwind 데모 페이지
│   │   ├── scss-demo/
│   │   │   ├── page.tsx          # SCSS Module 데모 페이지
│   │   │   └── page.module.scss  # SCSS Module 스타일
│   │   ├── globals.css           # 전역 스타일 (토큰 import)
│   │   └── layout.tsx            # 레이아웃
│   └── stories/                  # Storybook 스토리
├── styles/
│   └── tokens/                   # 빌드된 토큰 파일
│       ├── tokens.css            # CSS 커스텀 프로퍼티
│       └── _variables.scss       # SCSS 변수
├── tokens/
│   ├── figma/                    # 피그마 토큰 JSON 파일
│   ├── build/                    # 임시 빌드 파일
│   └── config/                   # Style Dictionary 설정
├── scripts/
│   └── build-tokens.js           # 토큰 빌드 스크립트
├── .storybook/                   # Storybook 설정
├── tailwind.config.js            # Tailwind 설정 (토큰 연동)
└── postcss.config.mjs            # PostCSS 설정
```

## 🚀 시작하기

### 1. 의존성 설치
```bash
npm install
```

### 2. 디자인 토큰 빌드
```bash
npm run build-tokens
```

### 3. 개발 서버 실행
```bash
npm run dev
```

### 4. Storybook 실행 (선택사항)
```bash
npm run storybook
```

## 📋 사용 가능한 스크립트

```json
{
  "dev": "next dev",                    # 개발 서버 실행
  "build": "next build",                # 프로덕션 빌드
  "build-tokens": "토큰 빌드",           # 디자인 토큰 컴파일
  "watch-tokens": "토큰 감시 모드",       # 토큰 파일 변경 감지
  "build-dev": "토큰 빌드 + 개발 서버",   # 토큰 빌드 후 개발 서버 실행
  "storybook": "Storybook 개발 서버",    # 컴포넌트 문서화 도구
  "build-storybook": "Storybook 빌드"   # Storybook 정적 빌드
}
```

## 🎨 디자인 토큰 시스템

### 지원하는 토큰 카테고리
- **Colors**: 브랜드 컬러, 텍스트 컬러, 그레이스케일, 테두리 컬러, 버튼 컬러, 배경 컬러
- **Typography**: 헤딩(H1-H6), 바디 텍스트, 캡션, 버튼 텍스트, 라벨, 오버라인
- **Spacing**: 기본 스페이싱, 인셋, 스택, 갭, 레이아웃 컨테이너
- **Border Radius**: XS ~ 2XL, Full
- **Shadows**: XS ~ XL
- **Border Width**: Thin, Medium, Thick
- **Opacity**: 5% ~ 100%

### 토큰 사용 방법

#### Tailwind CSS 방식
```jsx
// 색상
<div className="bg-brand-primary text-white" />

// 타이포그래피
<h1 className="text-h1 text-text-primary" />

// 스페이싱
<div className="p-lg m-xl" />

// 그림자 & 둥글기
<div className="shadow-md rounded-lg" />
```

#### SCSS Module 방식
```scss
.component {
  background-color: $color-brand-primary;
  color: $color-text-white;
  font: $typography-heading-h1;
  padding: $inset-lg;
  border-radius: $border-radius-lg;
  box-shadow: $shadow-md;
}
```

## 🏗️ 디자인 토큰 시스템 구축 과정

### 1. 디렉토리 구조 생성
```bash
New-Item -ItemType Directory -Path "tokens\figma" -Force
New-Item -ItemType Directory -Path "tokens\build" -Force
New-Item -ItemType Directory -Path "tokens\config" -Force
New-Item -ItemType Directory -Path "styles\tokens" -Force
New-Item -ItemType Directory -Path "components\design-system" -Force
New-Item -ItemType Directory -Path "scripts" -Force
```

### 2. 필수 패키지 설치
```bash
npm install @tokens-studio/sd-transforms style-dictionary sass
npm install -D @types/node nodemon
```

### 3. Style Dictionary 설정 파일 생성
```bash
New-Item -ItemType File -Path "tokens\config\style-dictionary.config.js" -Force
```

### 4. 빌드 스크립트 생성
```bash
New-Item -ItemType File -Path "scripts\build-tokens.js" -Force
```

### 5. 빌드 테스트
```bash
npm run build-tokens
```

## 📚 Storybook + 디자인 토큰 연동

### 1. Storybook 설치
```bash
npx storybook@latest init
```

### 2. Storybook 애드온 설치
```bash
npm install -D @storybook/addon-docs @storybook/addon-controls @storybook/addon-design-tokens
```

### 3. Storybook에서 확인 가능한 내용
- 디자인 토큰 팔레트 (색상, 타이포그래피, 스페이싱)
- 컴포넌트 라이브러리
- 인터랙티브 속성 변경
- 다양한 상태별 컴포넌트 미리보기

## 🌐 데모 페이지

- **Tailwind 데모**: `http://localhost:3000/` 
  - Tailwind CSS 클래스로 구현된 디자인 시스템 데모
- **SCSS Module 데모**: `http://localhost:3000/module-scss`
  - SCSS Module로 구현된 동일한 디자인의 데모
- **Storybook**: `http://localhost:6006`
  - 컴포넌트 문서화 및 디자인 토큰 팔레트

## 🔄 워크플로

1. **토큰 수정**: `tokens/figma/*.json` 파일 수정
2. **빌드**: `npm run build-tokens` 실행
3. **확인**: 개발 서버 또는 Storybook에서 변경사항 확인
4. **배포**: 변경사항이 자동으로 Tailwind와 SCSS에 반영됨

## 🎯 프로젝트 특징

- **토큰 기반 일관성**: 모든 스타일이 중앙 집중식 토큰에서 관리됨
- **다중 구현 방식**: Tailwind CSS와 SCSS Module 모두 지원
- **자동화된 빌드**: 토큰 변경 시 자동으로 CSS/SCSS 변수 생성
- **개발자 친화적**: Hot reload, 감시 모드, Storybook 통합
- **디자이너 협업**: 피그마 토큰 직접 활용, Storybook 시각적 확인

## 📝 추가 문서
- [Style Dictionary 공식 문서](https://amzn.github.io/style-dictionary/)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Storybook 문서](https://storybook.js.org/docs)