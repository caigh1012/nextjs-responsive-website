'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const performanceCards = [
  {
    eyebrow: '01 / 图片优化',
    title: '使用 next/image 自动优化图片加载',
    description: 'Next.js 内置图片压缩、响应式尺寸与懒加载能力，能根据设备分发更合适的资源，减少首屏无效下载。',
    highlight: '适合 Banner、卡片封面和内容插图场景',
    imageSrc: '/illustrations/performance-image-optimization.svg',
    imageAlt: 'Next.js 图片优化示意图',
  },
  {
    eyebrow: '02 / 按需加载',
    title: '通过动态导入降低首屏 JavaScript 体积',
    description: '借助动态导入与组件级拆分，页面能优先加载关键内容，把次要模块延后到真正需要时再请求。',
    highlight: '适合数据大屏、富文本和复杂交互页面',
    imageSrc: '/illustrations/performance-code-splitting.svg',
    imageAlt: 'Next.js 动态导入与代码分割示意图',
  },
  {
    eyebrow: '03 / 服务端组件',
    title: '利用 Server Components 与流式渲染减轻客户端负担',
    description: '把更多计算和数据组装放在服务端完成，只把需要交互的部分交给客户端，能明显减少浏览器下载和运行的脚本量。',
    highlight: '适合首页、内容页和数据聚合型页面',
    imageSrc: '/illustrations/performance-streaming.svg',
    imageAlt: 'Next.js Server Components 与流式渲染示意图',
  },
  {
    eyebrow: '04 / 预渲染缓存',
    title: '结合 SSG / ISR / 缓存策略提升稳定访问速度',
    description: '根据页面更新频率选择静态生成、增量再生成或服务端渲染，并结合缓存复用结果，让请求更快命中可复用内容。',
    highlight: '适合官网、营销页、文档站与资讯页',
    imageSrc: '/illustrations/performance-cache-strategy.svg',
    imageAlt: 'Next.js 预渲染与缓存策略示意图',
  },
];

export default function Performance() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fallbackCard = performanceCards[0];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto w-300 px-4">
        <div className="mb-16 space-y-5 text-center">
          <h2 className="font-bold text-5xl text-slate-900">性能优化</h2>
          <p className="mx-auto max-w-195 text-slate-600">围绕图片、代码、服务端组件与缓存策略四个关键点，持续优化首屏加载、渲染效率与用户交互体验</p>
        </div>
        <div className="relative">
          {!mounted ? (
            <article className="px-1 py-4">
              <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="flex min-h-80 items-center justify-center px-4 py-6 lg:px-8 lg:py-10">
                  <div className="relative w-full max-w-130">
                    <Image
                      src={fallbackCard.imageSrc}
                      alt={fallbackCard.imageAlt}
                      width={0}
                      height={0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="h-auto w-full"
                      priority
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center px-4 py-2 lg:px-6">
                  <p className="text-sm font-semibold tracking-[0.22em] text-sky-500 uppercase">{fallbackCard.eyebrow}</p>
                  <h3 className="mt-4 max-w-155 text-3xl font-bold leading-[1.15] text-slate-950 lg:text-[46px]">{fallbackCard.title}</h3>
                  <p className="mt-6 max-w-195 text-[17px] leading-8 text-slate-500">{fallbackCard.description}</p>
                  <div className="mt-8 inline-flex w-fit rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">{fallbackCard.highlight}</div>
                </div>
              </div>
            </article>
          ) : (
            <Swiper
              modules={[Autoplay, Pagination]}
              className="px-1 pb-14"
              spaceBetween={24}
              slidesPerView={1}
              speed={700}
              loop
              grabCursor
              autoHeight
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                768: {
                  spaceBetween: 32,
                },
              }}>
              {performanceCards.map((card) => (
                <SwiperSlide key={card.title}>
                  <article className="py-4">
                    <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
                      <div className="flex min-h-80 items-center justify-center px-4 py-6 lg:px-8 lg:py-10">
                        <div className="relative w-full max-w-130">
                          <Image
                            src={card.imageSrc}
                            alt={card.imageAlt}
                            width={0}
                            height={0}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="h-auto w-full"
                            priority={card.eyebrow.startsWith('01')}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col justify-center px-4 py-2 lg:px-6">
                        <p className="text-sm font-semibold tracking-[0.22em] text-sky-500 uppercase">{card.eyebrow}</p>
                        <h3 className="mt-4 max-w-155 text-3xl font-bold leading-[1.15] text-slate-950 lg:text-[46px]">{card.title}</h3>
                        <p className="mt-6 max-w-195 text-[17px] leading-8 text-slate-500">{card.description}</p>
                        <div className="mt-8 inline-flex w-fit rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">{card.highlight}</div>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}
