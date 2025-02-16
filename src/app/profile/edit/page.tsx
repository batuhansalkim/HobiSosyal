'use client';
import { useState } from 'react';

export default function EditProfilePage() {
  const [profileData, setProfileData] = useState({
    name: '',
    bio: '',
    hobbies: [],
    movies: [],
    series: [],
    games: [],
    skills: []
  });

  const [newItem, setNewItem] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('hobbies');

  const addItem = (category: string) => {
    if (newItem.trim()) {
      setProfileData(prev => ({
        ...prev,
        [category]: [...prev[category], newItem.trim()]
      }));
      setNewItem('');
    }
  };

  const removeItem = (category: string, index: number) => {
    setProfileData(prev => ({
      ...prev,
      [category]: prev[category].filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Profili Düzenle</h1>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">İsim</label>
          <input
            type="text"
            value={profileData.name}
            onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Biyografi</label>
          <textarea
            value={profileData.bio}
            onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Yeni İçerik Ekle</label>
          <div className="flex gap-2 mt-1">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm"
            >
              <option value="hobbies">Hobiler</option>
              <option value="movies">Filmler</option>
              <option value="series">Diziler</option>
              <option value="games">Oyunlar</option>
              <option value="skills">Yetenekler</option>
            </select>
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              className="flex-1 rounded-md border-gray-300 shadow-sm"
              placeholder="Yeni içerik ekle..."
            />
            <button
              onClick={() => addItem(selectedCategory)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Ekle
            </button>
          </div>
        </div>

        {/* Kategori Listeleri */}
        {Object.entries(profileData).map(([category, items]) => {
          if (Array.isArray(items)) {
            return (
              <div key={category} className="mt-4">
                <h3 className="font-medium capitalize">{category}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {items.map((item, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100"
                    >
                      {item}
                      <button
                        onClick={() => removeItem(category, index)}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            );
          }
          return null;
        })}

        <button
          className="w-full mt-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          onClick={() => console.log('Profil güncellendi:', profileData)}
        >
          Profili Kaydet
        </button>
      </div>
    </div>
  );
} 