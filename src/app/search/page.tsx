'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const mockUsers = [
    {
      id: '1',
      username: 'ahmet-yilmaz',
      name: 'Ahmet Yılmaz',
      bio: 'Teknoloji meraklısı, yazılım geliştirici',
      hobbies: ['Coding', 'Gaming', 'Piyano'],
      movies: ['Inception', 'Matrix'],
      series: ['Breaking Bad'],
    },
    {
      id: '2',
      username: 'ayse-demir',
      name: 'Ayşe Demir',
      bio: 'Film tutkunu ve kitap kurdu',
      hobbies: ['Movies', 'Reading', 'Yoga'],
      movies: ['Pulp Fiction', 'Fight Club'],
      series: ['Friends'],
    },
    {
      id: '3',
      username: 'mehmet-kaya',
      name: 'Mehmet Kaya',
      bio: 'Spor tutkunu ve fotoğrafçı',
      hobbies: ['Football', 'Photography', 'Running'],
      movies: ['Rocky', 'Creed'],
      series: ['Game of Thrones'],
    },
  ];

  const filteredUsers = mockUsers.filter((user) => {
    const query = searchQuery.toLowerCase();
    if (!query) return true;

    switch (filterType) {
      case 'name':
        return user.name.toLowerCase().includes(query);
      case 'hobbies':
        return user.hobbies.some((hobby) => hobby.toLowerCase().includes(query));
      case 'bio':
        return user.bio.toLowerCase().includes(query);
      default:
        return (
          user.name.toLowerCase().includes(query) ||
          user.bio.toLowerCase().includes(query) ||
          user.hobbies.some((hobby) => hobby.toLowerCase().includes(query))
        );
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      {/* Arama Başlığı */}
      <div className="bg-white border-b">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">Kullanıcı Ara</h1>
          <p className="mt-2 text-gray-600 text-center">Hobiler ve ilgi alanlarına göre kullanıcıları keşfet</p>
        </div>
      </div>

      {/* Arama Formu */}
      <div className="container mx-auto py-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm">
            <input
              type="text"
              placeholder="İsim, hobi veya ilgi alanı ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="all">Tümü</option>
              <option value="name">İsim</option>
              <option value="hobbies">Hobiler</option>
              <option value="bio">Biyografi</option>
            </select>
          </div>
        </div>
      </div>

      {/* Kullanıcı Listesi */}
      <div className="container mx-auto py-6">
        <div className="max-w-2xl mx-auto space-y-4">
          {filteredUsers.map((user) => (
            <Link key={user.id} href={`/profile/${user.username}`}>
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 hover-card">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {user.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                    <p className="text-gray-600 mt-1">{user.bio}</p>
                    
                    <div className="mt-3 flex flex-wrap gap-2">
                      {user.hobbies.map((hobby, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {searchQuery && filteredUsers.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <div className="text-gray-500 text-lg">Aradığınız kriterlere uygun kullanıcı bulunamadı</div>
              <p className="text-gray-400 mt-2">Farklı arama kriterleri deneyebilirsiniz</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 