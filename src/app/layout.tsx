import type { Metadata, Viewport } from "next"; // Viewport 추가
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import ThemeStatus from "@/components/theme-status";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // [추가] 폰트 로딩 성능 최적화
});

export const metadata: Metadata = {
  title: {
    template: "%s | Next.js Exam", // 하위 페이지 제목 자동 조합
    default: "Next.js 시험 완벽 대비",
  },
  description: "리드미의 모든 기능을 구현한 프로젝트입니다.",
};

// [추가] 모바일 대응을 위한 viewport 설정
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={inter.className} suppressHydrationWarning>
      {/* suppressHydrationWarning: 테마 변경 시 발생할 수 있는 hydration 매칭 에러 방지 */}
      <body className="antialiased min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
        <ThemeProvider>
          {/* 네비게이션 바 */}
          <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
              <nav className="flex gap-8 items-center">
                <Link
                  href="/"
                  className="text-xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                >
                  Next.Exam
                </Link>
                <div className="hidden md:flex gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
                  <Link href="/blog" className="hover:text-blue-600 transition">
                    Blog
                  </Link>
                  <Link
                    href="/blog2"
                    className="hover:text-blue-600 transition"
                  >
                    Bootstrap
                  </Link>
                  <Link
                    href="/interleaving"
                    className="hover:text-blue-600 transition"
                  >
                    Interleaving
                  </Link>
                  <Link
                    href="/parallel"
                    className="hover:text-blue-600 transition"
                  >
                    Parallel
                  </Link>
                  <Link
                    href="/optimization"
                    className="hover:text-blue-600 transition text-blue-600"
                  >
                    Optimization
                  </Link>
                </div>
              </nav>
              <ThemeStatus />
            </div>
          </header>

          {/* 메인 콘텐츠 영역 */}
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </main>

          {/* 푸터 영역 */}
          <footer className="p-8 border-t text-center text-gray-500 dark:text-gray-400 text-xs space-y-2">
            <p className="font-medium">
              © 2026 Next.js Exam Preparation Project
            </p>
            <p>Built with Next.js 15 & Tailwind CSS</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
