# 🚀 Next.js 15 Mastery: Core Features Implementation

> **Next.js 15 (App Router)**의 핵심 기능을 심화 학습하고 실습하기 위해 제작된 프로젝트입니다.  
> 스트리밍, 인터리빙, 병렬 라우팅, 그리고 하이브리드 CSS 최적화 전략을 직접 구현하며 현대적인 웹 개발 패러다임을 탐구했습니다.

---

## 🛠️ Tech Stack
* **Framework**: Next.js 15.x (App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS v4, Bootstrap 5.3 (Hybrid Support), CSS Modules
* **State Management**: React Context API (Global Theme System)
* **Optimization**: Next/Image, Next/Script, Next/Font (Google Fonts)

---

## ✨ Key Implementation (핵심 구현 사항)

### 1. Streaming & SSG (Static Site Generation)
* **파일**: `src/app/blog/`
* `loading.tsx`를 활용하여 데이터 페칭 중 유저에게 스켈레톤 UI를 제공하는 **Streaming** 기법을 적용했습니다.
* `generateStaticParams`를 통해 동적 경로를 빌드 타임에 미리 정적 HTML로 생성하여 최적의 로딩 성능을 확보했습니다.

### 2. Interleaving Pattern (서버 & 클라이언트 합성)
* **파일**: `src/app/interleaving/`, `src/components/ClientWrapper.tsx`
* Server Component와 Client Component를 효율적으로 배치하는 **Interleaving** 패턴을 실습했습니다.
* `children` props 전달 방식을 사용하여 클라이언트 컴포넌트 내부에 서버 컴포넌트를 유지함으로써, 브라우저 자바스크립트 번들 크기를 줄이고 서버 전용 로직을 보호했습니다.

### 3. Parallel Routes (병렬 라우팅)
* **파일**: `src/app/parallel/`
* `@analytics`, `@team` 슬롯을 사용하여 하나의 레이아웃 안에서 서로 다른 페이지를 동시에 렌더링하는 **대시보드형 UI**를 구현했습니다.
* 각 슬롯이 독립적인 로딩 상태를 가질 수 있도록 설계하여 복잡한 데이터 구조에서도 쾌적한 UX를 유지합니다.

### 4. Hybrid Theme & CSS Optimization
* **파일**: `src/components/theme-provider.tsx`, `src/app/blog2/`
* **Tailwind CSS v4**와 **Bootstrap 5.3**이 한 프로젝트 내에서 공존하는 하이브리드 환경을 구축했습니다.
* `Context API`를 통해 Tailwind의 `dark` 클래스와 부트스트랩 전용 속성(`data-bs-theme`)을 동시에 제어하는 통합 다크모드 시스템을 구현했습니다.

### 5. Asset & Performance Optimization
* **파일**: `src/app/optimization/`
* **Next/Image**: `priority`, `fill`, `sizes` 속성을 활용해 LCP 최적화 및 레이아웃 시프트(CLS)를 방지했습니다.
* **Next/Script**: 서드파티 스크립트(jQuery 등)의 로딩 시점을 `strategy` 옵션으로 제어하여 메인 스레드 점유를 최소화했습니다.
* **CSS Modules**: 컴포넌트 단위 스타일 격리(`button.module.css`)를 통해 대규모 프로젝트에서의 스타일 충돌 방지 전략을 익혔습니다.

---

## 📂 Project Structure
```text
src/
 ├─app/
 │  ├─blog/          # Streaming & SSG 실습 (LoL Story)
 │  ├─blog2/         # Bootstrap 전용 레이아웃 및 컴포넌트
 │  ├─interleaving/  # 서버/클라이언트 합성 패턴 실습
 │  ├─parallel/      # 병렬 라우팅 대시보드 (@analytics, @team)
 │  ├─optimization/  # 성능 최적화 (Image, Script, CSS Modules)
 │  ├─layout.tsx     # 전역 레이아웃 및 ThemeProvider 적용
 │  └─page.tsx       # 메인 대시보드 허브
 ├─components/       # UI 컴포넌트 (ThemeStatus, ClientWrapper 등)
 ├─lib/              # Mock Data 및 비동기 페칭 로직
 └─globals.css       # Tailwind v4 설정 및 레이어 관리
```

🖥️ How to Run

```

# 1. 의존성 설치
npm install

# 2. 개발 서버 실행
npm run dev

# 3. 브라우저 확인
http://localhost:3000

```
