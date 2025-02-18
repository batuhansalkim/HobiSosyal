'use client';
import { useEffect, useState } from 'react';
import { Profile } from '@/types/profile';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import { motion } from 'framer-motion';
import { MessageSquare, UserPlus, Share2, Plus, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

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

type TabType = 'hobbies' | 'movies' | 'series' | 'games' | 'skills';

interface ProfileData {
  bio: string;
  hobbies: string[];
  movies: string[];
  series: string[];
  games: string[];
  skills: string[];
}

export default function ProfilePage({ params }: { params: { username: string } }) {
  const [profileData, setProfileData] = useState<ProfileData>({
    bio: '',
    hobbies: [],
    movies: [],
    series: [],
    games: [],
    skills: [],
  });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState<TabType>('hobbies');
  const [newItem, setNewItem] = useState('');
  const [editProfile, setEditProfile] = useState({
    username: params.username,
    bio: profileData.bio
  });

  useEffect(() => {
    // Profil verilerini localStorage'dan al
    const savedProfile = localStorage.getItem(`profile_${params.username}`);
    if (savedProfile) {
      setProfileData(JSON.parse(savedProfile));
    }
  }, [params.username]);

  const handleAddItem = () => {
    if (newItem.trim()) {
      const updatedProfileData = {
        ...profileData,
        [currentTab]: [...profileData[currentTab], newItem.trim()]
      };
      
      setProfileData(updatedProfileData);
      setNewItem('');
      setIsAddModalOpen(false);
      
      // LocalStorage'ı güncelle
      localStorage.setItem(`profile_${params.username}`, JSON.stringify(updatedProfileData));
    }
  };

  const handleEditProfile = () => {
    setProfileData(prev => ({
      ...prev,
      bio: editProfile.bio
    }));
    setIsEditModalOpen(false);
    // LocalStorage'ı güncelle
    localStorage.setItem(`profile_${params.username}`, JSON.stringify({
      ...profileData,
      bio: editProfile.bio
    }));
  };

  const renderEmptyState = (title: string) => (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <Plus className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-lg font-medium mb-2">{title} Ekle</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Henüz hiç {title.toLowerCase()} eklenmemiş
      </p>
      <Button variant="outline" className="gap-2">
        <Plus className="w-4 h-4" />
        {title} Ekle
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/10">
      {/* Profil Başlığı */}
      <div className="bg-gradient-to-b from-primary/20 to-background border-b border-border/50">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-primary/20 rounded-2xl flex items-center justify-center text-4xl font-bold text-primary">
              {params.username.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold">{params.username}</h1>
              <p className="text-muted-foreground mt-1">
                {profileData.bio || 'Henüz bir biyografi eklenmemiş'}
              </p>
            </div>
            <Button onClick={() => setIsEditModalOpen(true)} className="gap-2">
              <Plus className="w-4 h-4" />
              Düzenle
            </Button>
          </div>

          <div className="flex gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2,345</div>
              <div className="text-sm text-muted-foreground">Takipçi</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1,234</div>
              <div className="text-sm text-muted-foreground">Takip</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">234</div>
              <div className="text-sm text-muted-foreground">Gönderi</div>
            </div>
          </div>
        </div>
      </div>

      {/* İçerik Sekmeler */}
      <div className="container max-w-4xl mx-auto px-4 py-6">
        <Tabs defaultValue="hobbies" className="space-y-4" onValueChange={(value) => setCurrentTab(value as TabType)}>
          <TabsList className="grid grid-cols-5 gap-4 bg-transparent">
            <TabsTrigger value="hobbies" className="data-[state=active]:bg-primary/20">
              Hobiler
            </TabsTrigger>
            <TabsTrigger value="movies" className="data-[state=active]:bg-primary/20">
              Filmler
            </TabsTrigger>
            <TabsTrigger value="series" className="data-[state=active]:bg-primary/20">
              Diziler
            </TabsTrigger>
            <TabsTrigger value="games" className="data-[state=active]:bg-primary/20">
              Oyunlar
            </TabsTrigger>
            <TabsTrigger value="skills" className="data-[state=active]:bg-primary/20">
              Yetenekler
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hobbies">
            <div className="space-y-4">
              {profileData.hobbies.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {profileData.hobbies.map((hobby, index) => (
                    <Card key={index} className="p-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <span>{hobby}</span>
                    </Card>
                  ))}
                </div>
              )}
              <div onClick={() => setIsAddModalOpen(true)} className="text-center">
                <Button variant="outline" className="gap-2">
                  <Plus className="w-4 h-4" />
                  Hobi Ekle
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="movies">
            <div className="space-y-4">
              {profileData.movies.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {profileData.movies.map((movie, index) => (
                    <Card key={index} className="p-4">{movie}</Card>
                  ))}
                </div>
              )}
              <div onClick={() => setIsAddModalOpen(true)} className="text-center">
                <Button variant="outline" className="gap-2">
                  <Plus className="w-4 h-4" />
                  Film Ekle
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="series">
            <div className="space-y-4">
              {profileData.series.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {profileData.series.map((series, index) => (
                    <Card key={index} className="p-4">{series}</Card>
                  ))}
                </div>
              )}
              <div onClick={() => setIsAddModalOpen(true)} className="text-center">
                <Button variant="outline" className="gap-2">
                  <Plus className="w-4 h-4" />
                  Dizi Ekle
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="games">
            <div className="space-y-4">
              {profileData.games.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {profileData.games.map((game, index) => (
                    <Card key={index} className="p-4">{game}</Card>
                  ))}
                </div>
              )}
              <div onClick={() => setIsAddModalOpen(true)} className="text-center">
                <Button variant="outline" className="gap-2">
                  <Plus className="w-4 h-4" />
                  Oyun Ekle
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="skills">
            <div className="space-y-4">
              {profileData.skills.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {profileData.skills.map((skill, index) => (
                    <Card key={index} className="p-4">{skill}</Card>
                  ))}
                </div>
              )}
              <div onClick={() => setIsAddModalOpen(true)} className="text-center">
                <Button variant="outline" className="gap-2">
                  <Plus className="w-4 h-4" />
                  Yetenek Ekle
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Edit Profile Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Profili Düzenle</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Kullanıcı Adı</Label>
              <Input
                value={editProfile.username}
                disabled
              />
            </div>
            <div className="space-y-2">
              <Label>Biyografi</Label>
              <Textarea
                value={editProfile.bio}
                onChange={(e) => setEditProfile(prev => ({ ...prev, bio: e.target.value }))}
                placeholder="Kendinizden bahsedin..."
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleEditProfile}>Kaydet</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Item Modal */}
      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{currentTab.charAt(0).toUpperCase() + currentTab.slice(1, -1)} Ekle</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>İsim</Label>
              <Input
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder={`Yeni ${currentTab.slice(0, -1)} adı`}
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleAddItem}>Ekle</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}