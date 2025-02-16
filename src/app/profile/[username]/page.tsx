'use client';
import React from 'react';
import Link from 'next/link';

export default function ProfilePage({ params }: { params: { username: string } }) {
  const mockProfile = {
    name: params.username,
    bio: "Merhaba! Ben teknoloji ve sanat tutkunuyum.",
    hobbies: ["Fotoğrafçılık", "Yüzme", "Kitap Okuma"],
    movies: ["Inception", "The Matrix", "Interstellar"],
    series: ["Breaking Bad", "Stranger Things"],
    games: ["The Witcher 3", "Red Dead Redemption 2"],
    skills: ["Fotoğraf Düzenleme", "Web Tasarım"]
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Profil Başlığı */}
        <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600">
          <div className="flex items-center space-x-6">
            <div className="w-32 h-32 bg-white rounded-full border-4 border-white shadow-lg"></div>
            <div className="text-white">
              <h1 className="text-3xl font-bold">{mockProfile.name}</h1>
              <p className="mt-2 text-blue-100">{mockProfile.bio}</p>
            </div>
            <Link
              href="/profile/edit"
              className="ml-auto px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-medium"
            >
              Profili Düzenle
            </Link>
          </div>
        </div>

        {/* Profil İçeriği */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hobiler */}
          <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Hobiler
            </h2>
            <div className="flex flex-wrap gap-2">
              {mockProfile.hobbies.map((hobby, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors duration-200">
                  {hobby}
                </span>
              ))}
            </div>
          </div>

          {/* Filmler */}
          <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
              Filmler
            </h2>
            <div className="flex flex-wrap gap-2">
              {mockProfile.movies.map((movie, index) => (
                <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm hover:bg-purple-200 transition-colors duration-200">
                  {movie}
                </span>
              ))}
            </div>
          </div>

          {/* Diziler */}
          <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Diziler
            </h2>
            <div className="flex flex-wrap gap-2">
              {mockProfile.series.map((series, index) => (
                <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm hover:bg-green-200 transition-colors duration-200">
                  {series}
                </span>
              ))}
            </div>
          </div>

          {/* Oyunlar */}
          <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
              Oyunlar
            </h2>
            <div className="flex flex-wrap gap-2">
              {mockProfile.games.map((game, index) => (
                <span key={index} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm hover:bg-yellow-200 transition-colors duration-200">
                  {game}
                </span>
              ))}
            </div>
          </div>

          {/* Yetenekler */}
          <div className="bg-gray-50 rounded-lg p-4 md:col-span-2 hover:shadow-md transition-shadow duration-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Yetenekler
            </h2>
            <div className="flex flex-wrap gap-2">
              {mockProfile.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm hover:bg-indigo-200 transition-colors duration-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 