"use client";

import { createContext, useEffect, useState, useMemo } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // 초기 상태를 설정할 때 로컬 스토리지 확인 (에러 방지를 위해 기본값 "light")
  const [theme, setTheme] = useState<Theme>("light");
  const [isMounted, setIsMounted] = useState(false);

  // 1. 초기 로드 시 로컬 스토리지에서 테마 불러오기
  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      // 사용자의 OS 설정이 다크모드인 경우 대응
      setTheme("dark");
    }
    setIsMounted(true);
  }, []);

  // 2. 테마가 바뀔 때마다 HTML 속성 변경 및 로컬 스토리지 저장
  useEffect(() => {
    if (!isMounted) return;

    const root = document.documentElement;

    // Tailwind용 클래스 제어 (dark 클래스 기반일 경우)
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // 커스텀 데이터 속성 및 부트스트랩 5.3 대응
    root.dataset.theme = theme;
    root.setAttribute("data-bs-theme", theme);

    // 테마 설정 저장
    localStorage.setItem("app-theme", theme);
  }, [theme, isMounted]);

  const toggleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  // 불필요한 리렌더링 방지를 위해 가치(Value) 메모이제이션
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  // Hydration Mismatch 방지 (클라이언트에서 완전히 준비된 후 렌더링)
  if (!isMounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
