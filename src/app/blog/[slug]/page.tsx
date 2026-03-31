import { getPostBySlug, posts } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link"; // [수정] a 태그 대신 Link 사용 (SPA 최적화)
import { Metadata } from "next"; // [추가] SEO를 위한 메타데이터 타입

interface PageProps {
  params: Promise<{ slug: string }>;
}

// [추가] SEO 최적화: 블로그 제목을 브라우저 탭에 표시
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | My Blog`,
    description: post.content.substring(0, 100),
  };
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="p-10 max-w-3xl mx-auto mt-10 border rounded-xl shadow-lg bg-white dark:bg-gray-900">
      <div className="mb-8 pb-4 border-b">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          Blog Post
        </span>
        <h1 className="text-4xl font-bold mt-4 mb-2 text-gray-900 dark:text-white">
          {post.title}
        </h1>
        <p className="font-mono text-sm text-gray-500">
          URL Slug: <span className="text-red-500 font-bold">{slug}</span>
        </p>
      </div>

      {/* whitespace-pre-wrap을 추가하면 본문의 줄바꿈(\n)이 정상적으로 보입니다 */}
      <div className="text-lg leading-relaxed min-h-[150px] text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
        {post.content}
      </div>

      <div className="mt-8 pt-6 border-t flex justify-between items-center">
        {/* [수정] href="/blog" 이동 시 새로고침 방지를 위해 <Link> 사용 */}
        <Link
          href="/blog"
          className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition text-gray-700 dark:text-gray-300"
        >
          ← 목록으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
