'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, X } from 'lucide-react';

// Kategori tipini tanımlayalım
type Category = 'hobbies' | 'movies' | 'series' | 'games' | 'skills';

// ProfileData interface'ini güncelleyelim
interface ProfileData extends Record<Category, string[]> {
  name: string;
  bio: string;
}

export default function EditProfilePage() {
  const [profileData, setProfileData] = useState<ProfileData>({
    name: '',
    bio: '',
    hobbies: [],
    movies: [],
    series: [],
    games: [],
    skills: []
  });

  const [newItem, setNewItem] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category>('hobbies');

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItem.trim()) {
      setProfileData(prev => ({
        ...prev,
        [activeCategory]: [...prev[activeCategory], newItem.trim()]
      }));
      setNewItem('');
    }
  };

  const handleRemoveItem = (category: Category, index: number) => {
    setProfileData(prev => ({
      ...prev,
      [category]: prev[category].filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700"
        >
          <h1 className="text-3xl font-bold text-white mb-8">Profili Düzenle</h1>

          {/* Temel Bilgiler */}
          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-gray-300 mb-2">İsim</label>
              <input
                type="text"
                value={profileData.name}
                onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full bg-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="İsminizi girin"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Biyografi</label>
              <textarea
                value={profileData.bio}
                onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                className="w-full bg-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Kendinizden bahsedin"
                rows={4}
              />
            </div>
          </div>

          {/* Kategoriler */}
          <div className="space-y-8">
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {(['hobbies', 'movies', 'series', 'games', 'skills'] as const).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-xl ${
                    activeCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Öğe Ekleme Formu */}
            <form onSubmit={handleAddItem} className="flex space-x-4">
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                className="flex-1 bg-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder={`Yeni ${activeCategory} ekle...`}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-purple-600 text-white rounded-xl px-6 py-3 flex items-center space-x-2"
              >
                <Plus className="w-5 h-5" />
                <span>Ekle</span>
              </motion.button>
            </form>

            {/* Öğe Listesi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {profileData[activeCategory].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gray-700 rounded-xl p-4 flex justify-between items-center"
                >
                  <span className="text-white">{item}</span>
                  <button
                    onClick={() => handleRemoveItem(activeCategory, index)}
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Kaydet Butonu */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl py-4 font-semibold"
          >
            Değişiklikleri Kaydet
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
} 