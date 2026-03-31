export default function ParallelMainPage() {
  return (
    <p className="text-gray-600 dark:text-gray-300">
      이 페이지는 <code>layout.tsx</code>에서 세 개의 컴포넌트(children,
      analytics, team)가 동시에 렌더링되고 있는 모습입니다. 각 슬롯은 독립적으로
      에러 처리나 로딩 처리가 가능합니다.
    </p>
  );
}
