import Image from 'next/image';

const featureCards = [
  {
    title: '全栈开发',
    description: 'Next.js 将路由、服务端渲染与数据获取整合在同一套工程中，帮助团队更高效地交付完整的 Web 应用。',
    points: ['支持 SSR / SSG / ISR', '前后端协作更顺滑'],
    iconSrc: '/icons/feature-fullstack.svg',
    iconAlt: '全栈开发图标',
  },
  {
    title: '性能优化',
    description: '通过按需加载、图片优化和流式渲染能力，Next.js 能显著提升首屏体验，让页面更快到达用户眼前。',
    points: ['内置 Image 优化', '更好的首屏加载速度'],
    iconSrc: '/icons/feature-performance.svg',
    iconAlt: '性能优化图标',
  },
  {
    title: '稳定上线',
    description: '从本地开发到生产部署，Next.js 提供一致的构建体验，适合快速验证产品，也能支撑企业级项目持续迭代。',
    points: ['适配多种部署方案', '易于扩展与长期维护'],
    iconSrc: '/icons/feature-deployment.svg',
    iconAlt: '稳定上线图标',
  },
];

export default function Feature() {
  return (
    <section className="relative z-10 -mt-10 w-300 mx-auto pb-24">
      <div className="grid grid-cols-3 gap-4">
        {featureCards.map((card) => (
          <article
            key={card.title}
            className="flex min-h-62 items-start gap-4 rounded-2xl border border-slate-200/70 bg-white px-2 py-2 transition-transform duration-300 hover:-translate-y-1">
            <div className="flex shrink-0 items-center justify-center rounded-3xl bg-slate-50">
              <Image
                src={card.iconSrc}
                alt={card.iconAlt}
                width={120}
                height={120}
              />
            </div>
            <div className="pt-2">
              <h3 className="mb-4 text-[28px] font-semibold text-slate-900">{card.title}</h3>
              <p className="mb-5 text-base leading-7 text-slate-600">{card.description}</p>
              <p className="text-sm font-medium tracking-[0.2em] text-slate-400 uppercase">{card.points.join(' / ')}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
