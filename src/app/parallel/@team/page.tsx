export default function TeamPage() {
  return (
    <div className="p-6 border-2 border-green-400 rounded-xl bg-green-50 dark:bg-green-900/20 h-full">
      <h2 className="text-xl font-bold text-green-600 mb-4">👥 팀 멤버</h2>
      <ul className="space-y-3">
        {["최현기", "홍길동", "아무개"].map((name) => (
          <li
            key={name}
            className="flex items-center gap-3 bg-white dark:bg-gray-800 p-2 rounded"
          >
            <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center text-xs">
              👤
            </div>
            <span className="font-medium">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
