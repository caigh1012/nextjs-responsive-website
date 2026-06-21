import Image from 'next/image';

export default function Fullstack() {
  const fullstackCards = [
    {
      title: 'SSR 服务端渲染',
      description: '请求到达后即时输出完整 HTML，优化首屏体验并提升搜索引擎可见性。',
      badge: 'SSR',
      badgeClass: 'from-sky-400 to-blue-500',
    },
    {
      title: 'SSG 静态生成',
      description: '在构建阶段预生成页面内容，适合文档、官网与高性能展示场景。',
      badge: 'SSG',
      badgeClass: 'from-cyan-400 to-sky-500',
    },
    {
      title: 'ISR 增量更新',
      description: '结合静态性能与动态数据能力，让页面在保持高可用的同时持续刷新。',
      badge: 'ISR',
      badgeClass: 'from-indigo-400 to-blue-600',
    },
    {
      title: 'Server Actions',
      description: '表单提交与服务端逻辑自然串联，减少接口层样板代码并提升协作效率。',
      badge: 'ACT',
      badgeClass: 'from-violet-400 to-indigo-500',
    },
  ];
  return (
    <section className="py-12 mx-auto w-300">
      <div className="mb-16 space-y-5 text-center">
        <h2 className="font-bold text-5xl text-slate-900">全栈开发</h2>
        <p className="mx-auto max-w-195 text-slate-600">支持 SSR / SSG / ISR / Server Actions，帮助团队更高效地组织渲染策略与业务逻辑</p>
      </div>
      <div className="flex justify-center gap-8">
        <div className="flex flex-col gap-4 justify-center">
          {fullstackCards.map((card) => (
            <div
              id="44"
              key={card.title}
              className="flex gap-4 rounded-xl ring-gray-200 ring-1 py-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-slate-50">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-[18px] bg-gradient-to-br ${card.badgeClass} text-sm font-bold tracking-[0.18em] text-white shadow-lg`}>
                  {card.badge}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-base text-[14px] leading-7 text-slate-500">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 w-[560px]">
          <Image
            src="/illustrations/fullstack-rendering-workflow.svg"
            alt="展示 SSR、SSG、ISR 与 Server Actions 协作流程的全栈开发插画"
            width={0}
            height={0}
            className="h-auto w-full rounded-[28px]"
          />
        </div>
      </div>
    </section>
  );
}
