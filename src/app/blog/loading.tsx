export default function Loading() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      {/* 제목 스켈레톤: animate-pulse를 컨테이너에 적용 */}
      <div className="animate-pulse">
        <div className="h-10 bg-gray-300 dark:bg-gray-700 w-1/4 mb-10 rounded-md"></div>

        {/* 리스트 아이템 스켈레톤 */}
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm"
            >
              {/* 내부 줄글 형태의 스켈레톤 추가 */}
              <div className="h-6 bg-gray-300 dark:bg-gray-700 w-3/4 mb-4 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 w-full mb-2 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 w-1/2 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-2">
        {/* 실제 서비스에서는 3초 대기 문구는 제거하는 것이 좋지만, 학습용이라면 유지하세요! */}
        <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm text-gray-500 font-medium animate-bounce">
          📡 데이터를 열심히 불러오고 있습니다...
        </p>
      </div>
    </div>
  );
}
