import ClientWrapper from "@/components/ClientWrapper";

// [서버 컴포넌트] 데이터베이스나 API 호출을 시뮬레이션합니다.
async function ServerContent() {
  // 실제 DB 조회를 가정하여 0.1초 지연
  await new Promise((r) => setTimeout(r, 100));

  return (
    <div className="p-6 border-2 border-dashed border-red-500 rounded-lg bg-red-50 dark:bg-red-900/20">
      <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">
        🔴 Server Component
      </h3>
      <div className="space-y-2 text-gray-800 dark:text-gray-200">
        <p>
          ✅ <b>성공:</b> 저는 서버에서 렌더링된 HTML입니다.
        </p>
        <p className="text-sm opacity-80">
          브라우저의 자바스크립트 번들에 포함되지 않아 용량이 가볍습니다.
        </p>
      </div>
    </div>
  );
}

export default function InterleavingPage() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Interleaving Pattern</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          "서버 컴포넌트 안에 클라이언트 컴포넌트 안에 서버 컴포넌트"
        </p>
      </header>

      <section className="space-y-8">
        <div className="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-md border border-yellow-200 dark:border-yellow-800">
          <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200 text-center">
            💡 <b>작동 원리:</b> ClientWrapper는 children이 무엇인지 모른 채로
            그저 구멍(Slot)만 뚫어놓고, 서버가 그 구멍에 렌더링된 결과를
            끼워넣습니다.
          </p>
        </div>

        {/* ClientWrapper (클라이언트 컴포넌트)가 
          ServerContent (서버 컴포넌트)를 자식으로 품고 있습니다. 
        */}
        <ClientWrapper>
          <ServerContent />
        </ClientWrapper>
      </section>
    </div>
  );
}
