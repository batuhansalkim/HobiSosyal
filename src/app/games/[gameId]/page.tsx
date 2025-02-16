'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Heart, Share2, ThumbsUp, Star, Clock, Users, X } from 'lucide-react';

interface Post {
  id: string;
  username: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  createdAt: Date;
  userAvatar?: string;
  rating?: number;
  playTime?: string;
}

// Eşleşme durumu için interface
interface MatchState {
  isMatching: boolean;
  isMatched: boolean;
  matchedUser?: {
    username: string;
    playTime: string;
    rating: number;
    level: string;
  };
}

export default function GameDetailPage({ params }: { params: { gameId: string } }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [gameInfo, setGameInfo] = useState({
    rating: 4.8,
    totalReviews: 1234,
    averagePlayTime: "120 saat",
    releaseDate: "2015-05-19",
    developer: "CD Projekt Red",
    genre: ["RPG", "Açık Dünya", "Macera"]
  });
  const [matchState, setMatchState] = useState<MatchState>({
    isMatching: false,
    isMatched: false
  });

  useEffect(() => {
    // Mock veri
    const mockPosts: Post[] = [
      {
        id: '1',
        username: 'oyuncu123',
        content: 'The Witcher 3 muhteşem bir oyun! Özellikle yan görevlerdeki hikaye anlatımı çok başarılı. Gwent mini oyunu bile başlı başına bir bağımlılık.',
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png',
        likes: 45,
        comments: 12,
        createdAt: new Date('2024-01-15'),
        rating: 5,
        playTime: "200+ saat"
      },
      {
        id: '2',
        username: 'gamemaster',
        content: 'Blood and Wine DLC\'si ana oyundan bile daha iyi olmuş. Toussaint bölgesi görsel bir şölen! Vampir hikayeleri çok etkileyici.',
        likes: 32,
        comments: 8,
        createdAt: new Date('2024-01-10'),
        rating: 4.5,
        playTime: "150 saat"
      },
      {
        id: '3',
        username: 'rpgfan',
        content: 'Hearts of Stone DLC\'sindeki Gaunter O\'Dimm karakteri oyunun en iyi yazılmış kötü karakterlerinden. Hikaye anlatımı muhteşem.',
        image: 'https://cdn.akamai.steamstatic.com/steam/apps/378648/ss_d33ade7a3e0a21f56b4d63a5f3c6a6c72f97aa6b.600x338.jpg',
        likes: 67,
        comments: 15,
        createdAt: new Date('2024-01-05'),
        rating: 5,
        playTime: "180 saat"
      }
    ];

    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 500);
  }, [params.gameId]);

  // Eşleşme fonksiyonu
  const handleMatch = () => {
    setMatchState({ ...matchState, isMatching: true });
    
    // Simüle edilmiş eşleşme süreci
    setTimeout(() => {
      setMatchState({
        isMatching: false,
        isMatched: true,
        matchedUser: {
          username: 'witcherfan42',
          playTime: '300+ saat',
          rating: 4.8,
          level: 'Uzman Oyuncu'
        }
      });
    }, 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Yükleniyor...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 h-64 relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-end">
          <div className="text-white pb-8 relative z-10 w-full">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold">{decodeURIComponent(params.gameId)}</h1>
                <p className="text-gray-200 mt-2">Oyunla ilgili paylaşımlar</p>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <span className="text-2xl font-bold">{gameInfo.rating}</span>
                  <span className="text-gray-300">({gameInfo.totalReviews} değerlendirme)</span>
                </div>
                <div className="text-gray-300 mt-2">{gameInfo.developer}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Game Info */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-purple-400" />
              <div>
                <div className="text-gray-400 text-sm">Ortalama Oynanış</div>
                <div className="text-white font-medium">{gameInfo.averagePlayTime}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <ThumbsUp className="w-5 h-5 text-purple-400" />
              <div>
                <div className="text-gray-400 text-sm">Çıkış Tarihi</div>
                <div className="text-white font-medium">{gameInfo.releaseDate}</div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="text-gray-400 text-sm mb-2">Türler</div>
              <div className="flex flex-wrap gap-2">
                {gameInfo.genre.map((genre, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
            {/* Eşleşme Butonu */}
            <div className="md:col-span-1">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleMatch}
                className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                disabled={matchState.isMatching}
              >
                <Users className="w-5 h-5" />
                <span>{matchState.isMatching ? 'Eşleşme Aranıyor...' : 'Oyuncu Bul'}</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Eşleşme Modal */}
      {matchState.isMatched && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-800 rounded-2xl p-6 max-w-md w-full mx-4 border border-gray-700"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-bold text-white">Eşleşme Bulundu!</h3>
              <button
                onClick={() => setMatchState({ isMatching: false, isMatched: false })}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {matchState.matchedUser?.username[0].toUpperCase()}
                </span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  {matchState.matchedUser?.username}
                </h4>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{matchState.matchedUser?.playTime}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-sm mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span>{matchState.matchedUser?.rating} / 5.0</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50 rounded-xl p-4 mb-6">
              <div className="text-sm text-gray-300 mb-2">Oyuncu Seviyesi</div>
              <div className="text-white font-medium">{matchState.matchedUser?.level}</div>
            </div>

            <div className="flex space-x-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                onClick={() => {
                  // Sohbet başlatma fonksiyonu
                  console.log('Sohbet başlatıldı');
                }}
              >
                <MessageSquare className="w-5 h-5" />
                <span>Sohbet Başlat</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-3 bg-gray-700 text-gray-300 rounded-xl shadow-md hover:shadow-lg"
                onClick={() => setMatchState({ isMatching: false, isMatched: false })}
              >
                Reddet
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Paylaşım Yap */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full bg-gray-800 rounded-xl p-4 text-gray-400 text-left mb-8 hover:bg-gray-750 transition-colors border border-gray-700 flex items-center space-x-4"
        >
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-gray-400">+</span>
          </div>
          <span>Düşüncelerini paylaş...</span>
        </motion.button>

        {/* Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700"
            >
              {/* Post Header */}
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{post.username[0].toUpperCase()}</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">{post.username}</div>
                      <div className="text-gray-400 text-sm">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  {post.rating && (
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <span className="text-white font-medium">{post.rating}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Post Content */}
              <div className="p-4">
                <p className="text-gray-200 mb-4">{post.content}</p>
                {post.image && (
                  <div className="rounded-lg overflow-hidden mb-4 max-h-80">
                    <img src={post.image} alt="Post" className="w-full h-full object-cover" />
                  </div>
                )}
                {post.playTime && (
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Oynama Süresi: {post.playTime}</span>
                  </div>
                )}
              </div>

              {/* Post Actions */}
              <div className="px-4 py-3 border-t border-gray-700 flex items-center space-x-6">
                <button className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors ml-auto">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 