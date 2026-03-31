// src/lib/data.ts

export type Post = {
  slug: string;
  title: string;
  content: string;
};

// [리드미 9월 17일 수업내용 반영]
// 명시된 슬러그: nextjs, routing, ssr-ssg, dynamic-routes
export const posts: Post[] = [
  {
    slug: "nextjs",
    title: "Next.js란 무엇인가?",
    content:
      "Next.js는 React 기반의 프레임워크로, 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 쉽게 구현할 수 있게 도와줍니다.",
  },
  {
    slug: "routing",
    title: "파일 시스템 기반 라우팅",
    content:
      "Next.js는 폴더와 파일 구조를 통해 자동으로 경로를 생성합니다. app/page.tsx는 / 경로가 됩니다.",
  },
  {
    slug: "ssr-ssg",
    title: "SSR과 SSG의 차이",
    content:
      "SSR은 요청 시마다 HTML을 생성하고, SSG는 빌드 시점에 HTML을 미리 생성하여 재사용합니다.",
  },
  {
    slug: "dynamic-routes",
    title: "동적 라우팅 (Dynamic Routes)",
    content:
      "[slug]와 같은 대괄호 문법을 사용하여 하나의 페이지 컴포넌트로 여러 경로를 처리하는 방법입니다.",
  },
];

// 슬러그로 포스트 찾기
export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

// 스트리밍 테스트용 (3초 지연)
export async function getAllPostsWithDelay(): Promise<Post[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return posts;
}

// 병렬 처리 테스트용
export async function getArtist() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return { name: "The Beatles" };
}

export async function getAlbums() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return ["Abbey Road", "Let It Be", "Yellow Submarine"];
}
