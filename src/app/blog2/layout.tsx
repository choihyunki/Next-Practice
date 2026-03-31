// [리드미 실습] 외부 스타일시트(Bootstrap) 적용
// 주의: 이 import는 해당 레이아웃을 사용하는 모든 하위 페이지에 영향을 줍니다.
import "bootstrap/dist/css/bootstrap.min.css";

export default function Blog2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="m-4 border border-warning p-4 rounded-3 shadow-sm bg-light">
      <header className="mb-4 pb-3 border-bottom">
        <h2 className="text-primary fw-bold">
          <span className="badge bg-primary me-2">Beta</span>
          여기는 Blog2 (Bootstrap) Layout 입니다
        </h2>
        <p className="text-muted">
          이 영역 내부에서는 부트스트랩 클래스를 사용할 수 있습니다.
        </p>
      </header>

      {/* 부트스트랩의 container 클래스를 활용한 본문 영역 */}
      <main className="container-fluid bg-white p-4 rounded border">
        {children}
      </main>

      <footer className="mt-4 pt-3 text-end text-secondary border-top">
        <small>© 2026 LoL Story Blog2 Section</small>
      </footer>
    </section>
  );
}
