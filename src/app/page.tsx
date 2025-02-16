'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Kullanıcı giriş yapmışsa search sayfasına, yapmamışsa login sayfasına yönlendir
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      router.push('/search');
    } else {
      router.push('/auth/login');
    }
  }, []);

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
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-3xl font-bold mb-4">HobiSosyal</h1>
        <p className="text-gray-400">Yönlendiriliyorsunuz...</p>
      </div>
    </div>
  );
}