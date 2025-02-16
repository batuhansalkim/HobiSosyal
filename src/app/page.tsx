'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/10">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Hobi Dünyasına
              </span>
              <br />
              <span className="text-foreground">Hoş Geldiniz</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tutkularınızı paylaşın, ilham verin ve yeni hobiler keşfedin.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
            <motion.div 
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative overflow-hidden rounded-xl bg-card p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold mb-4 relative z-10">Hobilerini Paylaş</h3>
              <p className="text-muted-foreground relative z-10">Tutkunuz olan hobileri diğer insanlarla paylaşın ve ilham kaynağı olun.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative overflow-hidden rounded-xl bg-card p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold mb-4 relative z-10">Topluluk Oluştur</h3>
              <p className="text-muted-foreground relative z-10">Benzer ilgi alanlarına sahip kişilerle tanışın ve etkinlikler düzenleyin.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative overflow-hidden rounded-xl bg-card p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold mb-4 relative z-10">Keşfet</h3>
              <p className="text-muted-foreground relative z-10">Yeni hobiler keşfedin ve deneyimli kullanıcılardan ilham alın.</p>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12 items-center"
          >
            <Button
              size="lg"
              onClick={() => router.push('/auth/login')}
              className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 transition-colors duration-300"
            >
              Hemen Başla
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => router.push('/auth/register')}
              className="text-lg px-8 py-6 rounded-full border-2 hover:bg-primary/10 transition-colors duration-300"
            >
              Daha Fazla Bilgi
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 pt-10 border-t border-border/50"
          >
            <p className="text-muted-foreground text-lg">Binlerce hobi tutkunu tarafından tercih ediliyor</p>
            <div className="flex justify-center gap-8 mt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">Aktif Kullanıcı</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Hobi Topluluğu</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">50K+</p>
                <p className="text-sm text-muted-foreground">Paylaşım</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}