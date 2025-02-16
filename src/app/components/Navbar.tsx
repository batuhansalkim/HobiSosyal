'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    setUsername(currentUser);
  }, []);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-xl font-bold text-blue-600">
            HobiSosyal
          </a>
          <div className="flex items-center space-x-6">
            <a
              href="/search"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Ara
            </a>
            {username && (
              <>
                <a
                  href={`/profile/${username}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Profilim
                </a>
                <button
                  onClick={() => {
                    localStorage.removeItem('currentUser');
                    router.push('/auth/login');
                  }}
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  Çıkış Yap
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
