# NotUseful 🎮

쓸모는 없지만 재미있는 웹 실험 모음집

## 📖 프로젝트 소개

NotUseful은 "쓸모는 없지만 재미있는" 웹 실험 모음집입니다. 사용자는 웹에서 다양한 장난감 같은 기능을 체험해볼 수 있으며, 가벼운 웃음과 소소한 공유를 목표로 합니다.

## 🛠️ 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm
- **Architecture**: Feature-Sliced Design (FSD)

## 🚀 시작하기

### 필수 요구사항

- Node.js v22.11.0 (`.nvmrc` 참조)
- pnpm

### 설치 및 실행

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
├── entities/              # 비즈니스 엔티티
│   └── experiment/        # 실험 관련 엔티티
├── features/              # 비즈니스 기능
├── shared/                # 공유 모듈
│   ├── ui/               # 공통 UI 컴포넌트
│   ├── lib/              # 유틸리티 함수
│   ├── api/              # API 관련
│   └── config/           # 설정
├── widgets/               # 복합 UI 블록
│   ├── header/           # 헤더 위젯
│   ├── footer/           # 푸터 위젯
│   └── experiment-grid/  # 실험 그리드 위젯

```
