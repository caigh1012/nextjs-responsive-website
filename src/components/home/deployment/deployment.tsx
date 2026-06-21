const deploymentCards = [
  {
    title: '多平台统一部署',
    description: '同一套 Next.js 应用可灵活接入 Vercel、Node.js、Docker 与 Serverless 环境，发布链路更统一。',
    badge: 'DEPLOY',
    badgeClass: 'from-sky-200 via-blue-200 to-indigo-200',
    iconType: 'platform',
  },
  {
    title: '灰度与回滚更轻松',
    description: '结合构建产物管理与版本化流程，团队可以更稳妥地做灰度验证、快速回滚和持续交付。',
    badge: 'SAFE',
    badgeClass: 'from-cyan-200 via-sky-200 to-blue-200',
    iconType: 'shield',
  },
  {
    title: '全球访问更稳定',
    description: '配合边缘网络、静态资源缓存与按需渲染策略，让页面在不同地区也能保持稳定且快速的访问体验。',
    badge: 'EDGE',
    badgeClass: 'from-violet-200 via-indigo-200 to-sky-200',
    iconType: 'monitor',
  },
];

export default function Deployment() {
  return (
    <section className="bg-[#eef2f7] py-24">
      <div className="mx-auto w-300 px-4">
        <div className="mb-16 space-y-5 text-center">
          <h2 className="font-bold text-5xl text-slate-900">稳定上线</h2>
          <p className="mx-auto max-w-195 text-slate-600">兼顾发布效率、交付稳定性与全球访问体验</p>
        </div>
        <div className="mt-18 grid gap-8 md:grid-cols-3">
          {deploymentCards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col items-center text-center">
              <div className="relative flex h-[260px] w-full items-center justify-center">
                <div className={`absolute top-[28px] h-[176px] w-[176px] rounded-full bg-gradient-to-br ${card.badgeClass} opacity-40 blur-3xl`} />
                <div className="absolute bottom-[42px] h-5 w-[180px] rounded-full bg-slate-300/40 blur-md" />
                <div className="relative flex h-[132px] w-[132px] items-center justify-center rounded-full bg-white shadow-[0_22px_45px_rgba(148,163,184,0.28)]">
                  <div className="absolute bottom-[-8px] h-4 w-[96px] rounded-full bg-slate-200" />
                  <div className="absolute bottom-[-20px] h-3 w-[70px] rounded-full bg-slate-300/50 blur-sm" />
                  {card.iconType === 'platform' && (
                    <>
                      <div className="absolute left-[-18px] top-[82px] h-5 w-10 -rotate-12 rounded-[14px] bg-white/90 shadow-md" />
                      <div className="absolute right-[-12px] top-[88px] h-4 w-9 rotate-12 rounded-[14px] bg-white/80 shadow-md" />
                      <div className="relative flex h-[92px] w-[92px] items-center justify-center rounded-full bg-gradient-to-br from-slate-50 to-sky-50 shadow-inner">
                        <div className="absolute h-12 w-16 rounded-[12px] border-4 border-white bg-gradient-to-br from-sky-300 to-blue-400 shadow-lg" />
                        <div className="absolute bottom-[18px] h-3 w-10 rounded-full bg-white/80" />
                        <div className="absolute top-[24px] right-[22px] flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md">
                          <div className="h-3 w-3 rotate-45 border-r-2 border-t-2 border-sky-500" />
                        </div>
                      </div>
                    </>
                  )}
                  {card.iconType === 'shield' && (
                    <>
                      <div className="absolute left-[-10px] top-[96px] h-5 w-5 rounded-full bg-white/90 shadow-md" />
                      <div className="absolute right-[-16px] top-[92px] h-6 w-6 rounded-full bg-white/80 shadow-md" />
                      <div className="relative flex h-[96px] w-[96px] items-center justify-center rounded-full bg-gradient-to-br from-slate-50 to-cyan-50 shadow-inner">
                        <div className="relative h-[66px] w-[54px] overflow-hidden rounded-t-[22px] rounded-b-[26px] bg-gradient-to-b from-sky-400 to-blue-500 shadow-[0_16px_32px_rgba(59,130,246,0.3)]">
                          <div className="absolute left-1/2 top-[16px] h-7 w-4 -translate-x-1/2 rotate-45 border-b-[5px] border-r-[5px] border-white" />
                        </div>
                      </div>
                    </>
                  )}
                  {card.iconType === 'monitor' && (
                    <>
                      <div className="absolute left-[-14px] top-[104px] h-4 w-8 rounded-[12px] bg-white/85 shadow-md" />
                      <div className="absolute right-[-12px] top-[82px] h-4 w-10 rounded-[12px] bg-white/85 shadow-md" />
                      <div className="relative">
                        <div className="flex h-[70px] w-[102px] items-center justify-center rounded-[18px] border-[5px] border-white bg-gradient-to-br from-sky-300 to-indigo-400 shadow-[0_18px_35px_rgba(99,102,241,0.28)]">
                          <div className="relative h-8 w-8">
                            <div className="absolute inset-x-0 top-1 mx-auto h-2 w-2 rounded-full bg-white" />
                            <div className="absolute left-1/2 top-3 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white border-t-transparent border-l-transparent" />
                            <div className="absolute left-1/2 top-5 h-6 w-6 -translate-x-1/2 rounded-full border-2 border-white border-t-transparent border-l-transparent opacity-80" />
                          </div>
                        </div>
                        <div className="mx-auto h-3 w-8 rounded-b-lg bg-slate-300" />
                        <div className="mx-auto h-2 w-14 rounded-full bg-slate-200" />
                      </div>
                    </>
                  )}
                </div>
                <div className="absolute top-[26px] rounded-full bg-white/90 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-slate-600 shadow-lg">{card.badge}</div>
              </div>
              <h3 className="text-[34px] font-bold text-slate-900">{card.title}</h3>
              <p className="mt-3 max-w-[280px] text-base leading-7 text-slate-600">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
