'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Users, Plus, X } from 'lucide-react';

interface ProfileData {
  bio: string;
  hobbies: string[];
  movies: string[];
  series: string[];
  games: string[];
  skills: string[];
}

export default function ProfileSetupPage() {
  const router = useRouter();
  const [profileData, setProfileData] = useState<ProfileData>({
    bio: '',
    hobbies: [],
    movies: [],
    series: [],
    games: [],
    skills: [],
  });

  const [newInputs, setNewInputs] = useState({
    hobby: '',
    movie: '',
    series: '',
    game: '',
    skill: '',
  });

  const handleAddItem = (field: keyof typeof newInputs, arrayField: keyof ProfileData) => {
    if (newInputs[field].trim()) {
      setProfileData(prev => ({
        ...prev,
        [arrayField]: [...prev[arrayField], newInputs[field].trim()]
      }));
      setNewInputs(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleRemoveItem = (arrayField: keyof ProfileData, index: number) => {
    setProfileData(prev => ({
      ...prev,
      [arrayField]: prev[arrayField].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Profil verilerini localStorage'a kaydet
    const username = localStorage.getItem('currentUser');
    localStorage.setItem(`profile_${username}`, JSON.stringify(profileData));
    
    // Kullanıcıyı profil sayfasına yönlendir
    router.push(`/profile/${username}`);
  };

  const renderItemList = (
    title: string,
    items: string[],
    inputKey: keyof typeof newInputs,
    arrayField: keyof ProfileData
  ) => (
    <div className="space-y-2">
      <Label>{title}</Label>
      <div className="flex flex-wrap gap-2 mb-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-1 bg-primary/10 text-primary rounded-full px-3 py-1"
          >
            <span className="text-sm">{item}</span>
            <button
              type="button"
              onClick={() => handleRemoveItem(arrayField, index)}
              className="hover:text-red-500"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Input
          value={newInputs[inputKey]}
          onChange={(e) => setNewInputs(prev => ({ ...prev, [inputKey]: e.target.value }))}
          placeholder={`Yeni ${title.toLowerCase()}`}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleAddItem(inputKey, arrayField);
            }
          }}
        />
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => handleAddItem(inputKey, arrayField)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/10 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container max-w-2xl mx-auto"
      >
        <Card className="border-border/50 shadow-2xl">
          <CardHeader className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl">Profil Oluştur</CardTitle>
                <CardDescription>
                  Hobilerinizi ve ilgi alanlarınızı paylaşın
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="bio">Biyografi</Label>
                <Textarea
                  id="bio"
                  placeholder="Kendinizden bahsedin..."
                  value={profileData.bio}
                  onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                  className="min-h-[100px]"
                />
              </div>

              {renderItemList('Hobiler', profileData.hobbies, 'hobby', 'hobbies')}
              {renderItemList('Filmler', profileData.movies, 'movie', 'movies')}
              {renderItemList('Diziler', profileData.series, 'series', 'series')}
              {renderItemList('Oyunlar', profileData.games, 'game', 'games')}
              {renderItemList('Yetenekler', profileData.skills, 'skill', 'skills')}
            </CardContent>

            <CardFooter>
              <Button type="submit" className="w-full">
                Profili Tamamla
              </Button>
            </CardFooter>
          </form>
        </Card>
      </motion.div>
    </div>
  );
} 