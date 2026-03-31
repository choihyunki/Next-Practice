import Link from "next/link";
import { getAllPostsWithDelay } from "@/lib/data";
import { Metadata } from "next";

// [추가] 페이지 메타데이터 설정
export const metadata: Metadata = {
  title: "블로그 목록 | My LoL Story",
  description: "리그 오브 레전드 챔피언들의 숨겨진 이야기를 확인해보세요.",
};

export default async function BlogPage() {
  const posts = await getAllPostsWithDelay();

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          블로그 목록
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Streaming과 SSG가 적용된 최적화된 리스트입니다.
        </p>
      </header>

      <ul className="grid gap-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-gray-800/50 transition-all shadow-sm group"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <span className="text-xs font-medium text-blue-500 border border-blue-500 px-2 py-1 rounded">
                  Read More
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                {post.content}
              </p>

              <div className="mt-4 flex items-center text-sm text-blue-600 dark:text-blue-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                자세히 보기 <span className="ml-1">→</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {posts.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          게시글이 아직 없습니다.
        </div>
      )}
    </div>
  );
}
