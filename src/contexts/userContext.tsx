'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type UserInfo = {
  id: string;
  username: string;
  nickname: string | null;
  email: string | null;
  gender: string | null;
  avatarUrl: string | null;
  contactAddress: string | null;
  residenceAddress: string | null;
};

type UserInfoResponse = {
  message?: string;
  data?: UserInfo | null;
};

type UserContextValue = {
  user: UserInfo | null;
  loading: boolean;
  loggingOut: boolean;
  error: string | null;
  refreshUser: () => Promise<void>;
  logout: () => Promise<void>;
};

const UserContext = createContext<UserContextValue | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadUser = useCallback(async (signal?: AbortSignal) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/userinfo', {
        method: 'GET',
        credentials: 'include',
        cache: 'no-store',
        headers: {
          Accept: 'application/json',
        },
        signal,
      });

      const result = (await response.json()) as UserInfoResponse;

      if (!response.ok) {
        throw new Error(result.message ?? '获取用户信息失败');
      }

      setUser(result.data ?? null);
    } catch (fetchError) {
      if (signal?.aborted) {
        return;
      }

      setUser(null);
      setError(fetchError instanceof Error ? fetchError.message : '获取用户信息失败');
    } finally {
      if (!signal?.aborted) {
        setLoading(false);
      }
    }
  }, []);

  const logout = useCallback(async () => {
    setLoggingOut(true);
    setError(null);

    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
        credentials: 'include',
        cache: 'no-store',
        headers: {
          Accept: 'application/json',
        },
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? '退出登录失败');
      }

      await loadUser();
    } catch (logoutError) {
      setError(logoutError instanceof Error ? logoutError.message : '退出登录失败');
      throw logoutError;
    } finally {
      setLoggingOut(false);
    }
  }, [loadUser]);

  useEffect(() => {
    const controller = new AbortController();

    void loadUser(controller.signal);

    return () => controller.abort();
  }, [loadUser]);

  const value = useMemo<UserContextValue>(
    () => ({
      user,
      loading,
      loggingOut,
      error,
      refreshUser: async () => {
        await loadUser();
      },
      logout,
    }),
    [loadUser, loading, loggingOut, error, logout, user],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }

  return context;
}
