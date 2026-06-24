'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useUserContext } from '@/contexts/userContext';

export default function NavBar() {
  const [isFixed, setIsFixed] = useState(false);

  const [isShowTip, setIsShowTip] = useState(true);
  const { user, loading, loggingOut, logout } = useUserContext();

  useEffect(() => {
    const top = isShowTip ? 48 : 0;
    const scrollFn = () => {
      if (document.documentElement.scrollTop > 5 + top) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    // 先执行一遍，确保滚动时刷新导致导航栏丢失
    scrollFn();
    document.addEventListener('scroll', scrollFn);
    return () => {
      document.removeEventListener('scroll', scrollFn);
    };
  }, [isShowTip]);

  const closeTip = () => {
    document.body.classList.remove('universal-product-tip-body');
    setIsShowTip(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      // 具体错误已在 UserContext 中记录，这里避免未处理的 Promise 异常
    }
  };

  return (
    <>
      {isShowTip ? (
        <div className="universal-product-tip">
          <div className="universal-product-tip-container">
            <div className="universal-product-tip-wrapper">
              <div>Next.js 是一个用于构建全栈 Web 应用程序的 React 框架</div>
              <Link
                className="text-brand-500"
                href="/">
                了解更多
              </Link>
              <div
                className="close"
                onClick={() => closeTip()}>
                <img
                  src="/close.svg"
                  alt="close"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <nav className={clsx('absolute top-0 left-0 h-[64px] w-full z-9999 transition-all duration-300', { 'bg-white': isFixed, fixed: isFixed, 'text-black': isFixed })}>
        {/* 导航栏 */}
        <div className="h-full w-300 mx-auto flex justify-between">
          {/* 导航栏logo容器 */}
          <div>
            <Link
              href="/"
              className={clsx('h-full w-full flex items-center justify-center transition-all duration-300', { 'text-black': isFixed, 'text-white': !isFixed })}>
              <svg
                className="h-[24px] w-auto fill-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 394 80">
                <path d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z" />
                <path d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z" />
              </svg>
            </Link>
          </div>
          <div className="flex-1 flex justify-between">
            {/* 导航栏导航容器 */}
            <div className="nav-container flex items-center px-4">
              <li
                className={clsx('px-2 transition-all duration-300', {
                  'text-black': isFixed,
                  'text-white': !isFixed,
                  'hover:text-white/60': !isFixed,
                })}>
                <Link href="/">Next案例</Link>
              </li>
              <li className={clsx('px-2 transition-all duration-300', { 'text-black': isFixed, 'text-white': !isFixed, 'hover:text-white/60': !isFixed })}>
                <Link href="/">文档</Link>
              </li>
              <li className={clsx('px-2 transition-all duration-300', { 'text-black': isFixed, 'text-white': !isFixed, 'hover:text-white/60': !isFixed })}>
                <Link href="/">博客</Link>
              </li>
            </div>
            {/* 导航栏用户容器 */}
            <div className="flex items-center">
              {loading ? (
                <div
                  className={clsx('text-sm font-medium transition-all duration-300', {
                    'text-black/70': isFixed,
                    'text-white/80': !isFixed,
                  })}>
                  加载中...
                </div>
              ) : user ? (
                <div
                  className={clsx('flex items-center gap-2 rounded-full px-3 py-2 transition-all duration-300', {
                    'text-black': isFixed,
                    'text-white': !isFixed,
                  })}>
                  <span className="max-w-300 truncate text-sm font-medium">{user.nickname || user.username}</span>
                  <span
                    className={clsx('flex h-8 w-8 items-center justify-center rounded-full', {
                      'bg-black/10': isFixed,
                      'bg-white/15': !isFixed,
                    })}>
                    <svg
                      className="h-4 w-4 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true">
                      <path d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Zm0 2.25c-3 0-9 1.5-9 4.5V21h18v-2.25c0-3-6-4.5-9-4.5Z" />
                    </svg>
                  </span>
                  <button
                    type="button"
                    onClick={() => void handleLogout()}
                    disabled={loggingOut}
                    className={clsx('cursor-pointer rounded-full px-3 py-1 text-sm font-medium transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60', {
                      'bg-black/10 hover:bg-black/15': isFixed,
                      'bg-white/15 hover:bg-white/20': !isFixed,
                    })}>
                    {loggingOut ? '退出中...' : '退出'}
                  </button>
                </div>
              ) : (
                <div className="flex items-center rounded-full gap-4">
                  <Link
                    href="/login"
                    className="flex items-center rounded-full bg-brand-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-400">
                    <span>立即登录</span>
                  </Link>
                  <Link
                    href="/"
                    className={clsx('rounded-full bg-white/10 px-5 py-2 text-sm font-medium transition-all duration-300', { 'text-black': isFixed, 'text-white': !isFixed })}>
                    <span>立即注册</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
