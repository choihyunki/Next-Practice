export default function ParallelLayout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 italic text-gray-800 dark:text-gray-100">
        Parallel Routes Dashboard
      </h1>

      {/* 기본 page.tsx 내용 */}
      <div className="mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        {children}
      </div>

      {/* 병렬 슬롯 배치 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>{analytics}</div>
        <div>{team}</div>
      </div>
    </div>
  );
}
