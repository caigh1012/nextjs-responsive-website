import Link from 'next/link';

export default function Footer() {
  const footerColumns = [
    {
      title: '平台能力',
      links: [
        { label: '应用架构', href: '/' },
        { label: '渲染策略', href: '/' },
        { label: '性能优化', href: '/' },
        { label: '部署方案', href: '/' },
      ],
    },
    {
      title: '开发资源',
      links: [
        { label: '上手指南', href: '/' },
        { label: '案例参考', href: '/' },
        { label: '更新日志', href: '/' },
        { label: '最佳实践', href: '/' },
      ],
    },
    {
      title: '团队协作',
      links: [
        { label: '项目规范', href: '/' },
        { label: '组件复用', href: '/' },
        { label: '发布流程', href: '/' },
        { label: '维护建议', href: '/' },
      ],
    },
    {
      title: '支持帮助',
      links: [
        { label: '常见问题', href: '/' },
        { label: '使用文档', href: '/' },
        { label: '博客文章', href: '/' },
        { label: '联系我们', href: '/' },
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#272727]">
      <div className="mx-auto w-300 pt-16 pb-8 text-white">
        <div className="flex items-start justify-between gap-16 border-b border-white/10 pb-12">
          <div className="max-w-75">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/45">Next Experience</p>
            <h2 className="mt-5 text-[32px] font-semibold leading-tight">为现代 Web 产品提供更稳定的构建与交付体验</h2>
            <p className="mt-5 text-sm leading-7 text-white/60">从页面渲染、工程组织到线上部署，围绕真实项目场景整理清晰能力，让团队可以更快进入开发与迭代节奏。</p>
          </div>

          <div className="grid flex-1 grid-cols-4 gap-10">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-lg font-semibold text-white">{column.title}</h3>
                <div className="mt-6 flex flex-col gap-4">
                  {column.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm text-white/60 transition hover:text-white">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 text-sm text-white/45">
          <p>&copy; 2026 Next Starter Showcase. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built for responsive product sites</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
