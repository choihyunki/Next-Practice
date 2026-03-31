"use client";

import { useState } from "react";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // 클라이언트 컴포넌트임을 증명하는 상태(State) 추가
  const [count, setCount] = useState(0);

  return (
    <div className="border-4 border-blue-500 p-8 rounded-2xl bg-blue-50 dark:bg-blue-900/20 shadow-lg">
      <header className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-blue-600 dark:text-blue-400 font-extrabold text-2xl mb-2">
            🟦 Client Component
          </h2>
          <p className="text-sm text-blue-500 dark:text-blue-300 font-medium">
            이 영역은 브라우저에서 하이드레이션(Hydration)됩니다.
          </p>
        </div>

        {/* 상호작용성 테스트 섹션 */}
        <div className="flex flex-col items-end gap-2">
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform active:scale-95 shadow-md font-bold"
          >
            카운트 업: {count}
          </button>
          <button
            onClick={() =>
              alert("클라이언트 컴포넌트의 이벤트 핸들러가 동작합니다!")
            }
            className="text-xs text-blue-600 underline hover:text-blue-800 dark:text-blue-400"
          >
            알림창 띄우기
          </button>
        </div>
      </header>

      {/* 서버 컴포넌트가 삽입될 Slot (빨간색 영역) */}
      <div className="relative p-6 border-4 border-dashed border-red-500 rounded-xl bg-white dark:bg-gray-900 shadow-inner">
        <div className="absolute -top-3 left-4 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
          Server Component Slot (Children)
        </div>

        <div className="mt-2">{children}</div>
      </div>

      <footer className="mt-4 text-[11px] text-blue-400 dark:text-blue-500 italic">
        * 버튼을 눌러도 내부의 Server Component는 다시 렌더링되지 않고 상태를
        유지합니다.
      </footer>
    </div>
  );
}
