'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Search, LogOut } from 'lucide-react';

export default function Navbar() {
  const router = useRouter();
  const currentUser = typeof window !== 'undefined' ? localStorage.getItem('currentUser') : null;

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    router.push('/auth/login');
  };

  return (
    <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            HobiSosyal
          </Link>

          <div className="flex items-center gap-6">
            <Link 
              href="/search" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Search className="w-5 h-5" />
            </Link>
            
            {currentUser && (
              <>
                <Link 
                  href={`/profile/${currentUser}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Profilim
                </Link>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleLogout}
                  className="gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Çıkış Yap
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 