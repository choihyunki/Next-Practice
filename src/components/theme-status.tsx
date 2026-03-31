"use client";

import { useContext } from "react";
import { ThemeContext } from "./theme-provider";

export default function ThemeStatus() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative px-4 py-2 rounded-full font-medium transition-all duration-300
        flex items-center gap-2 group shadow-sm
        ${
          theme === "dark"
            ? "bg-slate-800 text-yellow-400 border border-slate-700 hover:bg-slate-700"
            : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
        }
      `}
      aria-label="Toggle Dark Mode"
    >
      {/* 테마에 따른 아이콘 애니메이션 효과 */}
      <span className="relative flex h-5 w-5 items-center justify-center overflow-hidden">
        {theme === "dark" ? (
          <span className="animate-in zoom-in duration-300">🌙</span>
        ) : (
          <span className="animate-in zoom-in duration-300">☀️</span>
        )}
      </span>

      <span className="text-sm">
        {theme === "dark" ? "다크 모드" : "라이트 모드"}
      </span>

      {/* 호버 시 나타나는 미세한 불빛 효과 */}
      <span className="absolute inset-0 rounded-full bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
}
