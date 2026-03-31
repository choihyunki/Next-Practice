"use client";

import Image from "next/image";
import Script from "next/script";
import styles from "@/components/button.module.css";

export default function OptimizationPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* 헤더 섹션 */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Performance <span className="text-indigo-600">Optimization</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Next.js가 제공하는 최적화 기능을 시각적으로 확인해보세요.
          </p>
        </div>

        {/* 1. CSS Modules 섹션 */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg text-2xl">
                🎨
              </span>
              <h2 className="text-2xl font-bold dark:text-white">
                CSS Modules
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              컴포넌트 단위로 스타일을 격리하여 클래스명 충돌을 방지합니다. 오직
              이 버튼만을 위한 전용 스타일시트가 로드되었습니다.
            </p>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 flex justify-center">
              <button className={styles.examBtn}>CSS Module 최적화 버튼</button>
            </div>
          </div>
        </section>

        {/* 2. Image Optimization 섹션 */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-10">
              <span className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg text-2xl">
                🖼️
              </span>
              <h2 className="text-2xl font-bold dark:text-white">
                Image Optimization
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 로컬 이미지 */}
              <div className="space-y-4">
                <div className="h-48 relative bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center p-8 overflow-hidden group">
                  <Image
                    src="/next.svg"
                    alt="Next.js"
                    width={200}
                    height={40}
                    priority
                    className="dark:invert transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="px-2">
                  <h4 className="font-bold text-slate-800 dark:text-slate-200">
                    Local Asset
                  </h4>
                  <p className="text-sm text-slate-500 italic">
                    `priority`를 활용한 LCP 단축
                  </p>
                </div>
              </div>

              {/* 원격 이미지 */}
              <div className="space-y-4">
                <div className="h-48 relative rounded-2xl overflow-hidden shadow-inner group">
                  <Image
                    src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000"
                    alt="Abstract"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="px-2">
                  <h4 className="font-bold text-slate-800 dark:text-slate-200">
                    Remote Pattern
                  </h4>
                  <p className="text-sm text-slate-500 italic">
                    `fill`과 `object-cover`로 반응형 구현
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 스크립트 정보 */}
        <div className="text-center py-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-xs font-medium text-slate-500 animate-pulse">
            <span className="w-2 h-2 bg-emerald-500 rounded-full" />
            Third-party Script: jQuery 로드 완료
          </div>
        </div>
      </div>

      <Script
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
