import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className="absolute top-0 left-0 h-[64px] w-full text-white z-9999">
      {/* 导航栏 */}
      <div className="h-full w-300 mx-auto flex justify-between">
        {/* 导航栏logo容器 */}
        <div>
          <Link
            href="/"
            className="h-full w-full flex items-center justify-center">
            <Image
              src="/logo.svg"
              alt="logo"
              width={120}
              height={60}
              className="h-[24px] w-auto"
            />
          </Link>
        </div>
        <div className="flex-1 flex justify-between">
          {/* 导航栏导航容器 */}
          <div className="nav-container flex items-center px-4">
            <li className="px-2 hover:text-white/60">
              <Link href="/">Next案例</Link>
            </li>
            <li className="px-2 hover:text-white/60">
              <Link href="/docs">文档</Link>
            </li>
            <li className="px-2 hover:text-white/60">
              <Link href="/blog">博客</Link>
            </li>
          </div>
          {/* 导航栏用户容器 */}
          <div className="flex items-center">
            <div className="flex items-center rounded-full gap-4">
              <Link
                href="/login"
                className="flex items-center rounded-full bg-brand-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-400">
                <span>立即登录</span>
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white transition">
                <span>立即注册</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
