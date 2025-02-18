'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Users, Sparkles, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/10">
      {/* Header */}
      <header className="border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-bold text-xl">
              HobiSosyal
            </Link>
            <nav className="flex items-center gap-4">
              <Link href="/auth/login" className="text-sm text-muted-foreground hover:text-primary">
                Ara
              </Link>
              <Link href="/auth/login" className="text-sm text-muted-foreground hover:text-primary">
                Profilim
              </Link>
              <Link href="/auth/login">
                <Button variant="outline" size="sm">
                  Giriş Yap
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-[80vh] max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Hobi Dünyasına Hoş Geldiniz
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Benzer ilgi alanlarına sahip insanlarla tanışın, hobilerinizi paylaşın ve yeni arkadaşlıklar kurun.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/auth/login">
                <Button size="lg" className="w-full sm:w-auto group">
                  <Search className="mr-2 h-5 w-5" />
                  Hobi Arkadaşı Bul
                  <ArrowRight className="ml-2 h-4 w-4 opacity-70 group-hover:translate-x-1 transition" />
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Hemen Katıl
                </Button>
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <Link href="/auth/login">
                <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2">Hobilerini Paylaş</h3>
                  <p className="text-sm text-muted-foreground">Tutkularını diğer insanlarla paylaş ve deneyimlerini artır.</p>
                </div>
              </Link>
              <Link href="/auth/login">
                <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2">Topluluk Bul</h3>
                  <p className="text-sm text-muted-foreground">İlgi alanlarına uygun topluluklara katıl ve etkinliklere dahil ol.</p>
                </div>
              </Link>
              <Link href="/auth/login">
                <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors cursor-pointer">
                  <h3 className="font-semibold mb-2">Arkadaş Edin</h3>
                  <p className="text-sm text-muted-foreground">Benzer hobilere sahip yeni insanlarla tanış ve arkadaşlıklar kur.</p>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}