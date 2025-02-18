# 리액트 개발환경 세팅 방법  
  
### Node.js & npm 설치 
  
  📌 **Node.js 설치 방법**  
  - 공식 사이트에서 다운로드: https://nodejs.org/  
  - LTS(Long-Term Support) 버전 설치  
  - 터미널에 다음 명령어를 실행해 설치 확인  

  ```bash

    node -v  # Node.js 버전 확인  
    npm -v   # npm (패키지 관리자) 버전 확인  

  ```  

---

### React 프로젝트 생성  

📌 **Next.js 기반 프로젝트 생성**  

```bash

  npx create-next-app@latest my-project --typescript

```   

- **npx:** npm 패키지를 실행하는 명령어  
- **create-next-app@latest:** 최신 Next.js 프로젝트 생성  
- **my-project:** 프로젝트 폴더 이름   
- **--typescript:** TypeScript를 사용하도록 설정  

```bash

  cd my-project   # 프로젝트 폴더로 이동
  npm run dev     # 개발 서버 실행 (http://localhost:3000)

```  

📌 **Vite 기반 프로젝트 생성**  

```bash

  npm create vite@latest my-project --template react-ts

```   

- **npm create vite@latest:** 최신 Vite 프로젝트 생성  
- **my-project:** 프로젝트 폴더 이름  
- **--template react-ts:** React + TypeScript 템플릿 사용  

```bash

  cd my-project   # 프로젝트 폴더로 이동
  npm install     # 프로젝트에 필요한 패키지 설치
  npm run dev     # 개발 서버 실행 (http://localhost:5173)

```  

---

### 프로젝트 구조 이해  
- 리액트 프로젝트 생성시 기본적으로 만들어지는 폴더 구조  

```csharp  

  my-project/
  ├── public/           # 정적 파일 (이미지, 폰트 등)
  ├── src/              # 소스 코드
  │   ├── components/   # 재사용 가능한 컴포넌트
  │   ├── pages/        # Next.js에서 페이지 라우팅 (Next.js 사용 시)
  │   ├── hooks/        # 커스텀 훅 모음
  │   ├── store/        # Zustand, Redux 상태 관리
  │   ├── styles/       # CSS, Tailwind 등 스타일 관련 파일
  │   ├── App.tsx       # 리액트 루트 컴포넌트
  │   ├── main.tsx      # 진입 파일 (Vite 기준)
  │   ├── index.tsx     # 진입 파일 (CRA 기준)
  ├── .gitignore        # Git에 포함되지 않을 파일 목록
  ├── package.json      # 프로젝트의 의존성 및 스크립트
  ├── tsconfig.json     # TypeScript 설정 파일
  └── vite.config.ts    # Vite 설정 파일 (Vite 사용 시)

```    

---

### 필수 라이브러리 설치  

📌 **상태 관리 라이브러리**  

- Zustand (가볍고 사용하기 쉬운 상태 관리)  
```bash
  npm install zustand
```  

- React Query(서버 상태 관리)  
```bash
  npm install @tanstack/react-query
```

📌 **스타일링**  

- TailwindCSS (유틸리티 기반 스타일링)
```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
```  
tailwind.config.js에서 설정 추가

```js
  module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
  };
```   

- styled-components (CSS-in-JS)  
```bash
  npm install styled-components
  npm install -D @types/styled-components 
```  

- 아이콘 라이브러리  
```bash
  npm install lucide-react  # 가벼운 React 아이콘 라이브러리  
```  

- 환경 변수 설정  
**.env.local 파일을 생성하고 환경 변수를 설정**  
```bash
  NEXT_PUBLIC_API_URL=https://api.example.com
```  

**✔ 환경변수는 process.env.NEXT_PUBLIC_API_URL로 접근 가능**  

---

### 프로젝트 실행  

📌 **실행**  
```bash
  npm run dev
  # http://localhost:3000 (Next.js)
  # http://localhost:5173 (Vite)
```    






 