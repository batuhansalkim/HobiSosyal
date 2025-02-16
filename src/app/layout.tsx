'use client';
import { Inter } from "next/font/google";
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    setUsername(currentUser);

    // Sadece ana sayfadaysa ve giriş yapmamışsa login'e yönlendir
    if (!currentUser && pathname === '/') {
      router.push('/auth/login');
    }
  }, [pathname]);

  // Login sayfasındaysa navbar'ı gösterme
  if (pathname === '/auth/login') {
    return (
      <html lang="tr">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    );
  }

  return (
    <html lang="tr">
      <body className={`${inter.className} bg-gray-900`}>
        <nav className="bg-gray-900 z-50 relative">
          <div className="container mx-auto">
            <div className="flex justify-between items-center h-16 px-4">
              <a href="/" className="text-xl font-bold text-white hover:text-purple-400 transition-colors">
                HobiSosyal
              </a>
              <div className="flex items-center space-x-6">
                <a href="/search" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Ara
                </a>
                {username && (
                  <>
                    <a 
                      href={`/profile/${username}`} 
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      Profilim
                    </a>
                    <button
                      onClick={() => {
                        localStorage.removeItem('currentUser');
                        router.push('/auth/login');
                      }}
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      Çıkış Yap
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}