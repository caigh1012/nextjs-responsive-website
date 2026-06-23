'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
  username: z.string().trim().min(1, '请输入邮箱/手机'),
  password: z.string().min(1, '请输入密码'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return (
      <div
        aria-hidden="true"
        className="mt-2 min-h-5 text-xs text-transparent">
        .
      </div>
    );
  }

  return <div className="mt-2 min-h-5 text-xs text-[#d93025]">{message}</div>;
}

function PasswordToggleIcon({ visible }: { visible: boolean }) {
  if (visible) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4 fill-none stroke-current">
        <path
          d="M2 12s3.8-6 10-6 10 6 10 6-3.8 6-10 6-10-6-10-6Z"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="12"
          r="3"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 fill-none stroke-current">
      <path
        d="m3 3 18 18"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10.6 6.18A10.9 10.9 0 0 1 12 6c6.2 0 10 6 10 6a18.6 18.6 0 0 1-3.03 3.57M6.53 6.52C3.93 8.12 2 12 2 12a18.8 18.8 0 0 0 5.14 4.91M9.88 9.88A3 3 0 0 0 14.12 14.12"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: 'onTouched',
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const usernameValue = watch('username');
  const passwordValue = watch('password');
  const isSubmitReady = loginSchema.safeParse({
    username: usernameValue,
    password: passwordValue,
  }).success;

  const onSubmit = async (values: LoginFormValues) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: values.username,
        password: values.password ?? '',
      }),
    });

    const result = (await response.json().catch(() => null)) as { message?: string } | null;

    if (!response.ok) {
      setError('root.serverError', {
        type: 'server',
        message: result?.message ?? '登录失败，请稍后重试',
      });
      return;
    }

    router.push('/');
    router.refresh();
  };

  return (
    <main className="-mt-12 relative min-h-screen overflow-hidden bg-[#0a2740] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/login-banner.webp')" }}
      />
      <div className="absolute inset-0 bg-black/18" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">
        <div className="flex w-full max-w-[1280px] items-center justify-end">
          <section className="w-full max-w-[420px] bg-white px-8 py-9 text-[#111111] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
            <h1 className="text-[30px] font-semibold leading-tight text-[#1f1f1f]">登录账号</h1>

            <form
              noValidate
              onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-6">
                <label
                  htmlFor="login-username"
                  className="text-xs font-medium text-[#444444]">
                  邮箱/手机
                </label>
                <input
                  id="login-username"
                  type="text"
                  autoComplete="username"
                  placeholder=""
                  {...register('username', {
                    onChange: () => clearErrors('root.serverError'),
                  })}
                  className="mt-2 h-11 w-full rounded-sm border border-[#d9d9d9] px-3 text-sm outline-none transition focus:border-[#111111]"
                />
                <FieldError message={errors.username?.message} />

                <label
                  htmlFor="login-password"
                  className="text-xs font-medium text-[#444444]">
                  密码
                </label>
                <div className="relative mt-2">
                  <input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    placeholder=""
                    {...register('password', {
                      onChange: () => clearErrors('root.serverError'),
                    })}
                    className="h-11 w-full rounded-sm border border-[#d9d9d9] px-3 pr-10 text-sm outline-none transition focus:border-[#111111]"
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? '隐藏密码' : '显示密码'}
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-[#9a9a9a] transition hover:text-[#555555]">
                    <PasswordToggleIcon visible={showPassword} />
                  </button>
                </div>
                <FieldError message={errors.password?.message} />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`mt-2 h-11 w-full rounded-sm text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-80 ${
                    isSubmitReady ? 'bg-[#1677ff] text-white hover:bg-[#0958d9]' : 'bg-[#d9d9d9] text-[#7a7a7a] hover:bg-[#cfcfcf]'
                  }`}>
                  {isSubmitting ? '登录中...' : '登录'}
                </button>

                <div className="mt-4 text-center text-xs text-[#8b8b8b]">
                  <span>新用户？</span>
                  <Link
                    href="/"
                    className="ml-1 text-[#3d8bfd] transition hover:text-[#1f6fe0]">
                    注册账号
                  </Link>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>

      <div className="pointer-events-none absolute right-4 bottom-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#0b78ff] shadow-[0_12px_28px_rgba(0,67,168,0.45)]">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5 fill-none stroke-white">
          <path
            d="M7 10h10M7 14h6"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M12 3c4.97 0 9 3.58 9 8 0 1.96-.79 3.75-2.1 5.12L20 21l-5.03-1.67A10.4 10.4 0 0 1 12 19c-4.97 0-9-3.58-9-8s4.03-8 9-8Z"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="absolute right-0 bottom-5 left-0 z-10 px-6 text-center text-[10px] text-white/75">
        <p>2026 DJI All Rights Reserved. 仅作界面示意使用</p>
      </div>

      <div className="absolute bottom-5 left-5 z-10 text-[10px] leading-4 text-white/80">
        <p>拍摄图片仅作示意展示</p>
        <p>@img: login-banner.webp</p>
      </div>
    </main>
  );
}
