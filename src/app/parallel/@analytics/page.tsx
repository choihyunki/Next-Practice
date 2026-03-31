export default function AnalyticsPage() {
  return (
    <div className="p-6 border-2 border-blue-400 rounded-xl bg-blue-50 dark:bg-blue-900/20 h-full">
      <h2 className="text-xl font-bold text-blue-600 mb-4">📊 실시간 분석</h2>
      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
          <p className="text-sm text-gray-500">오늘의 방문자</p>
          <p className="text-2xl font-bold text-blue-500">1,240명</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
          <p className="text-sm text-gray-500">페이지 뷰</p>
          <p className="text-2xl font-bold text-purple-500">4,892회</p>
        </div>
      </div>
    </div>
  );
}
