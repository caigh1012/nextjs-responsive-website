import { UserProvider } from '@/contexts/userContext';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <UserProvider>{children}</UserProvider>;
}
