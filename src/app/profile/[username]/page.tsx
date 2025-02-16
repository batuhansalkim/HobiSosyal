'use client';
import { useEffect, useState } from 'react';
import { Profile } from '@/types/profile';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import { motion } from 'framer-motion';
import { MessageSquare, UserPlus, Share2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Tablar için icon tanımlamaları ekleyelim
const tabIcons = {
  hobbies: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  movies: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
  </svg>,
  series: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>,
  games: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
  </svg>,
  skills: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
};

// Görsel URL'leri için sabit tanımlamalar
const imageUrls = {
  movies: {
    "Inception": "https://image.tmdb.org/t/p/w500/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg",
    "The Matrix": "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    "Interstellar": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  series: {
    "Breaking Bad": "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    "Stranger Things": "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    "The Witcher": "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg"
  },
  games: {
    "The Witcher 3": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg",
    "Red Dead Redemption 2": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.jpg",
    "Cyberpunk 2077": "https://images.igdb.com/igdb/image/upload/t_cover_big/co2mjs.jpg"
  },
  hobbies: {
    "Yazılım": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
    "Oyun Geliştirme": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/unity/unity.png",
    "Müzik": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/audio/audio.png"
  },
  skills: {
    "JavaScript": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
    "React": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
    "Node.js": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png",
    "Python": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"
  }
};

export default function ProfilePage({ params }: { params: { username: string } }) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('hobbies');

  useEffect(() => {
    // Mock veri - daha sonra Firebase'den gelecek
    const mockProfile: Profile = {
      id: '1',
      username: params.username,
      name: params.username === 'batu' ? 'Batuhan Yılmaz' : 'Enes Demir',
      bio: "Hobi ve ilgi alanlarımı paylaşıyorum",
      hobbies: ["Yazılım", "Oyun Geliştirme", "Müzik"],
      movies: ["Inception", "The Matrix", "Interstellar"],
      series: ["Breaking Bad", "Stranger Things", "The Witcher"],
      games: ["The Witcher 3", "Red Dead Redemption 2", "Cyberpunk 2077"],
      skills: ["JavaScript", "React", "Node.js", "Python"],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    setTimeout(() => {
      setProfile(mockProfile);
      setLoading(false);
    }, 500);
  }, [params.username]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <LoadingSpinner />
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Kullanıcı Bulunamadı</h1>
          <p className="text-gray-600 mt-2">Aradığınız profil mevcut değil.</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-900"
    >
      {/* Header - Gradient arka plan */}
      <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 h-48" />

      {/* Profile Content */}
      <div className="container mx-auto px-4 -mt-32">
        <motion.div 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700"
        >
          {/* Profile Header */}
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    {profile.name.charAt(0)}
                  </div>
                  <div className="absolute bottom-2 right-2 h-4 w-4 bg-green-400 rounded-full border-2 border-gray-800"></div>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">{profile.name}</h1>
                  <p className="text-gray-400">@{profile.username}</p>
                  <p className="mt-2 text-gray-300 max-w-xl">{profile.bio}</p>
                </div>
              </div>
              <div className="mt-6 md:mt-0 flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl shadow-md hover:shadow-lg flex items-center space-x-2 transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <UserPlus className="h-5 w-5" />
                  <span>Takip Et</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gray-700 text-gray-200 rounded-xl shadow-md hover:shadow-lg flex items-center space-x-2 transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Mesaj</span>
                </motion.button>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-8 border-t border-gray-700 pt-8">
              {[
                { label: 'Takipçi', value: '2,345' },
                { label: 'Takip', value: '1,234' },
                { label: 'Gönderi', value: '234' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="border-t border-gray-700">
            <div className="px-8">
              <nav className="flex space-x-8 overflow-x-auto">
                {['hobbies', 'movies', 'series', 'games', 'skills'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`
                      py-4 px-4 font-medium text-sm transition-all duration-200
                      flex items-center space-x-2 whitespace-nowrap
                      ${activeTab === tab
                        ? 'text-purple-400 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-purple-400'
                        : 'text-gray-400 hover:text-gray-300'}
                    `}
                  >
                    {tabIcons[tab as keyof typeof tabIcons]}
                    <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 bg-gray-900"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {profile[activeTab as keyof Profile]?.map((item, index) => (
                  <Link 
                    href={`/${activeTab}/${encodeURIComponent(item)}`}
                    className="block"
                  >
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-700"
                    >
                      <div className="p-6">
                        {/* Kategori İkonları */}
                        <div className="w-12 h-12 rounded-full bg-gray-700 mb-4 flex items-center justify-center">
                          <div className="text-purple-400">
                            {tabIcons[activeTab as keyof typeof tabIcons]}
                          </div>
                        </div>

                        {/* İsim ve Kategori */}
                        <h3 className="text-lg font-semibold text-gray-200 group-hover:text-purple-400 transition-colors">
                          {item}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          {activeTab === 'movies' && '🎬 Film'}
                          {activeTab === 'series' && '📺 Dizi'}
                          {activeTab === 'games' && '🎮 Oyun'}
                          {activeTab === 'hobbies' && '⭐ Hobi'}
                          {activeTab === 'skills' && '💪 Yetenek'}
                        </p>
                      </div>

                      {/* Alt Bilgi */}
                      <div className="px-6 py-4 bg-gray-900 border-t border-gray-700 flex justify-between items-center">
                        <span className="text-xs text-gray-500">
                          {new Date().toLocaleDateString()}
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-gray-400 hover:text-purple-400 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </motion.button>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}