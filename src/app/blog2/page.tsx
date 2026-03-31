export default function Blog2Page() {
  return (
    <main className="py-4">
      {/* 상단 헤더 섹션 */}
      <section className="mb-5 text-center">
        <h1 className="display-4 fw-bold mb-3">Blog2 Page (Bootstrap Test)</h1>
        <p className="lead text-muted">
          이 페이지는 Tailwind가 아닌 <strong>Bootstrap 5.3</strong>의 유틸리티
          클래스와 컴포넌트로 스타일링 되었습니다.
        </p>
        <hr className="my-4" />
      </section>

      {/* 알림창 예시 (Alert) */}
      <div
        className="alert alert-info d-flex align-items-center mb-4"
        role="alert"
      >
        <span className="me-2">💡</span>
        <div>
          Next.js App Router 내에서 특정 레이아웃에만 부트스트랩을 적용한
          사례입니다.
        </div>
      </div>

      {/* 버튼 섹션 */}
      <section className="mb-5">
        <h3 className="h5 mb-4 border-start border-4 border-primary ps-3">
          Button Variants
        </h3>
        <div className="d-flex flex-wrap gap-2">
          <button type="button" className="btn btn-primary">
            Primary
          </button>
          <button type="button" className="btn btn-secondary">
            Secondary
          </button>
          <button type="button" className="btn btn-success">
            Success
          </button>
          <button type="button" className="btn btn-danger">
            Danger
          </button>
          <button type="button" className="btn btn-warning">
            Warning
          </button>
          <button type="button" className="btn btn-info text-white">
            Info
          </button>
          <button type="button" className="btn btn-light border">
            Light
          </button>
          <button type="button" className="btn btn-dark">
            Dark
          </button>
          <button type="button" className="btn btn-link">
            Link
          </button>
        </div>
      </section>

      {/* 카드 섹션 (추가 예시) */}
      <section className="row g-4">
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold text-primary">
                Next.js + Bootstrap
              </h5>
              <p className="card-text">
                전역 CSS 충돌만 주의한다면, 기존에 익숙한 부트스트랩
                라이브러리를 Next.js 프로젝트에서도 충분히 활용할 수 있습니다.
              </p>
              <a href="#" className="btn btn-outline-primary btn-sm">
                더 알아보기
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-warning">
            <div className="card-body">
              <h5 className="card-title fw-bold text-warning">주의사항</h5>
              <p className="card-text">
                부트스트랩의 JS 기능(모달, 드롭다운 등)을 사용하려면 Client
                Component에서 <code>useEffect</code>를 통한 초기화가 필요합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
