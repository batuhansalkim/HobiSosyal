'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const currentUser = localStorage.getItem('currentUser');

    if (!currentUser && !pathname.includes('/auth/login')) {
      router.push('/auth/login');
    }
  }, [pathname, router]);

  if (!mounted) {
    return null;
  }

  if (pathname === '/auth/login') {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-8">
        {children}
      </main>
    </>
  );
}
