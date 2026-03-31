import Link from "next/link";

export default function Home() {
  const menus = [
    {
      title: "기본 블로그 (Streaming)",
      desc: "loading.tsx와 SSG(Static Site Generation) 실습",
      href: "/blog",
      icon: "📝",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      text: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "부트스트랩 블로그",
      desc: "외부 CSS 프레임워크 격리 적용 실습",
      href: "/blog2",
      icon: "🅱️",
      bg: "bg-purple-50 dark:bg-purple-900/20",
      text: "text-purple-600 dark:text-purple-400",
    },
    {
      title: "인터리빙 패턴",
      desc: "서버/클라이언트 컴포넌트 합성 구조 확인",
      href: "/interleaving",
      icon: "🔄",
      bg: "bg-red-50 dark:bg-red-900/20",
      text: "text-red-600 dark:text-red-400",
    },
    {
      title: "병렬 라우팅 (Parallel)",
      desc: "@슬롯을 이용한 독립적 대시보드 구성",
      href: "/parallel",
      icon: "🔀",
      bg: "bg-green-50 dark:bg-green-900/20",
      text: "text-green-600 dark:text-green-400",
    },
    {
      title: "성능 최적화",
      desc: "Image, Script, CSS Modules 최적화 실습",
      href: "/optimization",
      icon: "⚡",
      bg: "bg-amber-50 dark:bg-amber-900/20",
      text: "text-amber-600 dark:text-amber-400",
    },
  ];

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center py-16 px-6 bg-slate-50/50 dark:bg-transparent">
      {/* 히어로 섹션 */}
      <div className="text-center mb-20 space-y-6">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white">
          Next.js 15{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Mastery
          </span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
          리드미 요구사항을 완벽하게 구현한 실습 프로젝트입니다.
          <br className="hidden md:block" /> 기능을 확인하려면 카드를
          선택하세요.
        </p>
      </div>

      {/* 카드 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {menus.map((menu) => (
          <Link
            key={menu.href}
            href={menu.href}
            className="group relative p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-500"
          >
            {/* 아이콘 배경 - 조금 더 크게 */}
            <div
              className={`w-16 h-16 rounded-3xl ${menu.bg} flex items-center justify-center text-3xl mb-8 group-hover:rotate-6 transition-transform duration-300`}
            >
              {menu.icon}
            </div>

            {/* 제목 - 폰트 크기 및 굵기 상향 */}
            <h2
              className={`text-2xl font-extrabold mb-4 ${menu.text} tracking-tight`}
            >
              {menu.title}
            </h2>

            {/* 설명 - 가독성 향상 */}
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6 font-medium">
              {menu.desc}
            </p>

            <div
              className={`text-sm font-bold ${menu.text} flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0`}
            >
              자세히 보기 <span className="text-lg">→</span>
            </div>

            {/* 카드 배경 장식 (호버 시 살짝 비침) */}
            <div
              className={`absolute inset-0 rounded-[2.5rem] ${menu.bg} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
